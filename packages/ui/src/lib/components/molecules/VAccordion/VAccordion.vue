<script setup lang="ts">
import { useSettings } from '@/lib';
import { provide } from 'vue';

const props = defineProps({
  classQuestion: {
    type: String,
    default: 'bg-surface-200-800 hover:preset-soft',
  },
  classAnswer: {
    type: String,
    default: 'bg-surface-200-800',
  },

  unstyled: {
    type: Boolean,
    default: false,
  },
});

provide('classQuestion', props.classQuestion);
provide('classAnswer', props.classAnswer);

const { settings } = useSettings();
const isUnstyled =
  settings.global.unstyled || settings.components.accordion.unstyled || props.unstyled;
</script>

<template>
  <div :class="`vuetiful-accordion ${isUnstyled ? '' : 'flex w-full flex-col gap-1'}`">
    <slot></slot>
  </div>
</template>
