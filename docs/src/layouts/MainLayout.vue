<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn
          id="icon-button"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div class="flex gap-2 items-center">
          <ThemeSwitcher
            button-classes="btn-sm !bg-surface-400 !text-on-surface-token"
          />
          <div>Vuetiful v{{ version }}</div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Docs </q-item-label>

        <SideBarLink v-for="link in docsLinks" :key="link.name" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ThemeSwitcher } from '@code-coaching/vuetiful';
import { SideBarLink } from 'components/index';
import { ref } from 'vue';
import { version } from '../../package.json';
import { ROUTE_NAMES } from '../router/routes';

const docsLinks = [
  {
    title: 'Getting Started',
    caption: '5 minutes!',
    icon: 'school',
    name: ROUTE_NAMES.DOCS.GETTING_STARTED,
  },
];

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
</script>

<style scoped>
.header {
  background-color: rgb(var(--color-surface-500));
  color: rgb(var(--on-surface));
}
</style>

<style>
.cc-theme-switcher__popup {
  right: 1rem;
}

.q-drawer {
  background-color: rgb(var(--color-surface-50));
}

.dark .q-drawer {
  background-color: rgb(var(--color-surface-900));
}

#icon-button {
  @apply !bg-transparent;
  @apply !text-on-surface-token;
}
</style>
