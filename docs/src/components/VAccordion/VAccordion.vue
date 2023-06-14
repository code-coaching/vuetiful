<script setup lang="ts">
import { defineProps, provide } from 'vue';

const props = defineProps({
  active: {
    type: String,
    default: 'bg-surface-200-700-token',
  },
  hover: {
    type: String,
    default: 'hover:variant-ghost',
  },
});

provide('active', props.active);
provide('hover', props.hover);
</script>

<template>
  <div class="flex w-full flex-col gap-1">
    <slot></slot>
  </div>
</template>
