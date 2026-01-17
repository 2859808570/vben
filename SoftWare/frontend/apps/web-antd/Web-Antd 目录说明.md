# Web-Antd 目录说明

基于 Ant Design Vue 的前端应用，项目的主要前端应用。

```bash
web-antd/
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
