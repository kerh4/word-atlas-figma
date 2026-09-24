import { useEffect, useState } from 'react'
import { Bookmark, ChevronDown, ChevronLeft, ChevronRight, Play, Star } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

type Card = { word: string; phonetic: string; meaning: string; sentence: string; translation: string; category: string; image?: string }
const cards: Card[] = [
  { word: 'Player', phonetic: '/ˈpleɪə(r)/', meaning: 'n. 玩家', sentence: 'A brave player.', translation: '一位勇敢的玩家。', category: '基础词汇', image: '/assets/figma-raw-2.png' },
  { word: 'Forest', phonetic: '/ˈfɒrɪst/', meaning: 'n. 森林', sentence: 'The fox lives in the forest.', translation: '狐狸住在森林里。', category: '自然与探索' },
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
  const [savedView, setSavedView] = useState(false)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [menu, setMenu] = useState<'category' | 'speed' | 'more' | null>(null)
  const [rate, setRate] = useState(1)
  const [saved, setSaved] = useState<string[]>(() => { try { return JSON.parse(localStorage.getItem('word-atlas-saved') || '[]') } catch { return [] } })
  const [hideChinese, setHideChinese] = useState(false)
  const [autoAdvance, setAutoAdvance] = useState(true)
  const [playing, setPlaying] = useState(false)
  const reduceMotion = useReducedMotion()
  const visibleCards = savedView ? cards.filter(card => saved.includes(card.word)) : category === '基础词汇' ? cards : cards.filter(card => card.category === category)
  const card = visibleCards[index]
  const t = (zh: string, en: string) => hideChinese ? en : zh
  const categoryLabel = (zh: string) => hideChinese ? categories.find(pair => pair[0] === zh)?.[1] || zh : zh
  useEffect(() => { localStorage.setItem('word-atlas-saved', JSON.stringify(saved)) }, [saved])
  useEffect(() => { if (index >= visibleCards.length) setIndex(Math.max(0, visibleCards.length - 1)) }, [index, visibleCards.length])
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
  const stopAudio = () => { window.speechSynthesis?.cancel(); setPlaying(false) }
  const speak = (text: string, sentence = false) => {
    if (!window.speechSynthesis) return
    stopAudio()
    const speech = new SpeechSynthesisUtterance(text)
    speech.lang = 'en-US'
    speech.rate = rate
    speech.onstart = () => setPlaying(true)
    speech.onend = () => { setPlaying(false); if (sentence && autoAdvance) { setDirection(1); setIndex(i => Math.min(i + 1, visibleCards.length - 1)) } }
    speech.onerror = () => setPlaying(false)
    window.speechSynthesis.speak(speech)
  }
  const chooseCategory = (value: string) => { stopAudio(); setCategory(value); setSavedView(false); setIndex(0); setMenu(null) }
  const goTo = (value: number) => { stopAudio(); setDirection(value > index ? 1 : -1); setIndex(value); setMenu(null) }
  const toggleSaved = () => { if (card) setSaved(current => current.includes(card.word) ? current.filter(value => value !== card.word) : [...current, card.word]) }
  return <main className="page-shell"><section className="phone" aria-label={t('单词图鉴', 'Word Atlas')}>
    <div className="content">
      <div className="category-row"><div className="popover-anchor" data-popover-root><button className="category-btn" aria-expanded={menu === 'category'} onClick={() => setMenu(menu === 'category' ? null : 'category')}>{savedView ? t('收藏夹', 'Saved') : categoryLabel(category)} <ChevronDown size={16}/></button>{menu === 'category' && <div className="menu category-menu">{categories.map(([zh, en]) => <button key={zh} onClick={() => chooseCategory(zh)}>{hideChinese ? en : zh}</button>)}</div>}</div><button className="favourites" onClick={() => { stopAudio(); setSavedView(true); setIndex(0); setMenu(null) }}><Bookmark size={16} fill="currentColor"/> {t('收藏夹', 'Saved')} {saved.length} <ChevronRight size={13}/></button></div>
      {card ? <>
        <div className="card-stage"><AnimatePresence initial={false} custom={direction} mode="popLayout"><motion.div className="card-body" key={card.word} custom={direction} initial="enter" animate="center" exit="exit" variants={{enter: (side: number) => ({ transform: reduceMotion ? 'translateX(0)' : `translateX(${side * 100}%)`, opacity: 0 }), center: { transform: 'translateX(0)', opacity: 1 }, exit: (side: number) => ({ transform: reduceMotion ? 'translateX(0)' : `translateX(${-side * 100}%)`, opacity: 0 })}} transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}>
          <div className="illustration">{card.image ? <img src={card.image} alt={t('手持宝剑的像素风玩家', 'Pixel art player with a sword')} /> : <div className="missing-image">{card.word}</div>}</div>
          <section className="definition"><div className="word-row"><div><h2>{card.word}</h2><p className="phonetic">{card.phonetic}{!hideChinese && <><span>·</span>{card.meaning}</>}</p></div><button className={playing ? 'play is-playing' : 'play'} aria-label={t('朗读单词', 'Pronounce word')} onClick={() => speak(card.word)}><Play size={28} fill="currentColor" /></button></div><button className="example" aria-label={t('朗读例句', 'Read example sentence')} onClick={() => speak(card.sentence, true)}><p>{card.sentence}</p>{!hideChinese && <small>{card.translation}</small>}</button></section>
        </motion.div></AnimatePresence></div>
        <div className="spacer" />
        <div className="toolbar"><div className="popover-anchor" data-popover-root><button aria-expanded={menu === 'speed'} onClick={() => setMenu(menu === 'speed' ? null : 'speed')}>{t('语速', 'Speed')} <span className="speed-display">{speedNumber(rate)}<span className="speed-times">×</span></span> <ChevronDown size={16}/></button>{menu === 'speed' && <div className="menu rate-menu">{rates.map(value => <button key={value} onClick={() => { setRate(value); setMenu(null) }}>{speedLabel(value)} {value === rate && <b className="selected-dot" aria-label={t('当前语速', 'Current speed')} />}</button>)}</div>}</div><button className={saved.includes(card.word) ? 'saved' : ''} onClick={toggleSaved}><Star size={16} fill={saved.includes(card.word) ? 'currentColor' : 'none'}/>{saved.includes(card.word) ? t('已收藏', 'Saved') : t('收藏', 'Save')}</button><div className="popover-anchor" data-popover-root><button aria-expanded={menu === 'more'} onClick={() => setMenu(menu === 'more' ? null : 'more')}>{t('更多', 'More')} <ChevronDown size={16}/></button>{menu === 'more' && <div className="menu more-menu"><label>{t('隐藏中文', 'Hide Chinese')} <input type="checkbox" checked={hideChinese} onChange={e => setHideChinese(e.target.checked)} /></label><label>{t('自动翻页', 'Auto advance')} <input type="checkbox" checked={autoAdvance} onChange={e => setAutoAdvance(e.target.checked)} /></label></div>}</div></div>
        <footer className="pager"><button className="prev" onClick={() => goTo(index - 1)} disabled={index === 0}><span className="pager-action"><ChevronLeft size={20}/><span className="pager-label">{t('上一张', 'Previous')}</span></span></button><span>{String(index + 1).padStart(2, '0')} / {String(visibleCards.length).padStart(2, '0')}</span><button className="next" onClick={() => goTo(index + 1)} disabled={index === visibleCards.length - 1}><span className="pager-action"><span className="pager-label">{t('下一张', 'Next')}</span><ChevronRight size={20}/></span></button></footer>
      </> : <div className="empty-state"><Bookmark size={32}/><h2>{savedView ? t('还没有收藏', 'No saved words yet') : t('这个分类暂无单词', 'No words in this category yet')}</h2><p>{t('可以切换分类继续浏览。', 'Choose another category to continue.')}</p></div>}
    </div></section></main>
}
