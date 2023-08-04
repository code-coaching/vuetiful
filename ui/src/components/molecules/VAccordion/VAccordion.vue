<script setup lang="ts">
import { useSettings } from '@/services';
import { provide, useSSRContext } from 'vue';

const props = defineProps({
  classQuestion: {
    type: String,
    default: 'bg-surface-200-700-token hover:variant-soft',
  },
  classAnswer: {
    type: String,
    default: 'bg-surface-200-700-token',
  },

  unstyled: {
    type: Boolean,
    default: false,
  },
});

provide('classQuestion', props.classQuestion);
provide('classAnswer', props.classAnswer);

const { settings } = useSettings()
const isUnstyled =  settings.global.unstyled || settings.components.accordion.unstyled || props.unstyled
</script>

<template>
  <div :class="`vuetiful-accordion ${isUnstyled ? '' : 'flex w-full flex-col gap-1'}`">
    <slot></slot>
  </div>
</template>
