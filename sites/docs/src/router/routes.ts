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
    THEME_GENERATOR: 'THEME_GENERATOR',
  },
  VUE: {
    DEFAULT: 'V_SHELL',
    V_ACCORDION: 'V_ACCORDION',
    V_ALERT: 'V_ALERT',
    V_AVATAR: 'V_AVATAR',
    V_BADGE: 'V_BADGE',
    V_BUTTON: 'V_BUTTON',
    V_CARD: 'V_CARD',
    V_CHIP: 'V_CHIP',
    V_CODE_BLOCK: 'V_CODE_BLOCK',
    V_LISTBOX: 'V_LISTBOX',
    V_PREVIEW: 'V_PREVIEW',
    V_RADIO_GROUP: 'V_RADIO_GROUP',
    V_SWITCH: 'V_SWITCH',
    V_TABS: 'V_TABS',

    V_DRAWER: 'V_DRAWER',
    V_RAIL: 'V_RAIL',
    V_SHELL: 'V_SHELL',
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
          {
            path: 'theme-generator',
            name: ROUTE_NAMES.DOCS.THEME_GENERATOR,
            component: () => import('src/pages/docs/ThemeGenerator.vue'),
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
            path: 'accordion',
            name: ROUTE_NAMES.VUE.V_ACCORDION,
            component: () => import('src/pages/vue/VAccordion.vue'),
          },
          {
            path: 'alert',
            name: ROUTE_NAMES.VUE.V_ALERT,
            component: () => import('src/pages/vue/VAlert.vue'),
          },
          {
            path: 'avatar',
            name: ROUTE_NAMES.VUE.V_AVATAR,
            component: () => import('src/pages/vue/VAvatar.vue'),
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
            path: 'card',
            name: ROUTE_NAMES.VUE.V_CARD,
            component: () => import('src/pages/vue/VCard.vue'),
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
            path: 'listbox',
            name: ROUTE_NAMES.VUE.V_LISTBOX,
            component: () => import('src/pages/vue/VListbox.vue'),
          },
          {
            path: 'preview',
            name: ROUTE_NAMES.VUE.V_PREVIEW,
            component: () => import('src/pages/vue/VPreview.vue'),
          },
          {
            path: 'radio-group',
            name: ROUTE_NAMES.VUE.V_RADIO_GROUP,
            component: () => import('src/pages/vue/VRadioGroup.vue'),
          },
          {
            path: 'switch',
            name: ROUTE_NAMES.VUE.V_SWITCH,
            component: () => import('src/pages/vue/VSwitch.vue'),
          },
          {
            path: 'tabs',
            name: ROUTE_NAMES.VUE.V_TABS,
            component: () => import('src/pages/vue/VTabs.vue'),
          },

          {
            path: 'drawer',
            name: ROUTE_NAMES.VUE.V_DRAWER,
            component: () => import('src/pages/vue/VDrawer.vue'),
          },
          {
            path: 'rail',
            name: ROUTE_NAMES.VUE.V_RAIL,
            component: () => import('src/pages/vue/VRail.vue'),
          },
          {
            path: 'shell',
            name: ROUTE_NAMES.VUE.V_SHELL,
            component: () => import('src/pages/vue/VShell.vue'),
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
