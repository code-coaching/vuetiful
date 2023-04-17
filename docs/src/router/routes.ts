import { useRail } from '@code-coaching/vuetiful';
import { RouteRecordRaw } from 'vue-router';
const { selectedRailTile } = useRail();

export const ROUTE_NAMES = {
  DOCS: {
    DEFAULT: 'GETTING_STARTED',
    GETTING_STARTED: 'GETTING_STARTED',
    COLORS: 'COLORS',
    QUASAR: 'QUASAR',
  },
  VUE: {
    DEFAULT: 'V_SHELL',
    V_BUTTON: 'V_BUTTON',
    V_BADGE: 'V_BADGE',
    V_SHELL: 'V_SHELL',
    V_RAIL: 'V_RAIL',
    V_DRAWER: 'V_DRAWER',
  },
};

export const routes: RouteRecordRaw[] = [
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
            path: 'colors',
            name: ROUTE_NAMES.DOCS.COLORS,
            component: () => import('src/pages/docs/ColorsPage.vue'),
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
            path: 'v-badge',
            name: ROUTE_NAMES.VUE.V_BADGE,
            component: () => import('src/pages/vue/VBadge.vue'),
          },
          {
            path: 'v-button',
            name: ROUTE_NAMES.VUE.V_BUTTON,
            component: () => import('src/pages/vue/VButton.vue'),
          },
          {
            path: 'v-shell',
            name: ROUTE_NAMES.VUE.V_SHELL,
            component: () => import('src/pages/vue/VShell.vue'),
          },
          {
            path: 'v-rail',
            name: ROUTE_NAMES.VUE.V_RAIL,
            component: () => import('src/pages/vue/VRail.vue'),
          },
          {
            path: 'v-drawer',
            name: ROUTE_NAMES.VUE.V_DRAWER,
            component: () => import('src/pages/vue/VDrawer.vue'),
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
