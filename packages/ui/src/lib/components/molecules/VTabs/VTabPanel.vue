<script setup lang="ts">
import { TabPanel } from '@headlessui/vue';
</script>

<template>
  <TabPanel :tab-index="-1" class="vuetiful-tab-panel">
    <slot />
  </TabPanel>
</template>
