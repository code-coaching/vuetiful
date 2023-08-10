<script setup lang="ts">
import { unstyledProp, variantProp } from '@/props';
import { useSettings } from '@/services';

const props = defineProps({
  unstyled: unstyledProp,
  variant: variantProp,
});

const { settings } = useSettings();
const isUnstyled = settings.global.unstyled || settings.components.chip.unstyled || props.unstyled;
</script>
<template>
  <div :class="`vuetiful-chip ${isUnstyled ? '' : 'chip'} variant-${variant}`">
    <slot />
  </div>
</template>
