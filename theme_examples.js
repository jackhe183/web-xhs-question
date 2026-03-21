/**
 * 主题配置示例 - 快速换肤指南
 *
 * 使用方法：
 * 1. 复制你想要的主题配置
 * 2. 替换 index.html 中的 APP_CONFIG 对象
 * 3. 刷新页面即可看到新主题
 */

// ==================== 主题1：清新蓝绿（城市主题） ====================
const CITY_THEME = {
    theme: {
        primaryColor: '#00b4d8',
        secondaryColor: '#0077b6',
        bgStart: '#f0f9ff',
        bgMid: '#e0f2fe',
        bgEnd: '#bae6fd',
        iconEmoji: '🏙️'
    },
    content: {
        pageTitle: '发现你的天选之城',
        authTitle: '输入密码解锁',
        passwordHint: '密码为 4 位数字 (演示密码: 1234)',
        passwordBtn: '确认进入',
        passwordError: '密码错误，请重试',
        coverTitle: '发现你的天选之城',
        coverSubtitle: '已有一万人找到灵魂归属的城市',
        coverDesc: '通过专业的城市性格匹配分析，探索哪座城市最适合你的性格和生活方式。',
        startBtn: '开始测试',
        questionPrefix: '问题',
        progressText: '答题进度',
        resultLabel: '城市匹配度',
        matchLabel: '最佳匹配城市：',
        challengeLabel: '需要注意：',
        restartBtn: '再测一次'
    },
    password: '1234',
    questions: [
        // 城市主题题目...
    ],
    resultTypes: {
        "A": {
            typeName: "活力都会型",
            tags: ["拼搏", "机遇", "快节奏", "多元", "梦想"],
            bestMatch: "上海、深圳（充满机遇和挑战）",
            potentialChallenge: "工作压力大，生活节奏快",
            desc: "你适合充满活力和机遇的大都市，这里有无限可能等着你去探索。"
        }
        // 其他类型...
    }
};

// ==================== 主题2：温柔粉紫（MBTI人格） ====================
const MBTI_THEME = {
    theme: {
        primaryColor: '#9d4edd',
        secondaryColor: '#7b2cbf',
        bgStart: '#fdf4ff',
        bgMid: '#fae8ff',
        bgEnd: '#f5d0fe',
        iconEmoji: '🧠'
    },
    content: {
        pageTitle: '发现你的MBTI人格类型',
        authTitle: '输入密码解锁',
        passwordHint: '密码为 4 位数字 (演示密码: 1234)',
        passwordBtn: '确认进入',
        passwordError: '密码错误，请重试',
        coverTitle: '发现你的MBTI人格类型',
        coverSubtitle: '探索你的性格偏好',
        coverDesc: '通过经典的MBTI性格测试，了解你的性格类型、优势和发展方向。',
        startBtn: '开始测试',
        questionPrefix: '问题',
        progressText: '答题进度',
        resultLabel: '性格匹配度',
        matchLabel: '最佳搭档：',
        challengeLabel: '成长方向：',
        restartBtn: '重新测试'
    },
    password: '1234',
    questions: [
        // MBTI题目...
    ],
    resultTypes: {
        "E": {
            typeName: "外向型 (E)",
            tags: ["社交", "表达", "活力", "团队"],
            bestMatch: "内向型（I）- 互补配合",
            potentialChallenge: "需要学会独处和深度思考",
            desc: "你从与人交往中获得能量，善于表达和沟通。"
        }
        // 其他类型...
    }
};

// ==================== 主题3：自然绿色（旅行风格） ====================
const TRAVEL_THEME = {
    theme: {
        primaryColor: '#2d6a4f',
        secondaryColor: '#1b4332',
        bgStart: '#f0fdf4',
        bgMid: '#dcfce7',
        bgEnd: '#bbf7d0',
        iconEmoji: '🌍'
    },
    content: {
        pageTitle: '发现你的旅行风格',
        authTitle: '输入密码解锁',
        passwordHint: '密码为 4 位数字 (演示密码: 1234)',
        passwordBtn: '确认进入',
        passwordError: '密码错误，请重试',
        coverTitle: '发现你的旅行风格',
        coverSubtitle: '找到最适合你的旅行方式',
        coverDesc: '通过分析你的旅行偏好，发现最适合你的旅行目的地和方式。',
        startBtn: '开始探索',
        questionPrefix: '问题',
        progressText: '答题进度',
        resultLabel: '旅行匹配度',
        matchLabel: '推荐目的地：',
        challengeLabel: '旅行建议：',
        restartBtn: '再测一次'
    },
    password: '1234',
    questions: [
        // 旅行主题题目...
    ],
    resultTypes: {
        "A": {
            typeName: "冒险探索型",
            tags: ["冒险", "自然", "挑战", "自由"],
            bestMatch: "西藏、新西兰、冰岛",
            potentialChallenge: "需要做好充分准备和安全保障",
            desc: "你热爱冒险和探索，喜欢挑战自我，发现未知的风景。"
        }
        // 其他类型...
    }
};

// ==================== 主题4：职业金色（职业测试） ====================
const CAREER_THEME = {
    theme: {
        primaryColor: '#d97706',
        secondaryColor: '#b45309',
        bgStart: '#fffbeb',
        bgMid: '#fef3c7',
        bgEnd: '#fde68a',
        iconEmoji: '💼'
    },
    content: {
        pageTitle: '发现你的理想职业',
        authTitle: '输入密码解锁',
        passwordHint: '密码为 4 位数字 (演示密码: 1234)',
        passwordBtn: '确认进入',
        passwordError: '密码错误，请重试',
        coverTitle: '发现你的理想职业',
        coverSubtitle: '找到最适合你的职业方向',
        coverDesc: '通过专业的职业性格测试，发现最适合你的职业类型和发展方向。',
        startBtn: '开始测试',
        questionPrefix: '问题',
        progressText: '答题进度',
        resultLabel: '职业匹配度',
        matchLabel: '推荐职业：',
        challengeLabel: '发展建议：',
        restartBtn: '重新测试'
    },
    password: '1234',
    questions: [
        // 职业测试题目...
    ],
    resultTypes: {
        "A": {
            typeName: "创意型",
            tags: ["创意", "设计", "艺术", "表达"],
            bestMatch: "设计师、艺术家、文案策划",
            potentialChallenge: "需要平衡创意与商业需求",
            desc: "你具有丰富的创造力和艺术天赋，适合从事创意类工作。"
        }
        // 其他类型...
    }
};

// ==================== 使用说明 ====================
/*
1. 打开 index.html
2. 找到 APP_CONFIG 对象（约在第174行）
3. 复制上面任何一个主题配置
4. 粘贴替换整个 APP_CONFIG 对象
5. 刷新浏览器即可看到新主题

提示：
- 只需修改 theme 部分的颜色值即可换肤
- 只需修改 content 部分的文案即可换内容
- questions 和 resultTypes 决定了题目和结果
*/
