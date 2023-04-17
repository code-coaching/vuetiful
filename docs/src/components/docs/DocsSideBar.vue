<script setup lang="ts">
import { VRail, VRailTile, useRail } from '@code-coaching/vuetiful';
import { SideBarLink } from 'src/components';
import { ROUTE_NAMES } from 'src/router/routes';

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
    title: 'Quasar',
    name: ROUTE_NAMES.DOCS.QUASAR,
  },
];

const vueLinks = [
  {
    title: 'VBadge',
    name: ROUTE_NAMES.VUE.V_BADGE,
  },
  {
    title: 'VButton',
    name: ROUTE_NAMES.VUE.V_BUTTON,
  },
];

const vueLinksLayout = [
  {
    title: 'VShell',
    name: ROUTE_NAMES.VUE.V_SHELL,
  },
  {
    title: 'VRail',
    name: ROUTE_NAMES.VUE.V_RAIL,
  },
  {
    title: 'VDrawer',
    name: ROUTE_NAMES.VUE.V_DRAWER,
  }
];
</script>

<template>
  <div
    :class="`sidebar h-full grid-cols-[auto_1fr] border-r border-surface-500/30 ${ embedded ? 'grid' : 'hidden lg:!grid' }`"
  >
    <v-rail class="rail overflow-y-auto border-r border-surface-500/30">
      <v-rail-tile @click="$router.push({ name: ROUTE_NAMES.DOCS.DEFAULT })" value="docs" label="Docs"> </v-rail-tile>
      <v-rail-tile value="vue" label="Vue" @click="$router.push({ name: ROUTE_NAMES.VUE.DEFAULT })"> </v-rail-tile>
    </v-rail>
    <div class="flex flex-col gap-1 p-4">
      <template v-if="selectedRailTile === 'docs'">
        <side-bar-link
          class="w-40 min-w-full justify-start px-4 py-1"
          v-for="link in docsLinks"
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
    </div>
  </div>
</template>
