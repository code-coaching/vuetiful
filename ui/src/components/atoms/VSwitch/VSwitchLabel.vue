<script setup lang="ts">
import { SwitchLabel } from '@headlessui/vue';

defineProps({
  as: {
    type: String,
    default: 'p',
  },
  passive: {
    type: Boolean,
    default: false,
  }
});
</script>

<template>
  <SwitchLabel :as="as" :passive="passive">
    <slot />
  </SwitchLabel>
</template>
