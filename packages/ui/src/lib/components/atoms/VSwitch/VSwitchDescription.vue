<script setup lang="ts">
import { SwitchDescription } from '@headlessui/vue';

interface SwitchDescriptionProps {
  as?: string;
}

withDefaults(defineProps<SwitchDescriptionProps>(), {
  as: 'p'
});
</script>

<template>
  <SwitchDescription class="vuetiful-switch-description" :as="as">
    <slot />
  </SwitchDescription>
</template>
