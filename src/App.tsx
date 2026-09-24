import { useEffect, useState } from 'react'
import { Bookmark, ChevronDown, ChevronLeft, ChevronRight, Ellipsis, Play, Star, Volume2, X } from 'lucide-react'

type Word = { word: string; phonetic: string; meaning: string; example: string; translation: string }
const words: Word[] = [
  { word: 'Player', phonetic: '/ˈpleɪə(r)/', meaning: 'n. 玩家', example: 'A brave player.', translation: '一位勇敢的玩家。' },
  { word: 'Forest', phonetic: '/ˈfɒrɪst/', meaning: 'n. 森林', example: 'The fox lives in the forest.', translation: '狐狸住在森林里。' },
  { word: 'Sword', phonetic: '/sɔːd/', meaning: 'n. 剑', example: 'The sword is very sharp.', translation: '这把剑非常锋利。' },
]
const categories = ['基础词汇', '自然与探索', '生物与伙伴', '方块与材料', '工具与装备', '建筑与空间']
const rates = [0.5, 0.8, 1, 1.25, 1.5]

export default function App() {
  const [index, setIndex] = useState(0)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [rateOpen, setRateOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [rate, setRate] = useState(1)
  const [favourite, setFavourite] = useState(false)
  const [hideChinese, setHideChinese] = useState(false)
  const [autoAdvance, setAutoAdvance] = useState(false)
  const word = words[index]
  const speak = (text: string) => { const utterance = new SpeechSynthesisUtterance(text); utterance.lang = 'en-US'; utterance.rate = rate; window.speechSynthesis.cancel(); window.speechSynthesis.speak(utterance) }
  useEffect(() => { if (!autoAdvance) return; const timer = window.setInterval(() => setIndex(i => (i + 1) % words.length), 5000); return () => window.clearInterval(timer) }, [autoAdvance])
  const previous = () => setIndex(i => Math.max(0, i - 1))
  const next = () => setIndex(i => Math.min(words.length - 1, i + 1))
  return <main className="page-shell"><section className="phone" aria-label="单词图鉴">
    <header className="status"><b>9:41</b><span className="status-icons">▮▮▮　⌁　▰</span></header>
    <nav className="nav"><button className="circle-action" aria-label="返回"><ChevronLeft size={20} /></button><h1>单词图鉴</h1><div className="mini-island"><Ellipsis size={19}/><i></i><X size={15}/></div></nav>
    <div className="content">
      <div className="category-row"><div className="popover-anchor"><button className="category-btn" onClick={() => { setCategoryOpen(!categoryOpen); setRateOpen(false); setMoreOpen(false) }}>基础词汇 <ChevronDown size={16}/></button>{categoryOpen && <div className="menu category-menu">{categories.map(c => <button key={c} onClick={() => setCategoryOpen(false)}>{c}</button>)}</div>}</div><button className="favourites"><Bookmark size={16} fill="currentColor"/> 收藏夹 5 <ChevronRight size={13}/></button></div>
      <div className="illustration"><img src="/assets/figma-raw-2.png" alt="手持宝剑的像素风玩家" /></div>
      <section className="definition"><div className="word-row"><div><h2>{word.word}</h2><p className="phonetic">{word.phonetic}{!hideChinese && <><span>·</span>{word.meaning}</>}</p></div><button className="play" aria-label="朗读单词" onClick={() => speak(word.word)}><Play size={28} fill="currentColor" /></button></div><button className="example" onClick={() => speak(word.example)}><p>{word.example}</p>{!hideChinese && <small>{word.translation}</small>}</button></section>
      <div className="spacer" />
      <div className="toolbar"><div className="popover-anchor"><button onClick={() => { setRateOpen(!rateOpen); setCategoryOpen(false); setMoreOpen(false) }}>语速 {rate.toFixed(1)}× <ChevronDown size={16}/></button>{rateOpen && <div className="menu rate-menu">{rates.map(r => <button key={r} onClick={() => { setRate(r); setRateOpen(false) }}>{r.toFixed(r === 1.25 || r === 1.5 ? 2 : 1)}× {r === rate && <b>●</b>}</button>)}</div>}</div><button className={favourite ? 'saved' : ''} onClick={() => setFavourite(!favourite)}><Star size={16} fill={favourite ? 'currentColor' : 'none'}/>{favourite ? '已收藏' : '收藏'}</button><div className="popover-anchor"><button onClick={() => { setMoreOpen(!moreOpen); setCategoryOpen(false); setRateOpen(false) }}>更多 <ChevronDown size={16}/></button>{moreOpen && <div className="menu more-menu"><label>隐藏中文 <input type="checkbox" checked={hideChinese} onChange={e => setHideChinese(e.target.checked)} /></label><label>自动翻页 <input type="checkbox" checked={autoAdvance} onChange={e => setAutoAdvance(e.target.checked)} /></label></div>}</div></div>
      <footer className="pager"><button className="prev" onClick={previous} disabled={index === 0}><ChevronLeft size={20}/>上一张</button><span>{String(index + 1).padStart(2, '0')} / {String(words.length).padStart(2, '0')}</span><button className="next" onClick={next} disabled={index === words.length - 1}>下一张<ChevronRight size={20}/></button></footer>
    </div><div className="home-indicator" /></section><p className="desktop-note"><Volume2 size={15}/> 移动端单词学习界面</p></main>
}
