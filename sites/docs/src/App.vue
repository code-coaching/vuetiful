<template>
  <router-view />
</template>

<script setup lang="ts">
import { type Mode, useDarkMode, useTheme } from '@code-coaching/vuetiful';
import '@code-coaching/vuetiful/css/overrides/quasar.css';
import '@code-coaching/vuetiful/css/style.css';
import { useQuasar } from 'quasar';
import { onMounted, ref, watch } from 'vue';
import './css/app.css';

const { initializeTheme } = useTheme();
const { chosenMode, MODE, initializeMode } = useDarkMode();
const $q = useQuasar();

const test = ref(true);
setTimeout(() => {
  test.value = false;
}, 3000);

const handleQuasarDarkMode = (mode: Mode) => {
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
  handleQuasarDarkMode(chosenMode.value);
});

watch(chosenMode, (newMode) => {
  handleQuasarDarkMode(newMode);
  /*
   * Put initial dark mode logic in `onMounted` hook
   * { immediate: true } will cause SSR issues
   */
});
</script>
