<script setup lang="ts">
import { provide } from 'vue';

const props = defineProps({
  hover: {
    type: String,
    default: 'hover:variant-soft',
  },
  background: {
    type: String,
    default: 'bg-surface-200-700-token',
  },
});

provide('hover', props.hover);
provide('background', props.background);
</script>

<template>
  <div class="vuetiful-accordion flex w-full flex-col gap-1">
    <slot></slot>
  </div>
</template>
