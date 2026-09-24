# 单词图鉴

基于 Figma 单词卡设计实现的移动端 Web 原型。支持分类切换、单词和例句朗读、五档语速、收藏夹、隐藏中文及例句播完后自动翻页。

## 本地运行

```bash
npm install
npm run dev
```

`npm run build` 会生成可部署到 Vercel 的 `dist/`。

## 内容状态

目前包含 Player、Forest、Sword 三张示例卡。Figma 只提供了 Player 插画，另外两张卡使用无图状态；其余分类保留空状态，等待正式词库、插画和授权音频。浏览器语音合成用于演示朗读，正式小程序需替换为产品音频和平台原生导航能力。
