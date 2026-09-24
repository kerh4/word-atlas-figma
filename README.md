# 单词图鉴

基于 Figma 单词卡设计实现的响应式 Web 原型。包含 12 个词条，支持分类切换、单词和例句朗读、语速调整、收藏夹、隐藏中文及自动翻页。

## 本地运行

```bash
npm install
npm run dev
```

`npm run build` 会生成可部署到 Vercel 的 `dist/`。

详细的当前状态、文件位置与后续验证事项见 [HANDOFF.md](./HANDOFF.md)。浏览器语音合成用于演示朗读，正式产品仍需考虑授权音频与账号同步。
