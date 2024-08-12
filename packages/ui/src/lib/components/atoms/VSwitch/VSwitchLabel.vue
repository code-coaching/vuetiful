<script setup lang="ts">
import { SwitchLabel } from '@headlessui/vue';

interface SwitchLabelProps {
  as?: string;
  passive?: boolean;
}

withDefaults(defineProps<SwitchLabelProps>(),{
  as: 'p',
});
</script>

<template>
  <SwitchLabel class="vuetiful-switch-label" :as="as" :passive="passive">
    <slot />
  </SwitchLabel>
</template>
