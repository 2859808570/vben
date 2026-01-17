import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    name: 'Help',
    path: '/help',
    component: () => import('#/views/_core/help/index.vue'),
    meta: {
      icon: 'lucide:help-circle', // 添加图标，即使不在菜单显示，也可以在标签页显示
      hideInMenu: true, // 不在菜单中显示
      title: $t('ui.widgets.qa'),
    },
  },
];

export default routes;
