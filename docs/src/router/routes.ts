import { RouteRecordRaw } from 'vue-router';

export const ROUTE_NAMES = {
  DOCS: {
    GETTING_STARTED: 'GETTING_STARTED',
  },
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/IndexPage.vue') },
      {
        path: 'docs',
        name: ROUTE_NAMES.DOCS.GETTING_STARTED,
        component: () => import('src/pages/docs/GettingStarted.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound.vue'),
  },
];

export default routes;
