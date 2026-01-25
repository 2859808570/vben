---
name: contribution-guide
description: 项目贡献指南。包含如何提交 Issue、创建 Pull Request、分支命名规范等流程。当用户想要贡献代码、提交 PR 或询问贡献流程时使用。
---

# 贡献指南

## 欢迎贡献

非常欢迎你的加入！你可以通过以下方式参与项目：

1. 提一个 Issue
2. 提交一个 Pull Request

## Pull Request 流程

### 步骤 1：Fork 代码

在 GitHub 上 Fork 项目仓库到你的账户。

### 步骤 2：创建分支

克隆你的 Fork 并创建功能分支：

```bash
git clone https://github.com/YOUR_USERNAME/PROJECT_NAME.git
cd PROJECT_NAME
git checkout -b feature/xxxx
```

**分支命名规范**：
- `feature/xxxx` - 新功能
- `fix/xxxx` - Bug 修复
- `docs/xxxx` - 文档更新
- `refactor/xxxx` - 代码重构
- `style/xxxx` - 代码格式调整
- `perf/xxxx` - 性能优化

### 步骤 3：提交修改

进行代码修改后，提交你的更改：

```bash
git add .
git commit -am 'feat(function): add xxxxx'
```

**重要**：提交信息必须遵循项目的 Git 提交规范。

### 步骤 4：推送分支

将你的分支推送到 GitHub：

```bash
git push origin feature/xxxx
```

### 步骤 5：创建 Pull Request

1. 访问你的 Fork 仓库页面
2. 点击 "New Pull Request" 按钮
3. 选择你的分支
4. 填写 PR 描述，说明：
   - 修改的内容
   - 修改的原因
   - 相关的 Issue（如果有）
5. 提交 Pull Request

## PR 描述模板

创建 PR 时，建议包含以下信息：

```markdown
## 修改内容
简要描述本次 PR 的修改内容

## 修改原因
说明为什么要做这些修改

## 相关 Issue
关联的 Issue 编号（如果有）

## 测试说明
说明如何测试这些修改

## 截图（如适用）
提供相关的截图或 GIF
```

## 代码规范

提交代码前，确保：

- [ ] 代码遵循项目代码风格
- [ ] 已通过 ESLint 检查
- [ ] 已通过 TypeScript 类型检查
- [ ] 已添加必要的测试
- [ ] 已更新相关文档
- [ ] 提交信息符合规范

## 运行测试

提交 PR 前，确保所有测试通过：

```bash
# 运行单元测试
pnpm test

# 运行 E2E 测试
pnpm test:e2e

# 检查代码格式
pnpm lint

# 类型检查
pnpm type-check
```

## 代码审查

提交 PR 后：

1. 等待维护者审查
2. 根据反馈进行修改
3. 确保 CI 检查通过
4. 保持 PR 更新，及时响应评论

## 社区资源

- **GitHub Discussions**：项目讨论区
- **官方文档**：项目文档地址
- **问题反馈**：GitHub Issues

## 贡献类型

你可以通过以下方式贡献：

### 代码贡献
- 修复 Bug
- 添加新功能
- 性能优化
- 代码重构

### 文档贡献
- 完善文档
- 修复文档错误
- 添加使用示例
- 翻译文档

### 问题反馈
- 报告 Bug
- 提出功能建议
- 分享使用经验

## 注意事项

1. **保持 PR 简洁**：一个 PR 只解决一个问题
2. **及时更新**：保持你的分支与主分支同步
3. **详细描述**：提供清晰的 PR 描述和测试说明
4. **响应及时**：及时响应代码审查意见
5. **遵循规范**：严格遵守项目的代码和提交规范

## 获取帮助

如果遇到问题，可以通过以下方式获取帮助：

- 查看 GitHub Issues
- 在 Discussions 提问
- 查阅项目文档
