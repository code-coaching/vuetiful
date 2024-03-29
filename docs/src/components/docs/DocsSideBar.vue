<script setup lang="ts">
import { VRadioGroup, VRail, VRailTile, useRail } from '@code-coaching/vuetiful';
import { SideBarLink } from 'src/components';
import { ROUTE_NAMES } from 'src/router/routes';
import { ref } from 'vue';

const { selectedRailTile } = useRail();

defineProps({
  embedded: {
    type: Boolean,
    default: false,
  },
});

const docsLinks = [
  {
    title: 'Getting Started',
    name: ROUTE_NAMES.DOCS.GETTING_STARTED,
  },
  {
    title: 'Colors',
    name: ROUTE_NAMES.DOCS.COLORS,
  },
  {
    title: 'Icons',
    name: ROUTE_NAMES.DOCS.ICONS,
  },
  {
    title: 'Quasar',
    name: ROUTE_NAMES.DOCS.QUASAR,
  },
];

const docsResourceLinks = [
  {
    title: 'Theme Generator',
    name: ROUTE_NAMES.DOCS.THEME_GENERATOR,
  },
];

const vueLinksLayout = [
  {
    title: 'Shell',
    name: ROUTE_NAMES.VUE.V_SHELL,
  },
  {
    title: 'Rail',
    name: ROUTE_NAMES.VUE.V_RAIL,
  },
  {
    title: 'Drawer',
    name: ROUTE_NAMES.VUE.V_DRAWER,
  },
];

const vueLinks = [
  {
    title: 'Accordion',
    name: ROUTE_NAMES.VUE.V_ACCORDION,
  },
  {
    title: 'Alert',
    name: ROUTE_NAMES.VUE.V_ALERT,
  },
  {
    title: 'Avatar',
    name: ROUTE_NAMES.VUE.V_AVATAR,
  },
  {
    title: 'Badge',
    name: ROUTE_NAMES.VUE.V_BADGE,
  },
  {
    title: 'Button',
    name: ROUTE_NAMES.VUE.V_BUTTON,
  },
  {
    title: 'Card',
    name: ROUTE_NAMES.VUE.V_CARD,
  },
  {
    title: 'Chip',
    name: ROUTE_NAMES.VUE.V_CHIP,
  },
  {
    title: 'CodeBlock',
    name: ROUTE_NAMES.VUE.V_CODE_BLOCK,
  },
  {
    title: 'Listbox',
    name: ROUTE_NAMES.VUE.V_LISTBOX,
  },
  {
    title: 'Preview',
    name: ROUTE_NAMES.VUE.V_PREVIEW,
  },
  {
    title: 'RadioGroup',
    name: ROUTE_NAMES.VUE.V_RADIO_GROUP,
  },
  {
    title: 'Switch',
    name: ROUTE_NAMES.VUE.V_SWITCH,
  },
  {
    title: 'Tabs',
    name: ROUTE_NAMES.VUE.V_TABS,
  },
];

const activeRoute = ref();
</script>

<template>
  <div
    :class="`sidebar h-full grid-cols-[auto_1fr] border-r border-surface-500/30 ${
      embedded ? 'grid' : 'hidden lg:!grid'
    }`"
  >
    <v-rail class="rail border-r border-surface-500/30">
      <v-rail-tile @click="$router.push({ name: ROUTE_NAMES.DOCS.DEFAULT })" value="docs" label="Docs"> </v-rail-tile>
      <v-rail-tile value="vue" label="Vue" @click="$router.push({ name: ROUTE_NAMES.VUE.DEFAULT })"> </v-rail-tile>
    </v-rail>
    <v-radio-group
      v-model="activeRoute"
      unstyled
      class="flex flex-col gap-4 overflow-y-auto p-4"
      hover="transparant"
      active="transparant"
    >
      <template v-if="selectedRailTile === 'docs'">
        <div class="text-lg font-bold text-primary-900-50-token">Docs</div>
        <side-bar-link
          class="w-40 min-w-full justify-start px-2 py-1"
          v-for="link in docsLinks"
          :key="link.name"
          :route-name="link.name"
          :link="link.name"
        >
          {{ link.title }}
        </side-bar-link>
        <div class="text-lg font-bold text-primary-900-50-token">Resources</div>
        <side-bar-link
          class="w-40 min-w-full justify-start px-2 py-1"
          v-for="link in docsResourceLinks"
          :key="link.name"
          :route-name="link.name"
          :link="link.name"
        >
          {{ link.title }}
        </side-bar-link>
      </template>

      <template v-if="selectedRailTile === 'vue' || selectedRailTile.includes('demo')">
        <div class="text-lg font-bold text-primary-900-50-token">Layout</div>
        <side-bar-link
          class="w-40 min-w-full justify-start px-4 py-1"
          v-for="link in vueLinksLayout"
          :key="link.name"
          :route-name="link.name"
          :link="link.name"
        >
          {{ link.title }}
        </side-bar-link>

        <div class="text-lg font-bold text-primary-900-50-token">Components</div>
        <side-bar-link
          class="w-40 min-w-full justify-start px-4 py-1"
          v-for="link in vueLinks"
          :key="link.name"
          :route-name="link.name"
          :link="link.name"
        >
          {{ link.title }}
        </side-bar-link>
      </template>
    </v-radio-group>
  </div>
</template>
