<script setup lang="ts">
import { useSettings } from '@/services';
import { provide, useSSRContext } from 'vue';

const props = defineProps({
  hover: {
    type: String,
    default: 'hover:variant-soft',
  },
  background: {
    type: String,
    default: 'bg-surface-200-700-token',
  },

  unstyled: {
    type: Boolean,
    default: false,
  },
});

provide('hover', props.hover);
provide('background', props.background);

const { settings } = useSettings()
const isUnstyled =  settings.global.unstyled || settings.components.accordion.unstyled || props.unstyled
</script>

<template>
  <div :class="`vuetiful-accordion ${isUnstyled ? '' : 'flex w-full flex-col gap-1'}`">
    <slot></slot>
  </div>
</template>
