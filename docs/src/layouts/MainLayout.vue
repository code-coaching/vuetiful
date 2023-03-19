<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div class="switchers">
          <ThemeSwitcher />
        </div>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar';
import { defineComponent, onMounted, ref, watch } from 'vue';
import { ThemeSwitcher, useDarkMode, useTheme } from '@code-coaching/vuetiful';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    ThemeSwitcher,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const { initializeTheme } = useTheme();
    const { initializeMode, currentMode, MODE } = useDarkMode();
    const $q = useQuasar();

    watch(
      currentMode,
      (newMode) => {
        $q.dark.set(newMode === MODE.DARK);
        if (newMode === MODE.LIGHT) {
          document.body.classList.remove('body--light');
        } else {
          document.body.classList.remove('body--dark');
        }
      },
      { immediate: true }
    );

    onMounted(() => {
      initializeMode();
      initializeTheme();
    });

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.switchers {
  display: flex;
  gap: 1rem;
  margin-right: 1rem;
}

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
</style>
