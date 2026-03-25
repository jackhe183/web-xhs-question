# v3.0 架构 - 真正分离的两文件架构

## 🚀 快速开始

**第一次接触这个项目？请先看** → [QUICKSTART.md](QUICKSTART.md)

**三步换主题**：
1. 打开 `config.js`
2. 修改主题配置（颜色、题目、结果）
3. 浏览器打开 `index.html` 测试

---

## 📁 文件结构

```
v3_archive/
├── index.html    # 主引擎（HTML+CSS+JS核心逻辑）
└── config.js     # 配置文件（外部引用）
```

## 🎯 架构特点

**真正分离的两文件架构**：
- `index.html` - 纯净的引擎代码，不含任何业务配置
- `config.js` - 完整的配置数据，通过 `<script src="config.js"></script>` 引用

与 v2 的区别：
- v2：配置内嵌在 HTML 中（修改需要打开 HTML 文件）
- v3：配置完全外部化（修改只需编辑 config.js）

## 🚀 使用方法

### 运行现有测试
直接打开 `v3_archive/index.html` 即可开始"你会吸引哪种另一半"测试。

### 创建新主题

只需修改 `config.js` 文件：

```javascript
const APP_CONFIG = {
    // 1. 修改主题色
    theme: {
        primaryColor: '#9b59b6',    // 主色
        secondaryColor: '#8e44ad',  // 辅色
        bgStart: '#f5eef8',         // 背景起始色
        bgMid: '#ebdef0',           // 背景中间色
        bgEnd: '#d7bde2',           // 背景结束色
        iconEmoji: '💫'             // 封面图标
    },

    // 2. 修改页面文案
    content: {
        pageTitle: '你的测试标题',
        coverTitle: '封面大标题',
        coverSubtitle: '封面副标题',
        coverDesc: '封面描述文字',
        // ... 更多文案
    },

    // 3. 修改密码
    password: '1234',

    // 4. 修改题目
    questions: [
        {
            q: '你的问题文本？',
            opts: [
                { t: '选项A', scores: { A: 2, B: 0, C: 1, D: 0, E: 0 } },
                { t: '选项B', scores: { A: 0, B: 2, C: 0, D: 1, E: 0 } },
                // ... 更多选项
            ]
        },
        // ... 更多题目
    ],

    // 5. 修改结果类型
    resultTypes: {
        "A": {
            icon: '🥺',
            typeName: "类型名称",
            tags: ["标签1", "标签2", "标签3"],
            coreReason: "核心原因分析",
            advantages: "吸引优势",
            risks: "潜在风险",
            suggestions: "改善建议"
        },
        // ... 更多类型
    }
};
```

## 🎨 主题配色示例

### 紫色神秘风（当前）
```javascript
primaryColor: '#9b59b6',
secondaryColor: '#8e44ad',
bgStart: '#f5eef8',
bgMid: '#ebdef0',
bgEnd: '#d7bde2',
```

### 活力橙红风
```javascript
primaryColor: '#ff6b35',
secondaryColor: '#ee4d2d',
bgStart: '#fff0e8',
bgMid: '#ffe4d4',
bgEnd: '#ffd4c4',
```

### 清新蓝绿风
```javascript
primaryColor: '#00b4d8',
secondaryColor: '#0077b6',
bgStart: '#f0f9ff',
bgMid: '#e0f2fe',
bgEnd: '#bae6fd',
```

### 职业金色风
```javascript
primaryColor: '#d97706',
secondaryColor: '#b45309',
bgStart: '#fffbeb',
bgMid: '#fef3c7',
bgEnd: '#fde68a',
```

## 📊 题目数据格式

```javascript
{
    q: '问题文本',
    opts: [
        { t: '选项文本', scores: { A: 2, B: 0, C: 1, D: 0, E: 0 } }
    ]
}
```

**scores 说明**：
- A/B/C/D/E 代表5种结果类型
- 数值代表该选项对各个类型的权重贡献
- 得分最高的类型即为最终结果

## 🎯 结果类型格式

```javascript
"A": {
    icon: '🥺',              // 结果图标
    typeName: "类型名称",    // 类型名称
    tags: ["标签1", "标签2"], // 标签数组
    coreReason: "核心原因",   // 核心原因分析
    advantages: "吸引优势",   // 吸引优势
    risks: "潜在风险",        // 潜在风险
    suggestions: "改善建议"   // 改善建议
}
```

## 🔧 技术细节

### 结果页HTML结构
```html
<!-- 结果图标 -->
<div class="result-icon" id="resultIcon"></div>

<!-- 类型名称 -->
<h2 class="result-type-name" id="resultTypeName"></h2>

<!-- 标签容器 -->
<div class="tags-container" id="tagsContainer"></div>

<!-- 核心原因 -->
<div class="detail-section">
    <div class="detail-section-title">💫 核心原因</div>
    <div class="detail-section-content" id="coreReason"></div>
</div>

<!-- 吸引优势 -->
<div class="detail-section advantage-box">
    <div class="detail-section-title">✨ 吸引优势</div>
    <div class="detail-section-content" id="advantages"></div>
</div>

<!-- 潜在风险 -->
<div class="detail-section risk-box">
    <div class="detail-section-title">⚠️ 潜在风险</div>
    <div class="detail-section-content" id="risks"></div>
</div>

<!-- 改善建议 -->
<div class="detail-section suggestion-box">
    <div class="detail-section-title">💡 改善建议</div>
    <div class="detail-section-content" id="suggestions"></div>
</div>
```

## ✅ 验证清单

- [x] 清理旧文件完成
- [x] index.html 创建并支持外部config（移除内嵌APP_CONFIG，添加<script src="config.js"></script>）
- [x] config.js 创建（紫色+20题+5种类型）
- [x] 配置加载正常
- [x] 紫色主题显示正确
- [x] 20道题目流程正常
- [x] 5种类型结果计算准确
- [x] 详细结果页展示完整（核心原因、优势、风险、建议）

## 📝 当前配置

**主题**：紫色神秘风"你会吸引哪种另一半"
**题目**：20道精选题目（从33题题库精选）
**结果**：5种伴侣类型（情绪依赖型、成熟稳定型、自由理性型、渣感型、控制型）
**密码**：1234

---

**创建日期**：2026年3月25日
**架构版本**：v3.0
**GitHub仓库**：https://github.com/jackhe183/web-xhs-question
