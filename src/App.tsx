import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Bookmark, ChevronDown, ChevronLeft, ChevronRight, Pause, Play, Star } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

type Card = { word: string; phonetic: string; meaning: string; sentence: string; translation: string; category: string; image?: string }
const cards: Card[] = [
  { word: 'Player', phonetic: '/ˈpleɪə(r)/', meaning: 'n. 玩家', sentence: 'A brave player.', translation: '一位勇敢的玩家。', category: '基础词汇', image: '/assets/figma-raw-2.png' },
  { word: 'Forest', phonetic: '/ˈfɒrɪst/', meaning: 'n. 森林', sentence: 'The fox lives in the forest. Every morning, it follows a narrow path between the tall trees, listens to the birds singing above, and looks for a quiet place beside the stream. When the sunlight reaches the leaves, the whole forest seems to glow, and the fox knows it is time to explore a little farther. It passes a fallen log covered in soft moss, watches a family of rabbits disappear into the grass, and pauses to hear the wind moving through the branches. By evening, the fox returns home with many new stories about the forest.', translation: '狐狸住在森林里。每天早晨，它沿着高大树木之间的一条小路前行，听着头顶鸟儿的歌声，寻找溪边安静的地方。阳光照到树叶时，整片森林仿佛亮了起来，狐狸也知道，该继续往更远处探索了。它经过一根长满柔软苔藓的倒木，看着一群兔子消失在草丛中，还停下来聆听风吹过树枝的声音。傍晚，狐狸带着许多关于森林的新故事回到了家。', category: '自然与探索' },
  { word: 'Sword', phonetic: '/sɔːd/', meaning: 'n. 剑', sentence: 'The sword is very sharp.', translation: '这把剑非常锋利。', category: '工具与装备' },
]
const categories = [
  ['基础词汇', 'Basic Words'], ['自然与探索', 'Nature & Discovery'], ['生物与伙伴', 'Creatures & Friends'],
  ['方块与材料', 'Blocks & Materials'], ['工具与装备', 'Tools & Gear'], ['建筑与空间', 'Buildings & Places'],
  ['食物与生存', 'Food & Survival'], ['动作与冒险', 'Actions & Adventure'], ['天气与环境', 'Weather & World'],
  ['村庄与生活', 'Village & Life'], ['创造与想象', 'Create & Imagine'],
] as const
const rates = [0.5, 0.8, 1, 1.25, 1.5]
const speedNumber = (value: number) => value === 1.25 ? '1.25' : value.toFixed(1)
const speedLabel = (value: number) => `${speedNumber(value)}×`

export default function App() {
  const [category, setCategory] = useState('基础词汇')
  const [view, setView] = useState<'atlas' | 'saved-list' | 'saved-detail'>('atlas')
  const [index, setIndex] = useState(0)
  const [atlasIndex, setAtlasIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [menu, setMenu] = useState<'category' | 'speed' | 'more' | null>(null)
  const [rate, setRate] = useState(1)
  const [saved, setSaved] = useState<string[]>(() => { try { return JSON.parse(localStorage.getItem('word-atlas-saved') || '[]') } catch { return [] } })
  const [hideChinese, setHideChinese] = useState(false)
  const [autoAdvance, setAutoAdvance] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [paused, setPaused] = useState(false)
  const [speakingWord, setSpeakingWord] = useState(false)
  const [illustrationHeight, setIllustrationHeight] = useState(280)
  const illustrationHeightRef = useRef(280)
  const activeSpeech = useRef<SpeechSynthesisUtterance | null>(null)
  const cardScrollRef = useRef<HTMLDivElement | null>(null)
  const reduceMotion = useReducedMotion()
  const savedCards = saved.map(word => cards.find(card => card.word === word)).filter((card): card is Card => Boolean(card))
  const visibleCards = view === 'saved-detail' ? savedCards : category === '基础词汇' ? cards : cards.filter(card => card.category === category)
  const card = visibleCards[index]
  const t = (zh: string, en: string) => hideChinese ? en : zh
  const categoryLabel = (zh: string) => hideChinese ? categories.find(pair => pair[0] === zh)?.[1] || zh : zh
  useEffect(() => { localStorage.setItem('word-atlas-saved', JSON.stringify(saved)) }, [saved])
  useEffect(() => { if (index >= visibleCards.length) setIndex(Math.max(0, visibleCards.length - 1)) }, [index, visibleCards.length])
  useLayoutEffect(() => {
    const scroll = cardScrollRef.current
    if (!scroll) return
    illustrationHeightRef.current = 280
    setIllustrationHeight(280)
    scroll.scrollTop = 0
    const consumeScroll = (delta: number) => {
      const height = illustrationHeightRef.current
      if (delta > 0 && height > 140) {
        const overflow = scroll.scrollHeight - scroll.clientHeight
        const change = Math.min(delta, overflow, height - 140)
        if (change <= 0) return false
        illustrationHeightRef.current = height - change
      } else if (delta < 0 && height < 280 && scroll.scrollTop <= 0) {
        illustrationHeightRef.current = Math.min(280, height - delta)
      } else return false
      setIllustrationHeight(illustrationHeightRef.current)
      return true
    }
    const onWheel = (event: WheelEvent) => { if (consumeScroll(event.deltaY)) event.preventDefault() }
    let lastTouchY = 0
    const onTouchStart = (event: TouchEvent) => { lastTouchY = event.touches[0]?.clientY ?? 0 }
    const onTouchMove = (event: TouchEvent) => {
      const y = event.touches[0]?.clientY ?? lastTouchY
      if (consumeScroll(lastTouchY - y)) event.preventDefault()
      lastTouchY = y
    }
    scroll.addEventListener('wheel', onWheel, { passive: false })
    scroll.addEventListener('touchstart', onTouchStart, { passive: true })
    scroll.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      scroll.removeEventListener('wheel', onWheel)
      scroll.removeEventListener('touchstart', onTouchStart)
      scroll.removeEventListener('touchmove', onTouchMove)
    }
  }, [card?.word])
  useEffect(() => () => window.speechSynthesis?.cancel(), [])
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
    activeSpeech.current = null
    window.speechSynthesis?.cancel()
    setPlaying(false)
    setPaused(false)
    setSpeakingWord(false)
  }
  const speak = (text: string, sentence = false) => {
    if (!window.speechSynthesis) return
    stopAudio()
    const speech = new SpeechSynthesisUtterance(text)
    activeSpeech.current = speech
    setPlaying(true)
    setSpeakingWord(!sentence)
    speech.lang = 'en-US'
    speech.rate = rate
    speech.onend = () => {
      if (activeSpeech.current !== speech) return
      activeSpeech.current = null
      setPlaying(false)
      setPaused(false)
      setSpeakingWord(false)
      if (sentence && autoAdvance) { setDirection(1); setIndex(i => Math.min(i + 1, visibleCards.length - 1)) }
    }
    speech.onerror = () => {
      if (activeSpeech.current !== speech) return
      activeSpeech.current = null
      setPlaying(false)
      setPaused(false)
      setSpeakingWord(false)
    }
    window.speechSynthesis.speak(speech)
  }
  const toggleWordPlayback = () => {
    if (!card) return
    if (playing && speakingWord) {
      if (paused) window.speechSynthesis.resume()
      else window.speechSynthesis.pause()
      setPaused(!paused)
    } else speak(card.word)
  }
  const chooseCategory = (value: string) => { stopAudio(); setCategory(value); setView('atlas'); setIndex(0); setMenu(null) }
  const openSavedList = () => { stopAudio(); setAtlasIndex(index); setView('saved-list'); setMenu(null) }
  const openSavedDetail = (word: string) => { stopAudio(); setIndex(savedCards.findIndex(card => card.word === word)); setDirection(1); setView('saved-detail'); setMenu(null) }
  const backToSavedList = () => { stopAudio(); setView('saved-list'); setMenu(null) }
  const backToAtlas = () => { stopAudio(); setView('atlas'); setIndex(atlasIndex); setMenu(null) }
  const goTo = (value: number) => { stopAudio(); setDirection(value > index ? 1 : -1); setIndex(value); setMenu(null) }
  const toggleSaved = () => {
    if (!card) return
    if (view === 'saved-detail' && saved.includes(card.word)) backToSavedList()
    setSaved(current => current.includes(card.word) ? current.filter(value => value !== card.word) : [...current, card.word])
  }
  return <main className="page-shell"><section className="phone" aria-label={t('单词图鉴', 'Word Atlas')}>
    <div className="content">
      {view === 'atlas' && <div className="category-row"><div className="popover-anchor" data-popover-root><button className="category-btn" aria-expanded={menu === 'category'} onClick={() => setMenu(menu === 'category' ? null : 'category')}>{categoryLabel(category)} <ChevronDown size={16}/></button>{menu === 'category' && <div className="menu category-menu">{categories.map(([zh, en]) => <button key={zh} onClick={() => chooseCategory(zh)}>{hideChinese ? en : zh}</button>)}</div>}</div><button className="favourites" onClick={openSavedList}><Bookmark size={16} fill="currentColor"/> {t('收藏夹', 'Saved')} {saved.length} <ChevronRight size={13}/></button></div>}
      {view === 'saved-list' && <>
        <header className="subpage-header"><button className="subpage-back" onClick={backToAtlas} aria-label={t('返回单词图鉴', 'Back to Word Atlas')}><ChevronLeft size={22}/></button><h1>{t('收藏夹', 'Saved words')}</h1><span className="subpage-count">{savedCards.length}</span></header>
        {savedCards.length ? <div className="saved-list" aria-label={t('已收藏单词', 'Saved words')}>
          {savedCards.map(savedCard => <button className="saved-row" key={savedCard.word} aria-label={`${savedCard.word}，${hideChinese ? savedCard.phonetic : savedCard.meaning}，${t('查看卡片', 'View card')}`} onClick={() => openSavedDetail(savedCard.word)}>
            <span className="saved-thumb" aria-hidden="true">{savedCard.image ? <img src={savedCard.image} alt="" /> : <span>{savedCard.word}</span>}</span>
            <span className="saved-row-copy"><strong>{savedCard.word}</strong><span>{hideChinese ? savedCard.phonetic : savedCard.meaning}</span><small>{savedCard.sentence}</small></span>
            <ChevronRight className="saved-row-arrow" size={18}/>
          </button>)}
        </div> : <div className="saved-empty"><Bookmark size={30}/><h2>{t('还没有收藏的单词', 'No saved words yet')}</h2><p>{t('在单词卡片上点按「收藏」，就能在这里找到它。', 'Save a word from its card to find it here.')}</p><button onClick={backToAtlas}>{t('返回单词图鉴', 'Back to Word Atlas')}</button></div>}
      </>}
      {view === 'saved-detail' && <header className="subpage-header"><button className="subpage-back subpage-back-label" onClick={backToSavedList} aria-label={t('返回收藏夹', 'Back to saved words')}><ChevronLeft size={22}/><span>{t('收藏夹', 'Saved words')}</span></button><span className="subpage-context">{t('单词详情', 'Word card')}</span></header>}
      {view !== 'saved-list' && (card ? <>
        <div className="card-scroll" ref={cardScrollRef}>
        <div className="card-stage"><AnimatePresence initial={false} custom={direction} mode="popLayout"><motion.div className="card-body" key={card.word} custom={direction} initial="enter" animate="center" exit="exit" variants={{enter: (side: number) => ({ transform: reduceMotion ? 'translateX(0)' : `translateX(${side * 100}%)`, opacity: 0 }), center: { transform: 'translateX(0)', opacity: 1 }, exit: (side: number) => ({ transform: reduceMotion ? 'translateX(0)' : `translateX(${-side * 100}%)`, opacity: 0 })}} transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}>
          <div className="illustration" style={{ height: illustrationHeight }}>{card.image ? <img src={card.image} alt={t('手持宝剑的像素风玩家', 'Pixel art player with a sword')} /> : <div className="missing-image">{card.word}</div>}</div>
          <section className="definition"><div className="word-row"><div><h2>{card.word}</h2><p className="phonetic">{card.phonetic}{!hideChinese && <><span>·</span>{card.meaning}</>}</p></div><button className={playing && speakingWord && !paused ? 'play is-playing' : 'play'} aria-label={playing && speakingWord && !paused ? t('暂停朗读', 'Pause pronunciation') : t('朗读单词', 'Pronounce word')} onClick={toggleWordPlayback}>{playing && speakingWord && !paused ? <Pause size={26} fill="currentColor" /> : <Play size={28} fill="currentColor" />}</button></div><button className="example" aria-label={t('朗读例句', 'Read example sentence')} onClick={() => speak(card.sentence, true)}><p>{card.sentence}</p>{!hideChinese && <small>{card.translation}</small>}</button></section>
        </motion.div></AnimatePresence></div>
        <div className="spacer" />
        </div>
        <div className="toolbar"><div className="popover-anchor" data-popover-root><button aria-expanded={menu === 'speed'} onClick={() => setMenu(menu === 'speed' ? null : 'speed')}>{t('语速', 'Speed')} <span className="speed-display">{speedNumber(rate)}<span className="speed-times">×</span></span> <ChevronDown size={16}/></button>{menu === 'speed' && <div className="menu rate-menu">{rates.map(value => <button key={value} onClick={() => { setRate(value); setMenu(null) }}>{speedLabel(value)} {value === rate && <b className="selected-dot" aria-label={t('当前语速', 'Current speed')} />}</button>)}</div>}</div><button className={saved.includes(card.word) ? 'saved' : ''} onClick={toggleSaved}><Star size={16} fill={saved.includes(card.word) ? 'currentColor' : 'none'}/>{saved.includes(card.word) ? t('已收藏', 'Saved') : t('收藏', 'Save')}</button><div className="popover-anchor" data-popover-root><button aria-expanded={menu === 'more'} onClick={() => setMenu(menu === 'more' ? null : 'more')}>{t('更多', 'More')} <ChevronDown size={16}/></button>{menu === 'more' && <div className="menu more-menu"><label>{t('隐藏中文', 'Hide Chinese')} <input type="checkbox" checked={hideChinese} onChange={e => setHideChinese(e.target.checked)} /></label><label>{t('自动翻页', 'Auto advance')} <input type="checkbox" checked={autoAdvance} onChange={e => setAutoAdvance(e.target.checked)} /></label></div>}</div></div>
        <footer className="pager"><button className="prev" onClick={() => goTo(index - 1)} disabled={index === 0}><span className="pager-action"><ChevronLeft size={20}/><span className="pager-label">{t('上一张', 'Previous')}</span></span></button><span>{String(index + 1).padStart(2, '0')} / {String(visibleCards.length).padStart(2, '0')}</span><button className="next" onClick={() => goTo(index + 1)} disabled={index === visibleCards.length - 1}><span className="pager-action"><span className="pager-label">{t('下一张', 'Next')}</span><ChevronRight size={20}/></span></button></footer>
      </> : <div className="empty-state"><Bookmark size={32}/><h2>{t('这个分类暂无单词', 'No words in this category yet')}</h2><p>{t('可以切换分类继续浏览。', 'Choose another category to continue.')}</p></div>)}
    </div></section></main>
}
