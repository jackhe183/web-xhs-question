# 情感人格测试网页生成器

一个纯前端的测试问卷生成器，支持快速创建各种主题的心理测试。

## 🎯 当前版本：v4.0

**"你会吸引哪种另一半"** - 小红书粉紫风主题

- 📁 位置：`v4_archive/`
- 🔐 密码：3729
- 📝 20道精选题目
- 🎯 5种伴侣类型结果
- ✨ 顶部装饰emoji + 垂直流动海报布局

---

## 📂 项目结构（重要！）

本项目采用**版本文件夹隔离**的管理方式，不同版本的代码存放在不同目录中：

```
web-xhs-question/
├── v4_archive/          ⭐ 当前版本（推荐使用）
│   ├── index.html       # 主引擎
│   ├── config.js        # 配置文件（修改这里换主题！）
│   ├── QUICKSTART.md    # 快速入门指南
│   └── ...
├── v3_archive/          # v3.0 归档版本
│   └── ...
├── v2_themes/           # v2.0 可复用主题引擎
│   └── ...
├── v1_archive/          # v1.0 归档版本
│   └── ...
├── CLAUDE.md            # 工作记忆文档
└── README.md            # 本文件
```

### 🚨 给其他 AI 的重要提示

**当接手此项目时，请注意：**

1. **当前工作版本是 `v4_archive/`**，不是根目录
2. **只需修改 `v4_archive/config.js`** 即可换主题
3. **不要修改根目录**，根目录只存放文档和配置文件
4. 各版本独立运行，互不影响

---

## ⚡ 快速开始

### 本地运行

```bash
# 进入 v4.0 目录
cd v4_archive

# 用浏览器打开 index.html
# 或使用 Live Server 等工具
```

### 部署到 Vercel（推荐）⭐

1. 登录 https://vercel.com
2. 导入 GitHub 仓库 `jackhe183/web-xhs-question`
3. 设置构建目录为 `v4_archive`
4. 部署完成！

---

## 🎨 换主题超简单

只需修改 `v4_archive/config.js` 文件：

```javascript
const APP_CONFIG = {
    // 1. 修改颜色
    theme: {
        primaryColor: '#FF9EBA',
        secondaryColor: '#FFB6D9',
        // ...
    },

    // 2. 修改文案
    content: {
        pageTitle: '你的测试标题',
        coverTitle: '封面大标题',
        // ...
    },

    // 3. 修改题目
    questions: [
        { q: '你的问题？', opts: [...] }
    ],

    // 4. 修改结果
    resultTypes: {
        "A": { typeName: "类型名称", ... }
    }
};
```

**详细教程**：查看 `v4_archive/QUICKSTART.md`

---

## 📚 版本历史

| 版本 | 目录 | 特点 | 状态 |
|------|------|------|------|
| v4.0 | `v4_archive/` | 顶部emoji装饰 + 垂直流动海报布局 | ✅ 当前版本 |
| v3.0 | `v3_archive/` | 配置完全外部化，文档完善 | 📦 归档 |
| v2.0 | `v2_themes/` | 可复用主题引擎，多主题模板 | 📦 归档 |
| v1.0 | `v1_archive/` | 初始版本，基础功能 | 📦 归档 |

### v4.0 特性

- ✅ **顶部装饰emoji**：结果页顶部居中显示类型emoji，带浮动动画
- ✅ **垂直流动海报布局**：光晕背景 + Lottie动画 + 环形分数 + 手风琴详情
- ✅ **真正分离**：HTML引擎 + 外部config.js
- ✅ **完全配置化**：9个配置节，所有硬编码移除
- ✅ **文档完善**：快速入门指南 + 主题切换教程
- ✅ **AI友好**：其他AI可快速接手

### ⚠️ v4.0 踩坑记录

1. **Lottie动画加载失败（403错误）**
   - 问题：Lottie文件URL加载返回403错误
   - 解决：隐藏Lottie容器 `.result-icon-lottie { display: none; }`

2. **emoji与Lottie位置重叠**
   - 问题：emoji装饰与Lottie容器位置重叠
   - 解决：隐藏Lottie后，emoji作为唯一顶部装饰元素

3. **emoji间距精确调整**
   - 调试过程：margin从8px → -24px → -40px → -50px → 最终8px
   - 教训：负margin在隐藏元素后会导致内容被拉上去，需根据实际DOM状态调整

---

## 🚀 部署方式

### Cloudflare Pages（推荐）⭐

- ✅ 免费
- ✅ 全球CDN
- ✅ 自动HTTPS
- ✅ 自动部署（git push自动更新）

**设置**：
```
Build output directory: v3_archive
```

### 其他部署方式

- **Vercel**：免费，全球CDN
- **GitHub Pages**：免费，简单
- **Netlify**：免费，功能丰富

---

## 🛠️ 技术栈

- **纯前端**：HTML + CSS + JavaScript
- **无依赖构建**：即开即用
- **外部库（CDN）**：
  - canvas-confetti（粒子特效）
  - bodymovin/lottie（Lottie动画）
  - html2canvas（图片生成）

---

## 📖 文档导航

| 文档 | 说明 | 位置 |
|------|------|------|
| **快速入门** | 新手首选，1分钟上手 | `v3_archive/QUICKSTART.md` |
| **主题切换** | 详细配置教程 | `v3_archive/THEME_SWITCH_GUIDE.md` |
| **架构说明** | 技术细节 | `v3_archive/README.md` |
| **工作记忆** | 开发记录 | `CLAUDE.md` |

---

## 🤝 给AI的开发指南

当你被要求继续开发此项目时：

1. **首先阅读** `v3_archive/QUICKSTART.md`
2. **理解架构** `v3_archive/README.md`
3. **修改配置** 只需编辑 `v3_archive/config.js`
4. **不要动** `v3_archive/index.html`（引擎文件）

---

## 📝 许可证

MIT License - 自由使用和修改

---

## 🔗 相关链接

- **GitHub仓库**：https://github.com/jackhe183/web-xhs-question
- **在线演示**：（Cloudflare Pages 部署后添加）

---

**最后更新**：2026-03-26
**当前版本**：v3.0
**维护者**：jackhe183
