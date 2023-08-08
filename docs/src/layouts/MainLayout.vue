<script setup lang="ts">
import { ThemeSwitcher, VDrawer, VShell, useDrawer } from '@code-coaching/vuetiful';
import { DocsSideBar, DrawerExample } from 'src/components';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { version } from '../../package.json';

const route = useRoute();
const layoutRef = ref<HTMLElement | null>(null);

watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    if (newPath !== oldPath) {
      layoutRef.value?.scrollIntoView();
    }
  }
);

const { open, drawer } = useDrawer();
</script>

<template>
  <v-drawer>
    <DocsSideBar v-if="drawer.id === 'docs'" embedded />
    <DrawerExample title="This is a drawer" v-if="drawer.id === 'drawer-example'" />
    <DrawerExample title="Content One" v-if="drawer.id === 'drawer-multi-example-one'" />
    <DrawerExample title="Content Two" v-if="drawer.id === 'drawer-multi-example-two'" />
    <DrawerExample title="Content Three" v-if="drawer.id === 'drawer-multi-example-three'" />
    <DrawerExample title="Content Four" v-if="drawer.id === 'drawer-multi-example-four'" />
  </v-drawer>
  <v-shell>
    <template v-slot:fixedHeader>
      <q-toolbar class="border-b border-surface-500/30 bg-surface-50-900-token">
        <q-btn
          class="lg:hidden"
          id="icon-button"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="open({ id: 'docs', duration: 300 })"
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
      <DocsSideBar />
    </template>
    <div ref="layoutRef" class="flex justify-center p-4 md:p-10">
      <div class="flex w-full max-w-5xl flex-col">
        <router-view />
      </div>
    </div>
  </v-shell>
</template>

<style>
.vuetiful-theme-switcher__popup {
  right: 1rem;
}
</style>
