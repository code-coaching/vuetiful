<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { computed } from 'vue';

const props = withDefaults(defineProps<{ class?: string }>(), {
  class: '',
});

const classRootDefault = 'bg-surface-50-950 text-surface-950-50';
const classRootMerged = computed(() => tm(classRootDefault, props.class));
</script>

<template>
  <div :class="`vuetiful-badge badge ${classRootMerged}`">
    <slot />
  </div>
</template>
