<script setup lang="ts">
import { SwitchGroup } from '@headlessui/vue';

interface SwitchGroupProps {
  as?: string;
}

withDefaults(defineProps<SwitchGroupProps>(), {
  as: 'div',
});
</script>

<template>
  <SwitchGroup class="vuetiful-switch-group" :as="as">
    <slot />
  </SwitchGroup>
</template>
