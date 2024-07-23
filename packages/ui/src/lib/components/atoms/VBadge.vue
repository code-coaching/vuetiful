<script setup lang="ts">
import { useSettings } from '@/lib';
import { presetProp, unstyledProp } from '@/lib/props';

const props = defineProps({
  preset: presetProp,
  unstyled: unstyledProp,
});

const { settings } = useSettings();
const isUnstyled = settings.global.unstyled || settings.components.badge.unstyled || props.unstyled;
</script>
<template>
  <div :class="`vuetiful-badge ${isUnstyled ? '' : 'badge'} preset-${preset}`">
    <slot />
  </div>
</template>
