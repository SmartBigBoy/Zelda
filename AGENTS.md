# Zelda.help - 塞尔达传说：王国之泪 完全攻略站

## 项目概览
这是一个静态网站项目，为《塞尔达传说：王国之泪》提供全面的中文攻略指南。网站完全使用原生HTML/CSS/JS构建，无外部依赖和CDN，适合GitHub Pages托管。

## 技术栈
- **类型**：纯静态网站（native-static模板）
- **语言**：HTML5, CSS3, JavaScript (ES6)
- **图片格式**：WebP
- **托管目标**：GitHub Pages
- **域名**：Zelda.help

## 项目结构
```
/workspace/projects/
├── index.html          # 首页 - 游戏概览、导航、新手指南、FAQ
├── walkthrough.html    # 主线攻略 - 从空岛到终章全流程
├── shrines.html        # 神庙攻略 - 152座神庙按区域分类
├── bosses.html         # Boss攻略 - 全强敌详细战术
├── recipes.html        # 烹饪配方 - 200+配方按效果分类
├── equipment.html      # 装备指南 - 防具、武器、余料建造
├── disclaimer.html     # 免责声明 - 版权、侵权处理、联系方式
├── styles/
│   └── main.css        # 全站样式（无外部依赖）
├── js/
│   └── main.js         # 交互逻辑（菜单、手风琴、搜索、回到顶部）
├── images/
│   └── hero-bg.webp    # 首页Hero背景图
└── .coze               # 项目配置（python http.server 5000端口）
```

## 开发命令
- **启动开发服务器**：`coze dev`（端口5000）
- **构建**：无需构建（纯静态）
- **预览**：`http://localhost:5000`

## 设计规范
- **配色**：森林绿(#2d6a4f)为主色，金色(#c8a951)为强调色
- **字体**：标题用Georgia衬线体，正文用系统无衬线体
- **布局**：左侧固定侧边栏导航 + 右侧内容区
- **响应式**：768px以下转为单列布局 + 汉堡菜单
- **零CDN依赖**：所有CSS/JS均为内联，无外部引用

## 关键特性
- 纯静态，无需构建步骤，直接部署到GitHub Pages
- 无CDN依赖，所有样式和脚本自包含
- WebP图片优化
- 响应式设计，移动端友好
- 搜索过滤功能（神庙页面）
- 手风琴展开/收起（FAQ、神庙列表）
- 滚动动画（Intersection Observer）
- 侧边栏活跃链接追踪
- 回到顶部按钮
- 打印样式优化

## 法律合规
- 每页footer包含非官方声明和侵权联系信息
- 独立免责声明页面（disclaimer.html）
- 不使用任天堂官方素材
- 不提供盗版资源链接
- CC BY-NC-SA 4.0 协议保护原创内容

## 维护说明
- 添加新攻略内容时，在对应HTML文件中按现有格式添加guide-block
- 新增页面需在所有页面的header导航和footer中添加链接
- 图片统一使用WebP格式，存放于images/目录
- CSS修改集中在styles/main.css
- JS交互逻辑集中在js/main.js
