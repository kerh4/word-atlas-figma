import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Bookmark, ChevronDown, ChevronLeft, ChevronRight, Pause, Play, Star } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { readSavedWords, savedWordsStorageKey, writeSavedWords } from './savedWordsStorage'
import { cards, type Card } from './catalogCards'
const categories = [
  ['基础方块世界', 'Basic Block World Things'],
  ['方块与建造', 'Blocks And Building'],
  ['动物与伙伴', 'Animals And Friends'],
  ['怪物与首领', 'Monsters And Bosses'],
  ['食物与耕作', 'Food And Farming'],
  ['工具与装备', 'Tools And Gear'],
  ['地点与生物群系', 'Places And Biomes'],
  ['建筑与宝藏', 'Structures And Treasures'],
  ['颜色与材料', 'Colors And Materials'],
  ['动作词汇', 'Action Words'],
] as const
const knownWords = new Set(cards.map(card => card.id))
const rates = [0.5, 0.8, 1, 1.1, 1.2]
const speedNumber = (value: number) => value.toFixed(1)
const speedLabel = (value: number) => `${speedNumber(value)}x`
// Keep this query in sync with the split-layout rules in styles.css.
const splitLayoutQuery = '(min-width: 900px), (min-width: 640px) and (max-height: 600px)'
const imagePreloads = new Map<string, { image: HTMLImageElement; ready: Promise<void>; decoded: boolean }>()
const preloadImage = (src?: string) => {
  if (!src) return Promise.resolve()
  const cached = imagePreloads.get(src)
  if (cached) return cached.ready
  const image = new Image()
  image.src = src
  const entry = { image, ready: Promise.resolve(), decoded: false }
  entry.ready = image.decode().then(() => { entry.decoded = true }).catch(() => undefined)
  imagePreloads.set(src, entry)
  return entry.ready
}

export default function App() {
  const [category, setCategory] = useState('基础方块世界')
  const [view, setView] = useState<'atlas' | 'saved-list' | 'saved-detail'>('atlas')
  const [index, setIndex] = useState(0)
  const [atlasIndex, setAtlasIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [menu, setMenu] = useState<'category' | 'speed' | 'more' | null>(null)
  const [rate, setRate] = useState(1)
  const [saved, setSaved] = useState<string[]>(() => readSavedWords(knownWords))
  const [savedDetailCards, setSavedDetailCards] = useState<Card[]>([])
  const [hideChinese, setHideChinese] = useState(false)
  const [autoAdvance, setAutoAdvance] = useState(true)
  const autoAdvanceRef = useRef(autoAdvance)
  autoAdvanceRef.current = autoAdvance
  const [playing, setPlaying] = useState(false)
  const [pageTransitioning, setPageTransitioning] = useState(false)
  const [paused, setPaused] = useState(false)
  const [speakingWord, setSpeakingWord] = useState(false)
  const activeAudio = useRef<HTMLAudioElement | null>(null)
  const activeFinish = useRef<(() => void) | null>(null)
  const playbackStopTimer = useRef<number | null>(null)
  const autoPlayNext = useRef<number | null>(null)
  const autoPlayTimer = useRef<number | null>(null)
  const navigationRequest = useRef(0)
  const cardScrollRef = useRef<HTMLDivElement | null>(null)
  const illustrationSlotRef = useRef<HTMLDivElement | null>(null)
  const reduceMotion = useReducedMotion()
  const [splitLayout, setSplitLayout] = useState(() => window.matchMedia(splitLayoutQuery).matches)
  const savedCards = saved.map(id => cards.find(card => card.id === id)).filter((card): card is Card => Boolean(card))
  const visibleCards = view === 'saved-detail' ? savedDetailCards : cards.filter(card => card.category === category)
  const card = visibleCards[index]
  const t = (zh: string, en: string) => hideChinese ? en : zh
  const categoryLabel = (zh: string) => hideChinese ? categories.find(pair => pair[0] === zh)?.[1] || zh : zh
  useLayoutEffect(() => {
    const query = window.matchMedia(splitLayoutQuery)
    const update = () => setSplitLayout(query.matches)
    update()
    query.addEventListener('change', update)
    window.addEventListener('resize', update)
    window.addEventListener('orientationchange', update)
    window.visualViewport?.addEventListener('resize', update)
    return () => {
      query.removeEventListener('change', update)
      window.removeEventListener('resize', update)
      window.removeEventListener('orientationchange', update)
      window.visualViewport?.removeEventListener('resize', update)
    }
  }, [])
  useEffect(() => { writeSavedWords(saved) }, [saved])
  useEffect(() => {
    const syncSavedWords = (event: StorageEvent) => {
      if (event.key === savedWordsStorageKey || event.key === null) setSaved(readSavedWords(knownWords))
    }
    window.addEventListener('storage', syncSavedWords)
    return () => window.removeEventListener('storage', syncSavedWords)
  }, [])
  useEffect(() => { if (index >= visibleCards.length) setIndex(Math.max(0, visibleCards.length - 1)) }, [index, visibleCards.length])
  useEffect(() => {
    for (const nearby of [index, index - 1, index + 1, index + 2]) void preloadImage(visibleCards[nearby]?.image)
  }, [index, category, view, saved])
  useLayoutEffect(() => {
    const scroll = cardScrollRef.current
    if (!scroll) return
    const illustrationSlot = illustrationSlotRef.current
    const illustration = illustrationSlot?.firstElementChild as HTMLElement | null
    if (!illustrationSlot || !illustration) return
    const definition = illustrationSlot.closest('.card-body')?.querySelector('.definition')
    scroll.scrollTop = 0
    if (definition) definition.scrollTop = 0
    // Wide screens keep the illustration visible and use native text scrolling.
    if (splitLayout) {
      illustrationSlot.style.removeProperty('height')
      illustration.style.removeProperty('height')
      illustration.style.removeProperty('width')
      illustration.style.removeProperty('transform')
      return
    }
    let maxHeight = 280
    let currentHeight = 280
    let fullOverflow = 0
    const applyIllustrationSize = () => {
      const scale = maxHeight > 0 ? currentHeight / maxHeight : 1
      illustrationSlot.style.height = `${currentHeight}px`
      illustration.style.transform = `scale(${scale})`
    }
    const measure = () => {
      const progress = maxHeight ? currentHeight / maxHeight : 1
      // The scroll pane extends behind the header and controls; size the image from
      // the unobscured reading area so the overlay does not enlarge the image.
      const headerDepth = parseFloat(getComputedStyle(scroll).paddingTop) || 0
      maxHeight = Math.min(360, illustrationSlot.clientWidth * 0.8, (scroll.clientHeight - headerDepth - 146) * 0.6)
      currentHeight = Math.max(maxHeight * 0.5, maxHeight * progress)
      illustration.style.width = `${maxHeight / 0.8}px`
      illustration.style.height = `${maxHeight}px`
      applyIllustrationSize()
      fullOverflow = Math.max(0, scroll.scrollHeight - scroll.clientHeight + maxHeight - currentHeight)
    }
    measure()
    scroll.scrollTop = 0
    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(scroll)
    if (definition) resizeObserver.observe(definition)
    const consumeScroll = (delta: number, managed = false) => {
      const top = scroll.scrollTop
      const overflow = Math.max(0, fullOverflow - maxHeight + currentHeight)
      const minHeight = maxHeight * 0.5
      if (delta > 0 && currentHeight > minHeight && overflow > 0) {
        const shrink = Math.min(delta, currentHeight - minHeight, overflow)
        currentHeight -= shrink
        applyIllustrationSize()
        scroll.scrollTop = top + delta - shrink
        return true
      }
      if (delta < 0 && currentHeight < maxHeight && top + delta < 0) {
        const expansion = Math.min(-(top + delta), maxHeight - currentHeight)
        currentHeight += expansion
        applyIllustrationSize()
        scroll.scrollTop = 0
        return true
      }
      if (managed) {
        scroll.scrollTop = top + delta
        return true
      }
      return false
    }
    let momentumFrame = 0
    const stopMomentum = () => { if (momentumFrame) cancelAnimationFrame(momentumFrame); momentumFrame = 0 }
    const onWheel = (event: WheelEvent) => {
      stopMomentum()
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? scroll.clientHeight : 1)
      if (consumeScroll(delta)) event.preventDefault()
    }
    let startTouchX = 0
    let startTouchY = 0
    let touchAxis: 'horizontal' | 'vertical' | null = null
    let lastTouchY = 0
    let lastTouchTime = 0
    let velocity = 0
    let managedTouch = false
    const onTouchStart = (event: TouchEvent) => {
      stopMomentum()
      startTouchX = event.touches[0]?.clientX ?? 0
      startTouchY = event.touches[0]?.clientY ?? 0
      touchAxis = null
      lastTouchY = event.touches[0]?.clientY ?? 0
      lastTouchTime = performance.now()
      velocity = 0
      managedTouch = false
    }
    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0]
      const y = touch?.clientY ?? lastTouchY
      if (!touchAxis) {
        const dx = Math.abs((touch?.clientX ?? startTouchX) - startTouchX)
        const dy = Math.abs(y - startTouchY)
        if (Math.max(dx, dy) > 8) touchAxis = dx > dy * 1.15 ? 'horizontal' : 'vertical'
      }
      if (!touchAxis) return
      if (touchAxis === 'horizontal') return
      const now = performance.now()
      const delta = lastTouchY - y
      if (consumeScroll(delta, managedTouch)) {
        event.preventDefault()
        managedTouch = true
        velocity = Math.max(-2, Math.min(2, delta / Math.max(8, now - lastTouchTime)))
      }
      lastTouchY = y
      lastTouchTime = now
    }
    const onTouchEnd = () => {
      if (touchAxis === 'horizontal' || !managedTouch || reduceMotion || performance.now() - lastTouchTime > 80 || Math.abs(velocity) < 0.05) return
      let previousFrame = 0
      const startedAt = performance.now()
      const coast = (now: number) => {
        if (!previousFrame) { previousFrame = now; momentumFrame = requestAnimationFrame(coast); return }
        const elapsed = Math.min(32, now - previousFrame)
        previousFrame = now
        const top = scroll.scrollTop
        const overflow = Math.max(0, fullOverflow - maxHeight + currentHeight)
        const canMove = velocity > 0
          ? currentHeight > maxHeight * 0.5 || top < overflow
          : currentHeight < maxHeight || top > 0
        if (!canMove || elapsed <= 0) { momentumFrame = 0; return }
        consumeScroll(velocity * elapsed, true)
        velocity *= Math.pow(0.93, elapsed / 16)
        momentumFrame = Math.abs(velocity) >= 0.05 && now - startedAt < 900 ? requestAnimationFrame(coast) : 0
      }
      momentumFrame = requestAnimationFrame(coast)
    }
    scroll.addEventListener('wheel', onWheel, { passive: false })
    scroll.addEventListener('touchstart', onTouchStart, { passive: true })
    scroll.addEventListener('touchmove', onTouchMove, { passive: false })
    scroll.addEventListener('touchend', onTouchEnd)
    scroll.addEventListener('touchcancel', stopMomentum)
    return () => {
      stopMomentum()
      resizeObserver.disconnect()
      scroll.removeEventListener('wheel', onWheel)
      scroll.removeEventListener('touchstart', onTouchStart)
      scroll.removeEventListener('touchmove', onTouchMove)
      scroll.removeEventListener('touchend', onTouchEnd)
      scroll.removeEventListener('touchcancel', stopMomentum)
      // Keep the exiting card's measured geometry intact until its slide finishes.
    }
  }, [card?.id, view, reduceMotion, splitLayout])
  useEffect(() => () => {
    if (playbackStopTimer.current !== null) window.clearTimeout(playbackStopTimer.current)
    activeAudio.current?.pause()
  }, [])
  useEffect(() => {
    if (!menu) return
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!(event.target as Element).closest('[data-popover-root]')) setMenu(null)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenu(null)
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menu])
  const stopAudio = () => {
    if (autoPlayTimer.current !== null) window.clearTimeout(autoPlayTimer.current)
    if (playbackStopTimer.current !== null) window.clearTimeout(playbackStopTimer.current)
    autoPlayTimer.current = null
    playbackStopTimer.current = null
    autoPlayNext.current = null
    activeAudio.current?.pause()
    activeAudio.current = null
    activeFinish.current = null
    setPlaying(false)
    setPaused(false)
    setSpeakingWord(false)
  }
  const speak = (fromMainButton = false, cardIndex = index) => {
    const audioCard = visibleCards[cardIndex]
    if (!audioCard) return
    stopAudio()
    const audio = new Audio(audioCard.audio.src)
    const start = fromMainButton ? audioCard.audio.wordStart : audioCard.audio.sentenceStart
    const finish = () => {
      if (activeAudio.current !== audio) return
      if (playbackStopTimer.current !== null) window.clearTimeout(playbackStopTimer.current)
      playbackStopTimer.current = null
      audio.pause()
      activeAudio.current = null
      activeFinish.current = null
      setPlaying(false)
      setPaused(false)
      setSpeakingWord(false)
      if (autoAdvanceRef.current && cardIndex < visibleCards.length - 1) goTo(cardIndex + 1, true)
    }
    activeAudio.current = audio
    activeFinish.current = finish
    setPlaying(true)
    setSpeakingWord(fromMainButton)
    audio.preload = 'auto'
    audio.playbackRate = rate
    audio.currentTime = start
    audio.ontimeupdate = () => {
      if (audio.currentTime >= audioCard.audio.end) finish()
    }
    audio.onended = finish
    audio.onerror = finish
    void audio.play().then(() => {
      playbackStopTimer.current = window.setTimeout(finish, ((audioCard.audio.end - start) / rate) * 1000 + 300)
    }).catch(finish)
  }
  const toggleWordPlayback = () => {
    if (!card) return
    if (playing && speakingWord) {
      if (paused) {
        void activeAudio.current?.play()
        if (activeAudio.current) playbackStopTimer.current = window.setTimeout(() => activeFinish.current?.(), ((card.audio.end - activeAudio.current.currentTime) / rate) * 1000 + 300)
      } else {
        activeAudio.current?.pause()
        if (playbackStopTimer.current !== null) window.clearTimeout(playbackStopTimer.current)
        playbackStopTimer.current = null
      }
      setPaused(!paused)
    } else speak(true)
  }
  const chooseCategory = (value: string) => { navigationRequest.current++; stopAudio(); setCategory(value); setView('atlas'); setIndex(0); setMenu(null) }
  const openSavedList = () => { navigationRequest.current++; stopAudio(); setAtlasIndex(index); setView('saved-list'); setMenu(null) }
  const openSavedDetail = (id: string) => {
    const detailIndex = savedCards.findIndex(card => card.id === id)
    if (detailIndex < 0) return
    navigationRequest.current++
    stopAudio()
    // Keep the opened browsing sequence stable if a word is unsaved in its detail view.
    setSavedDetailCards(savedCards)
    setIndex(detailIndex)
    setDirection(1)
    setView('saved-detail')
    setMenu(null)
  }
  const backToSavedList = () => { navigationRequest.current++; stopAudio(); setView('saved-list'); setMenu(null) }
  const backToAtlas = () => { navigationRequest.current++; stopAudio(); setView('atlas'); setIndex(atlasIndex); setMenu(null) }
  const goTo = (value: number, playNext = false) => {
    const target = visibleCards[value]
    if (!target) return
    const request = ++navigationRequest.current
    stopAudio()
    setMenu(null)
    const complete = () => {
      if (request !== navigationRequest.current) return
      setPageTransitioning(true)
      setDirection(value > index ? 1 : -1)
      if (playNext) autoPlayNext.current = value
      setIndex(value)
    }
    if (!target.image || imagePreloads.get(target.image)?.decoded) complete()
    else void preloadImage(target.image).then(complete)
  }
  useEffect(() => {
    if (autoPlayNext.current !== index || !card) return
    autoPlayNext.current = null
    autoPlayTimer.current = window.setTimeout(() => {
      autoPlayTimer.current = null
      if (autoAdvanceRef.current) speak(true, index)
    }, reduceMotion ? 0 : 460)
    return () => {
      if (autoPlayTimer.current !== null) window.clearTimeout(autoPlayTimer.current)
      autoPlayTimer.current = null
    }
  }, [index, view, category, card?.id, reduceMotion])
  const toggleSaved = () => {
    if (!card) return
    setSaved(current => current.includes(card.id) ? current.filter(value => value !== card.id) : [...current, card.id])
  }
  return <main className="page-shell"><section className="phone" aria-label={t('单词图鉴', 'Word Atlas')}>
    <div className={`content content--${view}${view !== 'saved-list' && card ? ' content--study' : ''}${pageTransitioning ? ' content--transitioning' : ''}`}>
      {view === 'atlas' && <div className="category-row"><div className="popover-anchor" data-popover-root><button className="category-btn" aria-expanded={menu === 'category'} onClick={() => setMenu(menu === 'category' ? null : 'category')}>{categoryLabel(category)} <ChevronDown size={16}/></button>{menu === 'category' && <div className="menu category-menu">{categories.map(([zh, en]) => <button key={zh} onClick={() => chooseCategory(zh)}>{hideChinese ? en : zh}</button>)}</div>}</div><button className="favourites" onClick={openSavedList}><Bookmark className="favourites-icon" size={16} fill="currentColor"/><span>{t('收藏夹', 'Saved')} {saved.length}</span><ChevronRight size={13}/></button></div>}
      {view === 'saved-list' && <>
        <header className="subpage-header"><button className="subpage-back" onClick={backToAtlas} aria-label={t('返回单词图鉴', 'Back to Word Atlas')}><ChevronLeft size={22}/></button><h1>{t('收藏夹', 'Saved words')}({savedCards.length})</h1></header>
        {savedCards.length ? <div className="saved-list" aria-label={t('已收藏单词', 'Saved words')}>
          {savedCards.map(savedCard => <button className="saved-row" key={savedCard.id} aria-label={`${savedCard.word}，${hideChinese ? savedCard.phonetic : savedCard.meaning}，${t('查看卡片', 'View card')}`} onClick={() => openSavedDetail(savedCard.id)}>
            <span className="saved-thumb" aria-hidden="true">{savedCard.image ? <img src={savedCard.image} alt="" /> : <span>{savedCard.word}</span>}</span>
            <span className="saved-row-copy"><span className="saved-word-line"><strong>{savedCard.word}</strong><span>{hideChinese ? savedCard.phonetic : savedCard.meaning}</span></span><small>{savedCard.sentence}</small></span>
            <ChevronRight className="saved-row-arrow" size={18}/>
          </button>)}
        </div> : <div className="saved-empty"><Bookmark size={30}/><h2>{t('还没有收藏的单词', 'No saved words yet')}</h2><p>{t('在单词卡片上点按「收藏」，就能在这里找到它。', 'Save a word from its card to find it here.')}</p><button onClick={backToAtlas}>{t('返回单词图鉴', 'Back to Word Atlas')}</button></div>}
      </>}
      {view === 'saved-detail' && <header className="subpage-header"><button className="subpage-back subpage-back-label" onClick={backToSavedList} aria-label={t('返回收藏夹', 'Back to saved words')}><ChevronLeft size={22}/><span>{t('收藏夹', 'Saved words')}</span></button><span className="subpage-context">{t('单词详情', 'Word card')}</span></header>}
      {view !== 'saved-list' && (card ? <>
        <div className="card-scroll" ref={cardScrollRef}>
        <div className="card-stage"><AnimatePresence initial={false} custom={direction} mode="popLayout"><motion.div className="card-body" key={card.id} custom={direction} initial="enter" animate="center" exit="exit" variants={{enter: (side: number) => ({ x: reduceMotion ? 0 : `${side * 100}%` }), center: { x: 0 }, exit: (side: number) => ({ x: reduceMotion ? 0 : `${-side * 100}%` })}} transition={{ duration: reduceMotion ? 0.01 : 0.46, ease: [0.4, 0, 0.2, 1] }} onAnimationComplete={animation => { if (animation === 'center') setPageTransitioning(false) }}>
          <div className="illustration-slot" ref={illustrationSlotRef}><div className="illustration">{card.image ? <img src={card.image} alt={t(`${card.word} 的像素风插画`, `Pixel art illustration of ${card.word}`)} decoding="sync" draggable={false} /> : <div className="missing-image">{card.word}</div>}</div></div>
          <section className="definition"><div className="word-row"><div><h2>{card.word}</h2>{(card.phonetic || (!hideChinese && card.meaning)) && <p className="phonetic">{card.phonetic}{card.phonetic && !hideChinese && card.meaning && <span>·</span>}{!hideChinese && card.meaning}</p>}</div><button className={playing && speakingWord && !paused ? 'play is-playing' : 'play'} aria-label={playing && speakingWord && !paused ? t('暂停朗读', 'Pause reading') : t('朗读本页', 'Read this card')} onClick={toggleWordPlayback}>{playing && speakingWord && !paused ? <Pause size={26} fill="currentColor" /> : <Play size={28} fill="currentColor" />}</button></div><button className="example" aria-label={t('朗读例句', 'Read example sentence')} onClick={() => speak(false)}><p>{card.sentence}</p>{!hideChinese && card.translation && <small>{card.translation}</small>}</button></section>
        </motion.div></AnimatePresence></div>
        <div className="spacer" />
        </div>
        <div className="study-backdrop" aria-hidden="true" />
        <div className="toolbar"><div className="popover-anchor" data-popover-root><button aria-expanded={menu === 'speed'} onClick={() => setMenu(menu === 'speed' ? null : 'speed')}>{t('语速', 'Speed')} <span className="speed-display">{speedNumber(rate)}<span className="speed-times">x</span></span> <ChevronDown size={16}/></button>{menu === 'speed' && <div className="menu rate-menu">{rates.map(value => <button key={value} onClick={() => { setRate(value); setMenu(null) }}>{speedLabel(value)} {value === rate && <b className="selected-dot" aria-label={t('当前语速', 'Current speed')} />}</button>)}</div>}</div><button className={saved.includes(card.id) ? 'saved' : ''} onClick={toggleSaved}><Star size={16} fill={saved.includes(card.id) ? 'currentColor' : 'none'}/>{saved.includes(card.id) ? t('已收藏', 'Saved') : t('收藏', 'Save')}</button><div className="popover-anchor" data-popover-root><button aria-expanded={menu === 'more'} onClick={() => setMenu(menu === 'more' ? null : 'more')}>{t('更多', 'More')} <ChevronDown size={16}/></button>{menu === 'more' && <div className="menu more-menu"><label>{t('隐藏中文', 'Hide Chinese')} <input type="checkbox" checked={hideChinese} onChange={e => setHideChinese(e.target.checked)} /></label><label>{t('自动翻页', 'Auto advance')} <input type="checkbox" checked={autoAdvance} onChange={e => setAutoAdvance(e.target.checked)} /></label></div>}</div></div>
        <footer className="pager"><button className="prev" onClick={() => goTo(index - 1)} disabled={index === 0}><span className="pager-action"><ChevronLeft size={20}/><span className="pager-label">{t('上一张', 'Previous')}</span></span></button><span>{String(index + 1).padStart(2, '0')} / {String(visibleCards.length).padStart(2, '0')}</span><button className="next" onClick={() => goTo(index + 1)} disabled={index === visibleCards.length - 1}><span className="pager-action"><span className="pager-label">{t('下一张', 'Next')}</span><ChevronRight size={20}/></span></button></footer>
      </> : <div className="empty-state"><Bookmark size={32}/><h2>{t('这个分类暂无单词', 'No words in this category yet')}</h2><p>{t('可以切换分类继续浏览。', 'Choose another category to continue.')}</p></div>)}
    </div></section></main>
}
