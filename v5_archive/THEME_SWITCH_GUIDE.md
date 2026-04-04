# 主题切换指南

## 快速开始

要将"你会吸引哪种另一半"测试换成其他主题，只需要修改 `config.js` 文件。

---

## 配置文件结构

`config.js` 包含以下9个配置节：

```javascript
const APP_CONFIG = {
    theme: {},        // 1. 主题配色（必改）
    content: {},      // 2. 页面文案（必改）
    password: '',     // 3. 业务数据（可选）
    questions: [],    // 4. 题目数据（必改）
    resultTypes: {},  // 5. 结果类型（必改）
    animations: {},   // 6. 动画配置（可选）
    scoring: {},      // 7. 分数计算（通常不改）
    shareImage: {},   // 8. 分享图片（可选）
    ui: {}            // 9. UI组件（通常不改）
};
```

---

## 必须修改的配置节

### 1. theme - 主题配色

```javascript
theme: {
    primaryColor: '#FF9EBA',      // 主色（按钮、进度条等）
    secondaryColor: '#FFB6D9',    // 辅色（渐变、装饰等）
    bgStart: '#FFF5F8',           // 背景渐变起始色
    bgMid: '#FFE4EC',             // 背景渐变中间色
    bgEnd: '#FFD1DC',             // 背景渐变结束色
    iconEmoji: '💕'               // 封面图标emoji
}
```

### 2. content - 页面文案

```javascript
content: {
    pageTitle: '测试标题',           // 浏览器标题
    authTitle: '输入密码解锁',       // 密码页标题
    passwordHint: '密码提示文字',    // 密码提示
    passwordBtn: '确认进入',         // 密码按钮
    passwordError: '密码错误',       // 密码错误提示
    coverTitle: '封面大标题',        // 封面标题
    coverSubtitle: '封面副标题',     // 封面副标题
    coverDesc: '封面描述文字',       // 封面描述
    startBtn: '开始测试',            // 开始按钮文字
    questionPrefix: '问题',          // 问题前缀
    restartBtn: '重新测试'           // 重新测试按钮
}
```

### 3. questions - 题目数据

```javascript
questions: [
    {
        q: '问题文本',
        opts: [
            { t: '选项A', scores: { A: 2, B: 1, C: 0, D: 0, E: 1 } },
            { t: '选项B', scores: { A: 0, B: 2, C: 1, D: 0, E: 0 } },
            { t: '选项C', scores: { A: 0, B: 0, C: 2, D: 1, E: 0 } },
            { t: '选项D', scores: { A: 1, B: 0, C: 0, D: 2, E: 0 } }
        ]
    }
]
```

**重要**：
- `scores` 的键名（A/B/C/D/E）必须与 `resultTypes` 的键名一致
- 分数范围：0-3，3表示最强匹配

### 4. resultTypes - 结果类型

```javascript
resultTypes: {
    "A": {
        icon: '🥺',              // 结果图标（emoji）
        typeName: "类型名称",      // 结果类型名称
        tags: ["标签1", "标签2"], // 特征标签数组
        coreReason: "核心原因",    // 核心原因描述
        advantages: "优势描述",    // 吸引优势
        risks: "风险描述",        // 潜在风险
        suggestions: "建议描述"    // 改善建议
    },
    "B": { /* ... */ },
    // ... 其他类型
}
```

---

## 可选修改的配置节

### 5. animations - 动画配置

如果需要更换Lottie动画或粒子特效颜色：

```javascript
animations: {
    lottieUrls: {
        'A': '新的Lottie动画URL',
        'B': '新的Lottie动画URL',
        // ...
    },
    confetti: {
        colors: ['#颜色1', '#颜色2', '#颜色3']  // 粒子颜色
    }
}
```

**获取Lottie动画**：访问 https://lottiefiles.com/ 搜索免费动画

### 6. shareImage - 分享图片配置

如果需要调整分享图片尺寸或质量：

```javascript
shareImage: {
    width: 540,      // 图片宽度
    height: 960,     // 图片高度
    quality: 0.8,    // JPEG质量（0.5-1.0）
    format: 'image/jpeg'
}
```

---

## 主题示例

### 示例1：职业性格测试（蓝色主题）

```javascript
theme: {
    primaryColor: '#3B82F6',      // 蓝色
    secondaryColor: '#60A5FA',    // 浅蓝
    bgStart: '#EFF6FF',
    bgMid: '#DBEAFE',
    bgEnd: '#BFDBFE',
    iconEmoji: '💼'
}
```

### 示例2：美食测试（橙色主题）

```javascript
theme: {
    primaryColor: '#F97316',      // 橙色
    secondaryColor: '#FB923C',    // 浅橙
    bgStart: '#FFF7ED',
    bgMid: '#FFEDD5',
    bgEnd: '#FED7AA',
    iconEmoji: '🍜'
}
```

### 示例3：宠物测试（绿色主题）

```javascript
theme: {
    primaryColor: '#22C55E',      // 绿色
    secondaryColor: '#4ADE80',    // 浅绿
    bgStart: '#F0FDF4',
    bgMid: '#DCFCE7',
    bgEnd: '#BBF7D0',
    iconEmoji: '🐱'
}
```

---

## 注意事项

1. **键名一致性**：`questions.opts.scores` 的键名必须与 `resultTypes` 的键名完全一致
2. **结果类型数量**：可以是2-6个，但需要确保所有题目都有对应类型的评分
3. **题目数量**：建议10-30题，每题2-4个选项
4. **颜色格式**：使用十六进制颜色码（如 #FF9EBA）或RGB格式
5. **图片生成**：分享图片尺寸建议 540×960px，质量 0.8 平衡质量和文件大小

---

## 验证方法

修改完成后，在浏览器中打开 `index.html`，检查：

1. ✅ 密码页颜色是否正确
2. ✅ 封面页文案是否正确
3. ✅ 答题流程是否正常
4. ✅ 结果页各类型显示是否正确
5. ✅ 分享图片生成是否正常

---

## 故障排查

### 问题：粒子特效颜色没变
**解决**：检查 `animations.confetti.colors` 配置是否正确

### 问题：Lottie动画不显示
**解决**：
1. 检查网络连接（Lottie从CDN加载）
2. 检查 `animations.lottieUrls` 中的URL是否有效
3. 查看浏览器控制台是否有错误

### 问题：分数计算不对
**解决**：检查 `scoring` 配置中的 `maxQuestions` 是否与实际题目数一致

---

## 进阶定制

### 修改环形进度条大小

修改 `ui.scoreRing` 配置：

```javascript
ui: {
    scoreRing: {
        diameter: 140,    // 直径（px）
        strokeWidth: 8,   // 描边宽度
        radius: 60        // 半径（r属性）
    }
}
```

### 修改分数计算规则

修改 `scoring` 配置：

```javascript
scoring: {
    maxQuestions: 20,      // 题目总数
    maxScorePerQuestion: 3 // 每题最高分
}
```

---

**版本**：v3.0
**更新日期**：2026-03-25
