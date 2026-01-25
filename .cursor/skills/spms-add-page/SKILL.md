---
name: spms-add-page
description: 在 SPMS 框架中添加新页面的规范指南。包含路由配置、页面组件创建、国际化设置等步骤。当用户需要添加新页面、创建路由、配置页面组件或询问 SPMS 页面添加规范时使用。
---

# SPMS 添加页面规范

## 快速开始

在 SPMS 项目中添加新页面需要三个步骤：

1. **选择路由类型**：动态路由（业务页面）或静态路由（无需权限的页面）
2. **创建路由配置**：在对应目录下创建路由文件
3. **创建页面组件**：在 `src/views/` 下创建 Vue 组件

## 路由类型选择

### 动态路由（推荐用于业务页面）
- **位置**：`src/router/routes/modules/`
- **特点**：根据用户权限动态生成，会走权限控制
- **适用场景**：仪表盘、业务模块等需要权限的页面

### 静态路由（用于无需权限的页面）
- **位置**：`src/router/routes/static/`
- **特点**：项目启动时已确定，会走权限控制
- **适用场景**：帮助页面、关于页面等

### 核心路由（禁止使用）
- **位置**：`src/router/routes/core/`
- **注意**：禁止将业务相关路由放在核心路由中

## 添加动态路由

### 步骤 1：创建路由文件

在 `src/router/routes/modules/` 目录下创建路由文件（例如 `example.ts`）：

```typescript
import type { RouteRecordRaw } from 'vue-router';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:file-text',
      order: 100,
      title: $t('page.example.title'),
    },
    name: 'Example',
    path: '/example',
    redirect: '/example/index',
    children: [
      {
        name: 'ExampleIndex',
        path: '/example/index',
        component: () => import('#/views/example/index.vue'),
        meta: {
          icon: 'lucide:file-text',
          title: $t('page.example.index'),
        },
      },
    ],
  },
];

export default routes;
```

### 步骤 2：创建页面组件

在 `src/views/` 目录下创建对应的页面组件：

```vue
<script setup lang="ts">
defineOptions({
  name: 'ExampleIndex', // 必须与路由名称一致
});
</script>

<template>
  <div class="p-6">
    <h1 class="mb-4 text-2xl font-bold">示例页面</h1>
    <p>这是一个示例页面。</p>
  </div>
</template>
```

### 步骤 3：添加国际化（可选）

在 `src/packages/locales/src/locales/zh-CN.json` 中添加：

```json
{
  "page": {
    "example": {
      "title": "示例页面",
      "index": "示例首页"
    }
  }
}
```

## 添加静态路由

在 `src/router/routes/static/` 目录下创建路由文件：

```typescript
import type { RouteRecordRaw } from 'vue-router';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    name: 'Example',
    path: '/example',
    component: () => import('#/views/example/index.vue'),
    meta: {
      icon: 'lucide:file-text',
      hideInMenu: true, // 如果不想在菜单中显示
      title: $t('page.example.title'),
    },
  },
];

export default routes;
```

## 关键规范

### 路由命名
- 使用 **PascalCase**（大驼峰）：`Dashboard`、`ExampleIndex`
- 路由名称必须与组件名称保持一致

### 路由路径
- 使用 **kebab-case** 或 **camelCase**：`/dashboard`、`/user/profile`

### 组件命名
- 使用 **PascalCase**：`ExampleIndex`
- 必须与路由名称一致
- 使用 `defineOptions({ name: 'ComponentName' })` 设置

### 文件位置
- 页面组件：`src/views/` 目录下
- 核心页面：`src/views/_core/` 目录下
- 业务页面：按模块组织，如 `src/views/dashboard/`、`src/views/user/`

## 常用 Meta 配置

| 配置项 | 类型 | 说明 |
|--------|------|------|
| `title` | `string` | 页面标题，会在菜单和标签页中显示 |
| `icon` | `string` | 图标，支持 `lucide:home` 或 HTTP 链接 |
| `order` | `number` | 菜单排序，数字越小越靠前 |
| `hideInMenu` | `boolean` | 是否在菜单中隐藏 |
| `hideInTab` | `boolean` | 是否在标签页中隐藏 |
| `keepAlive` | `boolean` | 是否开启页面缓存 |
| `authority` | `string[]` | 权限控制数组 |
| `affixTab` | `boolean` | 是否固定标签页 |

完整 Meta 配置项说明请参考 [reference.md](reference.md)。

## 验证清单

添加页面后，检查以下项：

- [ ] 路由文件正确导出 `routes`
- [ ] 路由文件在正确目录（`static/` 或 `modules/`）
- [ ] 页面组件存在且路径正确
- [ ] 组件名称与路由名称一致
- [ ] 路由路径正确
- [ ] 国际化配置已添加（如使用）

## 常见问题

**Q: 路由会自动注册吗？**  
A: 是的，框架会自动扫描 `static/` 和 `modules/` 目录下的所有 `.ts` 文件。

**Q: 如何设置页面权限？**  
A: 在路由的 `meta` 中配置 `authority` 字段：`authority: ['admin', 'user']`

**Q: 如何让页面不在菜单中显示？**  
A: 设置 `hideInMenu: true`

**Q: 如何固定标签页？**  
A: 设置 `affixTab: true`

更多问题和完整示例请参考 [reference.md](reference.md)。
