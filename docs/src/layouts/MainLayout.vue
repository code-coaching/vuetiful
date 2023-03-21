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
          <div>Vuetiful v{{ version }}</div>
          <ThemeSwitcher
            button-classes="btn-sm !bg-surface-400 !text-on-surface-token"
          />
          <div>Quasar v{{ $q.version }}</div>
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

<script lang="ts">
import { ThemeSwitcher, useDarkMode, useTheme } from '@code-coaching/vuetiful';
import { SideBarLink } from 'components/index';
import { useQuasar } from 'quasar';
import { defineComponent, onMounted, ref, watch } from 'vue';
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

export default defineComponent({
  components: {
    SideBarLink,
    ThemeSwitcher,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const { initializeTheme } = useTheme();
    const { initializeMode, currentMode, MODE } = useDarkMode();
    const $q = useQuasar();

    const handleQuasarDarkMode = (mode: boolean) => {
      $q.dark.set(mode === MODE.DARK);
      if (mode === MODE.LIGHT) {
        document.body.classList.remove('body--light');
      } else {
        document.body.classList.remove('body--dark');
      }
    };

    onMounted(() => {
      initializeMode();
      initializeTheme();
      handleQuasarDarkMode(currentMode.value);
    });

    watch(currentMode, (newMode) => {
      handleQuasarDarkMode(newMode);
      /*
       * Put initial dark mode logic in `onMounted` hook
       * { immediate: true } will cause SSR issues
       */
    });

    return {
      docsLinks,
      leftDrawerOpen,
      version,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.header {
  background-color: rgb(var(--color-surface-500));
  color: rgb(var(--on-surface));
}
</style>

<style>
.theme-switcher__popup {
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
