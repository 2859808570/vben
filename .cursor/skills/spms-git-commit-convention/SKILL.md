---
name: git-commit-convention
description: 项目的 Git 提交信息规范。遵循 Angular 提交规范，包含提交类型、格式要求和示例。当用户需要编写 Git 提交信息、创建 commit 或询问提交规范时使用。
---

# Git 提交规范

## 规范说明

项目遵循 [Vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 的提交规范，该规范基于 [Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) 提交约定。

## 提交格式

提交信息格式：

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 格式说明

- **type**（必需）：提交类型
- **scope**（可选）：影响范围
- **subject**（必需）：简短描述
- **body**（可选）：详细描述
- **footer**（可选）：相关 Issue 或 Breaking Changes

## 提交类型

| 类型 | 说明 | 示例 |
|------|------|------|
| `feat` | 增加新功能 | `feat(auth): add JWT authentication` |
| `fix` | 修复问题/BUG | `fix(router): fix route redirect issue` |
| `style` | 代码风格相关无影响运行结果的 | `style(components): format code with prettier` |
| `perf` | 优化/性能提升 | `perf(utils): optimize debounce function` |
| `refactor` | 重构 | `refactor(api): restructure API service` |
| `revert` | 撤销修改 | `revert: revert commit abc123` |
| `test` | 测试相关 | `test(utils): add unit tests for helpers` |
| `docs` | 文档/注释 | `docs(readme): update installation guide` |
| `chore` | 依赖更新/脚手架配置修改等 | `chore(deps): update vue to 3.4.0` |
| `ci` | 持续集成 | `ci(github): add workflow for testing` |
| `types` | 类型定义文件更改 | `types(api): add request type definitions` |

## 提交示例

### 示例 1：新功能

```
feat(auth): add user login functionality

- Add login form component
- Implement JWT token storage
- Add authentication guard

Closes #123
```

### 示例 2：修复 Bug

```
fix(router): fix route redirect loop

Fix infinite redirect loop when accessing protected routes
without authentication.

Fixes #456
```

### 示例 3：重构

```
refactor(api): restructure API service layer

- Extract API client to separate module
- Add request/response interceptors
- Improve error handling
```

### 示例 4：文档更新

```
docs(readme): update installation instructions

Add pnpm installation steps and corepack setup guide.
```

### 示例 5：性能优化

```
perf(table): optimize large data rendering

Use virtual scrolling for tables with 1000+ rows to improve
rendering performance.
```

## 最佳实践

1. **使用现在时态**：使用 "add" 而不是 "added" 或 "adds"
2. **首字母小写**：subject 首字母不需要大写
3. **不加句号**：subject 末尾不需要句号
4. **简洁明了**：subject 不超过 50 个字符
5. **详细描述**：在 body 中详细说明修改的原因和方式
6. **关联 Issue**：使用 `Closes #123` 或 `Fixes #456` 关联相关 Issue

## 常见错误

❌ **错误示例**：
```
fix bug
update code
added new feature
Fix: 修复了登录问题
```

✅ **正确示例**：
```
fix(auth): fix login validation issue
refactor(api): update request handling
feat(dashboard): add analytics widget
```

## 工具推荐

可以使用以下工具帮助生成规范的提交信息：

- **Commitizen**：交互式提交信息生成工具
- **Commitlint**：提交信息格式校验工具
- **Conventional Commits**：提交规范标准
