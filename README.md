# 软件项目管理系统

## 项目简介
软件项目管理系统（Software Project Management System，SPMS）是一个全栈开发的项目管理平台，提供项目全生命周期管理功能。

> **说明**：
> - 前端项目框架基于 [Vue Vben Admin](https://github.com/vbenjs/vue-vben-admin) 项目修改而来，在此基础上进行了定制化开发和功能扩展。
> - 后端项目基于 Node.js 的 [NestJS](https://nestjs.com/) 框架开发，采用模块化架构设计。

## 技术栈

### 前端技术栈

#### 核心框架
- **框架**: Vue 3.5.24
- **构建工具**: Vite 7.2.2
- **类型系统**: TypeScript 5.9.3
- **路由**: Vue Router 4.5.1
- **状态管理**: Pinia 3.0.3

#### UI 组件库与样式
- **UI组件库**: Ant Design Vue 4.2.6
- **图标库**: Lucide Vue Next 0.553.0
- **CSS框架**: Tailwind CSS 3.4.18
- **样式预处理**: Sass

#### 工具库
- **组合式函数库**: VueUse 13.4.0 (`@vueuse/core`)
- **HTTP客户端**: Axios 1.10.0
- **日期处理**: dayjs 1.11.13
- **国际化**: vue-i18n 11.1.7
- **表单验证**: Vee-Validate 4.15.1 + Zod 3.25.67
- **表格组件**: VXE Table 4.17.14

#### 开发工具
- **包管理**: pnpm 10.22.0
- **Monorepo**: Turbo 2.6.1
- **代码规范**: ESLint 9.39.1 + Prettier 3.6.2 + Stylelint 16.21.0
- **Git钩子**: Lefthook 1.13.6
- **提交规范**: Commitlint 19.8.1

#### 测试框架
- **单元测试**: Vitest 3.2.4
- **E2E测试**: Playwright 1.56.1

#### 项目架构
- **架构模式**: Monorepo（基于 Turbo）
- **基础框架**: Vue Vben Admin 5.5.9（基于此项目进行定制化开发）

### 后端技术栈

- **运行时**: Node.js (>=20.12.0)
- **框架**: NestJS
- **数据库**: MariaDB
- **认证**: JWT (JSON Web Token)
- **类型系统**: TypeScript

### 环境要求

- **Node.js**: >=20.12.0
- **pnpm**: >=10.0.0
- **数据库**: MariaDB

## 项目结构

```
SPMS/
├── SoftWare/
│   ├── frontend/          # 前端项目 (Monorepo)
│   │   ├── apps/          # 应用目录
│   │   │   ├── web-antd/  # Ant Design Vue 应用
│   │   │   └── backend-mock/ # Mock 服务
│   │   ├── packages/      # 共享包
│   │   │   ├── @core/     # 核心包
│   │   │   ├── effects/   # 功能包
│   │   │   ├── stores/   # 状态管理
│   │   │   ├── utils/    # 工具函数
│   │   │   └── ...        # 其他共享包
│   │   ├── internal/     # 内部工具包
│   │   ├── docs/          # 文档站点
│   │   └── playground/    # 开发演示
│   └── backend/           # 后端项目
│       ├── src/           # 源代码
│       │   ├── modules/   # 功能模块
│       │   ├── common/    # 公共模块
│       │   ├── entities/  # 实体类
│       │   └── ...        # 其他目录
│       └── test/          # 测试文件
└── 文档资料/              # 项目文档
    ├── 数据库/           # 数据库设计文档
    ├── 设计文档/         # 系统设计文档
    └── 需求文档/         # 需求文档
```

## 快速开始

### 前端开发

```bash
# 进入前端目录
cd SoftWare/frontend

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev:antd

# 构建生产版本
pnpm build:antd
```

### 后端开发

```bash
# 进入后端目录
cd SoftWare/backend

# 安装依赖
npm install

# 启动开发服务器
npm run start:dev

# 运行测试
npm run test
```

## 许可证

MIT License
