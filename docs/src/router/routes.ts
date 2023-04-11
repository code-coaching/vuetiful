import { useRail } from '@code-coaching/vuetiful';
import { RouteRecordRaw } from 'vue-router';
const { selectedRailTile } = useRail();

export const ROUTE_NAMES = {
  DOCS: {
    DEFAULT: 'GETTING_STARTED',
    GETTING_STARTED: 'GETTING_STARTED',
    QUASAR: 'QUASAR',
  },
  VUE: {
    DEFAULT: 'V_BUTTON',
    V_BUTTON: 'V_BUTTON',
  },
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: { name: ROUTE_NAMES.DOCS.GETTING_STARTED },
      },
      {
        path: 'docs',
        beforeEnter: () => {
          selectedRailTile.value = 'docs';
        },
        children: [
          {
            path: 'getting-started',
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
      {
        path: 'vue',
        beforeEnter: () => {
          selectedRailTile.value = 'vue';
        },
        children: [
          {
            path: '',
            redirect: { name: ROUTE_NAMES.VUE.V_BUTTON },
          },
          {
            path: 'v-button',
            name: ROUTE_NAMES.VUE.V_BUTTON,
            component: () => import('src/pages/docs/components/VButton.vue'),
          },
        ],
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
