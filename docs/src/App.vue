<template>
  <router-view />
</template>

<script setup lang="ts">
import { useDarkMode, useTheme } from '@code-coaching/vuetiful';
import '@code-coaching/vuetiful/styles/all.css';
import { useQuasar } from 'quasar';
import { onMounted, watch } from 'vue';
import './css/app.css';

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
  const themeCallback = () => {
    handleQuasarDarkMode(currentMode.value);
  };
  initializeTheme(themeCallback);
});

watch(currentMode, (newMode) => {
  handleQuasarDarkMode(newMode);
  /*
   * Put initial dark mode logic in `onMounted` hook
   * { immediate: true } will cause SSR issues
   */
});
</script>
