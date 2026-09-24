# 单词图鉴 · 继续开发交接

更新日期：2026-09-24

## 项目地址

- GitHub：https://github.com/kerh4/word-atlas-figma
- 线上预览：https://chengzhi.win
- 技术栈：React、TypeScript、Vite、Motion、原生 CSS

## 回家后启动

```bash
git clone https://github.com/kerh4/word-atlas-figma.git
cd word-atlas-figma
npm install
npm run dev
```

打开终端显示的本地地址。提交前可运行：

```bash
npx tsc --noEmit --types vite/client
npm run build
```

本机的 `outputs/word-atlas-preview.html` 是单文件预览产物，未纳入 Git；在另一台电脑请用 Vite 开发服务器预览。线上部署在 Vercel 的 `nb-team4` 项目中，推送 GitHub 后如未自动更新，可在有权限且已登录的环境运行 `vercel --prod --yes --scope nb-team4`。

## 当前已实现

- 12 个词条与完整 WebP 插画切图（有图的词条）；可切换分类、上一张／下一张。
- 手机全屏、宽屏双栏的响应式排版；图片保持比例，不做拉伸裁切。
- 收藏夹列表、二级详情和返回；收藏保存在当前浏览器的本地存储，尚无账号同步。
- 浏览器语音合成朗读、语速设置、隐藏中文及自动翻页。语音质量与声音可用性取决于浏览器和系统。
- 长文滚动时图片最多缩小 50%；底部操作固定，正文可继续滚动。
- 本次把正文滚动区延伸到操作区后面，用局部半透明毛玻璃遮住滚过的文字，同时留出尾部空间，保证滚到底后最后一行完整可见。

## 关键文件

- `src/App.tsx`：词条数据、页面状态、语音播放、滚动与切页逻辑。
- `src/styles.css`：主要布局、图片、操作区与响应式规则；毛玻璃在 `.content--study::after`。
- `src/extra.css`：额外样式。
- `src/savedWordsStorage.ts`：收藏的本地存储。
- `public/assets/words/`：词条 WebP 图片。

## 本次毛玻璃的实现要点

- 操作栏自身使用半透明底色，文字和图标不降低透明度。
- 正文从底部操作区后方滚动；覆盖层使用 `backdrop-filter: blur(10px)`，并在顶部做短距离淡入，避免硬切白边。
- 横屏原先挡住正文的不透明白层已换成局部毛玻璃；竖屏短文初始状态不会被遮住。
- 已在浏览器的 604×679、390×844、933×514 视口检查；Forest 长文滚到底后，最后一行在操作栏上方仍有空间。

## 下一步建议验证

1. 用真实 iPhone Safari 测试手指连续滚动、返回及横竖屏切换；自动化浏览器不能完全代表 iOS 的惯性滚动。
2. 检查长文滚动经过毛玻璃时的性能，特别是较旧设备；当前只在底部小范围做静态模糊，没有动画化 blur 值。
3. 测试分类切换和上／下一张过渡、弹出菜单，以及收藏详情取消收藏后仍停留在详情页。
4. 顶部分类行目前没有重新叠加毛玻璃；之前整行胶囊式背景引起视觉回退，若要恢复，建议先确定其外观再单独处理。

## 注意

- 不要提交本机的 `.playwright-cli/`、`output/`、`outputs/`、`work/`；它们是本地预览和测试产物。
- Figma 原始设计链接：https://www.figma.com/design/lOKQNfNoxU58h11osPEdy1/Untitled?node-id=150-382
