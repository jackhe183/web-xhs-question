# 🚀 快速入门指南

> **给新接手的 AI：** 这份指南用最简洁的方式告诉你如何快速上手这个项目。

---

## 📌 一分钟理解项目

**这是什么？**
- 一个心理测试网页生成器
- 用户回答问题 → 系统计算结果 → 显示分析报告
- 类似小红书上常见的"测测你的xxx"测试

**核心架构（重要！）**
```
只需要修改1个文件就能换主题 → config.js
```

---

## 🎯 换主题三步走

### 第1步：打开 config.js

```bash
v3_archive/config.js
```

### 第2步：修改4个必改配置

```javascript
const APP_CONFIG = {
    // ===== 必改1：主题颜色 =====
    theme: {
        primaryColor: '#FF9EBA',      // 主色
        secondaryColor: '#FFB6D9',    // 辅色
        bgStart: '#FFF5F8',           // 背景渐变（起始）
        bgMid: '#FFE4EC',             // 背景渐变（中间）
        bgEnd: '#FFD1DC',             // 背景渐变（结束）
        iconEmoji: '💕'               // 封面图标
    },

    // ===== 必改2：页面文案 =====
    content: {
        pageTitle: '你的测试标题',
        coverTitle: '封面大标题',
        coverSubtitle: '封面副标题',
        coverDesc: '封面描述文字',
        startBtn: '开始测试',
        // ... 其他文案
    },

    // ===== 必改3：题目数据 =====
    questions: [
        {
            q: '你的问题文本？',
            opts: [
                { t: '选项A', scores: { A: 2, B: 1, C: 0, D: 0, E: 0 } },
                { t: '选项B', scores: { A: 0, B: 2, C: 1, D: 0, E: 0 } },
                { t: '选项C', scores: { A: 0, B: 0, C: 2, D: 1, E: 0 } },
                { t: '选项D', scores: { A: 1, B: 0, C: 0, D: 2, E: 0 } }
            ]
        }
        // ... 更多题目
    ],

    // ===== 必改4：结果类型 =====
    resultTypes: {
        "A": {
            icon: '🥺',              // 结果图标
            typeName: "类型名称",    // 如：情绪依赖型
            tags: ["标签1", "标签2"], // 特征标签
            coreReason: "核心原因",   // 为什么是这个类型
            advantages: "优势描述",   // 你的优势
            risks: "风险描述",       // 需要注意的
            suggestions: "建议描述"   // 改善建议
        }
        // ... 其他类型（B、C、D、E）
    },

    // ===== 可选配置（通常不改） =====
    password: '1234',  // 测试密码
    animations: {},    // 动画配置
    scoring: {},       // 分数计算
    shareImage: {},    // 分享图片
    ui: {}             // UI组件
};
```

### 第3步：用浏览器打开 index.html

```
v3_archive/index.html
```

**输入密码**（默认1234），点击"开始测试"，检查是否正常工作。

---

## ⚠️ 关键注意事项

### 1. 类型键名必须一致
`questions` 中的 `scores` 键名必须与 `resultTypes` 的键名一致：

```javascript
// ✅ 正确
questions: [{ opts: [{ scores: { A: 2, B: 1, C: 0 } }] }]
resultTypes: { "A": {...}, "B": {...}, "C": {...} }

// ❌ 错误（键名不一致）
questions: [{ opts: [{ scores: { A: 2, B: 1, C: 0 } }] }]
resultTypes: { "类型A": {...}, "类型B": {...} }  // 错了！
```

### 2. 分数规则
- 分数范围：0-3
- 3 = 最强匹配，0 = 无关
- 结果 = 得分最高的类型

### 3. 结果类型数量
- 可以是2-6个
- 如果是4个类型，键名用 A/B/C/D
- 题目的 scores 也要对应4个键

---

## 🎨 颜色搭配参考

| 风格 | 主色 | 辅色 | 图标 |
|------|------|------|------|
| 粉紫（当前） | #FF9EBA | #FFB6D9 | 💕 |
| 蓝色（职业） | #3B82F6 | #60A5FA | 💼 |
| 橙色（美食） | #F97316 | #FB923C | 🍜 |
| 绿色（宠物） | #22C55E | #4ADE80 | 🐱 |
| 紫色（神秘） | #9b59b6 | #8e44ad | 💫 |
| 金色（财富） | #d97706 | #b45309 | 💰 |

---

## 📋 完整换主题清单

复制这个清单，逐项检查：

```
□ 修改 theme.primaryColor
□ 修改 theme.secondaryColor
□ 修改 theme.bgStart
□ 修改 theme.bgMid
□ 修改 theme.bgEnd
□ 修改 theme.iconEmoji
□ 修改 content.pageTitle
□ 修改 content.coverTitle
□ 修改 content.coverSubtitle
□ 修改 content.coverDesc
□ 修改 questions 数组（所有题目）
□ 修改 resultTypes（所有类型）
□ 检查 questions 和 resultTypes 的键名是否一致
□ 浏览器打开 index.html 测试
□ 测试密码输入
□ 测试答题流程
□ 测试每个结果类型
□ 测试分享图片生成
```

---

## 🔍 遇到问题？

| 问题 | 解决方案 |
|------|----------|
| 页面空白 | 检查 config.js 语法是否有错误 |
| 颜色没变 | 刷新浏览器缓存（Ctrl+Shift+R） |
| 结果不对 | 检查 questions 和 resultTypes 的键名是否一致 |
| 图片生成失败 | 检查网络连接（需要加载CDN资源） |

---

## 📚 更多文档

- `THEME_SWITCH_GUIDE.md` - 详细的主题切换教程
- `README.md` - 架构说明和技术细节
- `../CLAUDE.md` - 项目工作记忆

---

## 💡 快速复制模板

### 题目模板（复制修改）
```javascript
{
    q: '你的问题？',
    opts: [
        { t: '选项A', scores: { A: 2, B: 0, C: 1, D: 0, E: 0 } },
        { t: '选项B', scores: { A: 0, B: 2, C: 0, D: 1, E: 0 } },
        { t: '选项C', scores: { A: 1, B: 0, C: 2, D: 0, E: 0 } },
        { t: '选项D', scores: { A: 0, B: 1, C: 0, D: 2, E: 0 } }
    ]
}
```

### 结果类型模板（复制修改）
```javascript
"A": {
    icon: '🥺',
    typeName: "类型名称",
    tags: ["标签1", "标签2", "标签3"],
    coreReason: "核心原因分析...",
    advantages: "优势描述...",
    risks: "风险描述...",
    suggestions: "建议描述..."
}
```

---

**版本**：v3.0
**更新日期**：2026-03-25

---

## 🎯 给AI的最佳实践

1. **先读这个文档**（QUICKSTART.md）
2. **再看 THEME_SWITCH_GUIDE.md** 了解详细配置
3. **参考 config.js** 现有配置
4. **最后动手修改**

**记住：只改 config.js，不要动 index.html！**
