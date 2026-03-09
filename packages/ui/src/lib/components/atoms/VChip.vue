<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { computed } from 'vue';

type ChipProps = {
  class?: string;
};
const props = withDefaults(defineProps<ChipProps>(), { class: '' });

const classRootMerged = computed(() => tm('chip bg-surface-50-950 text-surface-950-50', props.class));
</script>
<template>
  <div :class="`vuetiful-chip ${classRootMerged}`">
    <slot />
  </div>
</template>
