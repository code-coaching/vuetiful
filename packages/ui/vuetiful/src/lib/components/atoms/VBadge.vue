<script setup lang="ts">
import { useSettings } from '@/lib';
import { unstyledProp, variantProp } from '@/lib/props';

const props = defineProps({
  variant: variantProp,
  unstyled: unstyledProp,
});

const { settings } = useSettings();
const isUnstyled = settings.global.unstyled || settings.components.badge.unstyled || props.unstyled;
</script>
<template>
  <div :class="`vuetiful-badge ${isUnstyled ? '' : 'badge'} variant-${variant}`">
    <slot />
  </div>
</template>
