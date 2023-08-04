<script setup lang="ts">
import { ThemeSwitcher, VDrawer, VShell, useDrawer } from '@code-coaching/vuetiful';
import { DocsSideBar } from 'src/components';
import { version } from '../../package.json';

const { open } = useDrawer();
</script>

<template>
  <v-drawer>
    <DocsSideBar embedded />
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
    <div class="flex justify-center p-4 md:p-10">
      <div class="flex w-full max-w-5xl flex-col">
        <router-view />
      </div>
    </div>
  </v-shell>
</template>

<style>
.cc-theme-switcher__popup {
  right: 1rem;
}
</style>
