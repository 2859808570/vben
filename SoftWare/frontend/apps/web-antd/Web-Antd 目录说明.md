# Web-Antd 目录说明

基于 Ant Design Vue 的前端应用，项目的主要前端应用。

```bash
web-antd/
├── .env # 基础环境变量配置，应用的基础配置（标题、命名空间、Store 加密密钥等）
├── .env.analyze # 分析模式环境变量，用于打包分析时的配置（可视化工具等）
├── .env.development # 开发环境变量配置，开发环境的配置（端口、Mock 服务、DevTools 等）
├── .env.production # 生产环境变量配置，生产环境的配置（API 地址、压缩、PWA、路由模式等）
├── index.html # HTML 入口文件，应用的 HTML 模板
├── package.json # 应用依赖配置，应用的依赖包和脚本
├── postcss.config.mjs # PostCSS 配置，CSS 后处理器配置
├── public # 静态资源，不需要编译的静态文件
│   └── favicon.ico # 网站图标，浏览器标签页显示的图标
├── src # 源代码目录，应用的主要代码
│   ├── adapter # 适配器，适配不同组件库的接口
│   │   ├── component # 组件适配，组件库组件适配
│   │   │   └── index.ts # 组件适配入口，导出组件适配器
│   │   ├── form.ts # 表单适配，表单组件适配
│   │   └── vxe-table.ts # VXE Table 适配，表格组件适配
│   ├── api # API 接口定义，定义与后端交互的接口
│   │   ├── core # 核心 API，核心功能相关的接口
│   │   │   ├── auth.ts # 认证 API，登录认证相关接口
│   │   │   ├── index.ts # API 入口，导出所有 API
│   │   │   ├── menu.ts # 菜单 API，菜单数据接口
│   │   │   └── user.ts # 用户 API，用户信息接口
│   │   ├── index.ts # API 入口，统一导出所有 API
│   │   └── request.ts # 请求配置，HTTP 请求的配置和拦截器
│   ├── app.vue # 根组件，应用的根 Vue 组件
│   ├── bootstrap.ts # 应用启动文件，应用初始化逻辑
│   ├── layouts # 布局组件，页面布局模板
│   │   ├── auth.vue # 认证布局，登录注册页面的布局
│   │   ├── basic.vue # 基础布局，主要页面的布局
│   │   └── index.ts # 布局导出，导出所有布局组件
│   ├── locales # 国际化语言文件，多语言翻译文件
│   │   ├── index.ts # 国际化入口，国际化配置
│   │   ├── langs # 语言包，各语言的翻译文件
│   │   │   ├── en-US # 英文语言包
│   │   │   │   ├── demos.json # 演示页面翻译
│   │   │   │   └── page.json # 页面翻译
│   │   │   └── zh-CN # 中文语言包
│   │   │       ├── demos.json # 演示页面翻译
│   │   │       └── page.json # 页面翻译
│   │   └── README.md # 国际化说明，如何使用国际化
│   ├── main.ts # 应用入口文件，应用的启动入口
│   ├── preferences.ts # 偏好设置，用户偏好配置
│   ├── router # 路由配置，页面路由定义和配置
│   │   ├── access.ts # 权限控制，路由权限验证
│   │   ├── guard.ts # 路由守卫，路由跳转前的拦截
│   │   ├── index.ts # 路由入口，创建路由实例
│   │   └── routes # 路由定义，所有路由的配置
│   │       ├── core.ts # 核心路由，框架必需的路由
│   │       ├── index.ts # 路由入口，路由配置入口
│   │       ├── modules # 动态路由模块，根据权限动态加载的路由
│   │       │   ├── dashboard.ts # 仪表盘路由
│   │       │   ├── demos.ts # 演示路由
│   │       │   └── vben.ts # Vben 路由
│   │       └── static # 静态路由，固定的路由配置
│   │           └── help.ts # 帮助页面路由
│   ├── store # 状态管理（Pinia），全局状态管理
│   │   ├── auth.ts # 认证状态，用户登录状态
│   │   └── index.ts # Store 入口，状态管理入口
│   └── views # 页面视图，所有页面组件
│       ├── _core # 核心页面，框架核心功能页面
│       │   ├── about # 关于页面，关于项目的信息
│       │   │   └── index.vue # 关于页面组件
│       │   ├── authentication # 认证页面，登录注册相关页面
│       │   │   ├── code-login.vue # 验证码登录，使用验证码登录
│       │   │   ├── forget-password.vue # 忘记密码，找回密码页面
│       │   │   ├── login.vue # 登录页面，用户登录
│       │   │   ├── qrcode-login.vue # 二维码登录，扫码登录
│       │   │   └── register.vue # 注册页面，用户注册
│       │   ├── fallback # 错误页面，各种错误提示页面
│       │   │   ├── coming-soon.vue # 即将上线，功能即将上线提示
│       │   │   ├── forbidden.vue # 403 禁止访问，无权限访问提示
│       │   │   ├── internal-error.vue # 500 内部错误，服务器错误提示
│       │   │   ├── not-found.vue # 404 未找到，页面不存在提示
│       │   │   └── offline.vue # 离线页面，网络离线提示
│       │   ├── help # 帮助页面，使用帮助和文档
│       │   │   └── index.vue # 帮助页面组件
│       │   ├── profile # 个人中心，用户个人信息管理
│       │   │   ├── base-setting.vue # 基础设置，基本信息设置
│       │   │   ├── index.vue # 个人中心首页
│       │   │   ├── notification-setting.vue # 通知设置，消息通知配置
│       │   │   ├── password-setting.vue # 密码设置，修改密码
│       │   │   └── security-setting.vue # 安全设置，账户安全配置
│       │   └── README.md # 核心页面说明
│       ├── dashboard # 仪表盘页面，数据展示和分析页面
│       │   ├── analytics # 分析页面，数据分析相关页面
│       │   │   ├── analytics-trends.vue # 趋势分析，数据趋势图表
│       │   │   ├── analytics-visits-data.vue # 访问数据，访问数据统计
│       │   │   ├── analytics-visits-sales.vue # 访问销售，访问与销售关联
│       │   │   ├── analytics-visits-source.vue # 访问来源，访问来源分析
│       │   │   ├── analytics-visits.vue # 访问统计，访问量统计
│       │   │   └── index.vue # 分析首页
│       │   └── workspace # 工作台，工作台页面
│       │       └── index.vue # 工作台首页
│       └── demos # 演示页面，功能演示和示例
│           └── antd # Ant Design 演示，Ant Design 组件演示
│               └── index.vue # Ant Design 演示首页
├── tailwind.config.mjs # Tailwind CSS 配置，Tailwind 样式框架配置
├── tsconfig.json # TypeScript 配置，TypeScript 编译配置
├── tsconfig.node.json # Node.js TypeScript 配置，Node 环境的 TS 配置
└── vite.config.mts # Vite 配置文件，构建工具配置
```

## 环境变量文件说明

项目使用多个环境变量文件来管理不同环境下的配置。这些文件遵循 Vite 的环境变量加载规则：

### `.env`
基础环境变量配置文件，包含所有环境共用的基础配置：
- `VITE_APP_TITLE`: 应用标题，显示在浏览器标签页和应用中
- `VITE_APP_NAMESPACE`: 应用命名空间，用于区分不同的应用实例
- `VITE_APP_STORE_SECURE_KEY`: Store 加密密钥，用于将 Pinia store 持久化到 localStorage 时的加密

### `.env.development`
开发环境配置文件，仅在运行 `npm run dev` 时生效：
- `VITE_PORT`: 开发服务器端口号（默认：5666）
- `VITE_BASE`: 应用的基础路径（通常为 `/`）
- `VITE_GLOB_API_URL`: 开发环境的 API 接口地址（通常为 `/api`，通过代理转发）
- `VITE_NITRO_MOCK`: 是否开启 Nitro Mock 服务，用于模拟后端接口
- `VITE_DEVTOOLS`: 是否打开 Vue DevTools 调试工具
- `VITE_INJECT_APP_LOADING`: 是否注入全局 loading 效果

### `.env.production`
生产环境配置文件，仅在运行 `npm run build` 时生效：
- `VITE_BASE`: 应用的基础路径（通常为 `/`）
- `VITE_GLOB_API_URL`: 生产环境的 API 接口地址（完整的后端服务地址）
- `VITE_COMPRESS`: 打包压缩方式（可选：`none`、`brotli`、`gzip`）
- `VITE_PWA`: 是否开启 PWA（Progressive Web App）功能
- `VITE_ROUTER_HISTORY`: Vue Router 的路由模式（`hash` 或 `history`）
- `VITE_INJECT_APP_LOADING`: 是否注入全局 loading 效果
- `VITE_ARCHIVER`: 打包后是否生成 dist.zip 压缩包

### `.env.analyze`
分析模式配置文件，用于打包分析（运行 `npm run build:analyze` 时生效）：
- `VITE_BASE`: 应用的基础路径
- `VITE_GLOB_API_URL`: 分析模式下的 API 接口地址
- `VITE_VISUALIZER`: 是否开启打包可视化工具，用于分析打包体积

### 环境变量加载优先级
Vite 会按照以下优先级加载环境变量（后面的会覆盖前面的）：
1. `.env`（所有环境）
2. `.env.[mode]`（对应模式，如 `.env.development`、`.env.production`）
3. `.env.local`（本地配置，通常添加到 `.gitignore` 中）

**注意**：所有环境变量必须以 `VITE_` 开头才能在客户端代码中访问。
