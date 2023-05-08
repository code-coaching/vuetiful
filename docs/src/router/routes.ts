import { useRail } from '@code-coaching/vuetiful';
import { RouteRecordRaw } from 'vue-router';
const { selectedRailTile } = useRail();

export const ROUTE_NAMES = {
  DOCS: {
    DEFAULT: 'GETTING_STARTED',
    GETTING_STARTED: 'GETTING_STARTED',
    COLORS: 'COLORS',
    ICONS: 'ICONS',
    QUASAR: 'QUASAR',
  },
  VUE: {
    DEFAULT: 'V_SHELL',
    V_BADGE: 'V_BADGE',
    V_BUTTON: 'V_BUTTON',
    V_CHIP: 'V_CHIP',
    V_CODE_BLOCK: 'V_CODE_BLOCK',
    V_RADIO_GROUP: 'V_RADIO_GROUP',
    V_SHELL: 'V_SHELL',
    V_RAIL: 'V_RAIL',
    V_SWITCH: 'V_SWITCH',
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
            path: 'icons',
            name: ROUTE_NAMES.DOCS.ICONS,
            component: () => import('src/pages/docs/IconsPage.vue'),
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
            path: 'badge',
            name: ROUTE_NAMES.VUE.V_BADGE,
            component: () => import('src/pages/vue/VBadge.vue'),
          },
          {
            path: 'button',
            name: ROUTE_NAMES.VUE.V_BUTTON,
            component: () => import('src/pages/vue/VButton.vue'),
          },
          {
            path: 'chip',
            name: ROUTE_NAMES.VUE.V_CHIP,
            component: () => import('src/pages/vue/VChip.vue'),
          },
          {
            path: 'code-block',
            name: ROUTE_NAMES.VUE.V_CODE_BLOCK,
            component: () => import('src/pages/vue/VCodeBlock.vue'),
          },
          {
            path: 'radio-group',
            name: ROUTE_NAMES.VUE.V_RADIO_GROUP,
            component: () => import('src/pages/vue/VRadioGroup.vue'),
          },
          {
            path: 'shell',
            name: ROUTE_NAMES.VUE.V_SHELL,
            component: () => import('src/pages/vue/VShell.vue'),
          },
          {
            path: 'switch',
            name: ROUTE_NAMES.VUE.V_SWITCH,
            component: () => import('src/pages/vue/VSwitch.vue'),
          },
          {
            path: 'rail',
            name: ROUTE_NAMES.VUE.V_RAIL,
            component: () => import('src/pages/vue/VRail.vue'),
          },
          {
            path: 'drawer',
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
