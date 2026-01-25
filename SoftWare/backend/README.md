# 后端项目

## 技术栈
- **运行时**: Node.js
- **框架**: NestJS
- **数据库**: MariaDB
- **认证**: JWT (JSON Web Token)

## 项目结构
```
backend/
├── src/              # 源代码目录
│   ├── main.ts      # 应用入口
│   ├── app.module.ts # 根模块
│   ├── modules/     # 功能模块
│   │   ├── auth/    # 认证模块
│   │   ├── user/    # 用户模块
│   │   ├── project/ # 项目模块
│   │   └── ...
│   ├── common/      # 公共模块
│   │   ├── decorators/ # 装饰器
│   │   ├── filters/    # 异常过滤器
│   │   ├── guards/     # 守卫
│   │   ├── interceptors/ # 拦截器
│   │   └── pipes/      # 管道
│   ├── dto/         # 数据传输对象 (DTO)
│   ├── entities/    # 实体类 (Entity)
│   ├── config/      # 配置文件
│   └── database/    # 数据库相关
├── test/            # 测试文件
│   ├── unit/        # 单元测试
│   ├── integration/ # 集成测试
│   └── e2e/         # 端到端测试
├── .env.example     # 环境变量示例
├── .gitignore       # Git 忽略配置
├── package.json     # 依赖配置
├── tsconfig.json    # TypeScript 配置
└── nest-cli.json    # NestJS CLI 配置
```

## 测试目录说明

`test/` 目录用于存放所有测试相关文件。
**注意**：测试目录结构基于业界最佳实践和社区共识，并非 NestJS 官方强制标准。不同项目可能采用不同的组织方式，您可以根据团队需求调整。

### 测试类型

1. **单元测试 (unit/)**
   - 测试单个模块、服务、控制器的功能
   - 隔离测试，不依赖外部资源
   - 例如：测试用户服务的创建用户方法

2. **集成测试 (integration/)**
   - 测试多个模块之间的协作
   - 可能涉及数据库、外部服务等
   - 例如：测试用户注册流程（控制器 + 服务 + 数据库）

3. **端到端测试 (e2e/)**
   - 测试完整的应用流程
   - 模拟真实用户场景
   - 例如：测试用户登录到创建项目的完整流程

### 测试文件命名规范

- 单元测试：`*.spec.ts`（例如：`user.service.spec.ts`）
- 集成测试：`*.integration.spec.ts`（例如：`auth.integration.spec.ts`）
- E2E 测试：`*.e2e-spec.ts`（例如：`app.e2e-spec.ts`）

### 运行测试

```bash
# 运行所有测试
npm run test

# 运行单元测试
npm run test:unit

# 运行 E2E 测试
npm run test:e2e

# 测试覆盖率
npm run test:cov

# 监听模式（自动运行测试）
npm run test:watch
```

## 开发说明
待补充...

