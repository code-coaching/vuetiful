<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { computed } from 'vue';

const props = withDefaults(defineProps<{ class?: string }>(), {
  class: '',
});

const classRootDefault = 'preset-filled-surface-800-200';
const classRootMerged = computed(() => tm(classRootDefault, props.class));
</script>

<template>
  <div :class="`vuetiful-badge badge ${classRootMerged}`">
    <slot />
  </div>
</template>
