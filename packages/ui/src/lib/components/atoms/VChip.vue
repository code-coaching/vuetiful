<script setup lang="ts">
import { useSettings } from '@/lib';
import { presetProp, unstyledProp } from '@/lib/props';

const props = defineProps({
  unstyled: unstyledProp,
  preset: presetProp,
});

const { settings } = useSettings();
const isUnstyled = settings.global.unstyled || settings.components.chip.unstyled || props.unstyled;
</script>
<template>
  <div :class="`vuetiful-chip ${isUnstyled ? '' : 'chip'} preset-${preset}`">
    <slot />
  </div>
</template>
