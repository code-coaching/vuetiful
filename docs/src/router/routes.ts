import { RouteRecordRaw } from 'vue-router';

export const ROUTE_NAMES = {
  DOCS: {
    GETTING_STARTED: 'GETTING_STARTED',
    QUASAR: 'QUASAR',
  },
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: ROUTE_NAMES.DOCS.GETTING_STARTED,
        component: () => import('src/pages/docs/GettingStarted.vue'),
      },
      {
        path: 'quasar',
        name: ROUTE_NAMES.DOCS.QUASAR,
        component: () => import('src/pages/docs/QuasarPage.vue'),
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
