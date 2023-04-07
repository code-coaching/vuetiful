<script setup lang="ts">
import {
  ThemeSwitcher,
  VRail,
  VRailTile,
  VShell,
  useRail,
} from '@code-coaching/vuetiful';
import { SideBarLink } from 'src/components';
import { onMounted, ref } from 'vue';
import { version } from '../../package.json';
import { ROUTE_NAMES } from '../router/routes';

const { selectedRailTile } = useRail();

onMounted(() => {
  selectedRailTile.value = 'docs';
});

const docsLinks = [
  {
    title: 'Getting Started',
    caption: '5 minutes!',
    icon: 'school',
    name: ROUTE_NAMES.DOCS.GETTING_STARTED,
  },
  {
    title: 'Quasar',
    caption: 'Component Examples',
    icon: 'auto_awesome',
    name: ROUTE_NAMES.DOCS.QUASAR,
  },
];

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
</script>

<template>
  <v-shell>
    <template v-slot:fixedHeader>
      <q-toolbar class="border-b border-surface-500/30 bg-surface-50-900-token">
        <q-btn
          id="icon-button"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="font-bold">Vuetiful</div>
        </q-toolbar-title>

        <div class="flex items-center gap-2">
          <ThemeSwitcher button-classes="btn-sm variant-filled-secondary" />
          <div>v{{ version }}</div>
        </div>
      </q-toolbar>
    </template>

    <template v-slot:sidebarLeft>
      <div
        class="sidebar hidden h-full grid-cols-[auto_1fr] border-r border-surface-500/30 lg:!grid"
      >
        <v-rail class="rail overflow-y-auto border-r border-surface-500/30">
          <v-rail-tile value="docs" label="Docs">
            <q-icon size="2rem" name="book" />
          </v-rail-tile>
        </v-rail>
        <div class="flex flex-col gap-1 p-4">
          <side-bar-link
            class="min-w-full px-4 py-1"
            v-for="link in docsLinks"
            :key="link.name"
            :route-name="link.name"
            :link="link.name"
          >
            {{ link.title }}
          </side-bar-link>
        </div>
      </div>
    </template>
    <div style="display: contents" class="h-full overflow-hidden">
      <router-view />
    </div>
  </v-shell>
</template>

<style>
.cc-theme-switcher__popup {
  right: 1rem;
}
</style>
