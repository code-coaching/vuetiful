<script setup lang="ts">
import { TabPanel } from '@headlessui/vue';
</script>

<template>
  <TabPanel tabindex="-1" class="vuetiful-tab-panel">
    <slot />
  </TabPanel>
</template>