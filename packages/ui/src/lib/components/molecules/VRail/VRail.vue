<script setup lang="ts">
import type { CssClasses } from '@/lib';
import { VRadioGroup, useRail } from '@/lib';
import { provide } from 'vue';
const { selectedRailTile } = useRail();

const props = defineProps({
  active: {
    type: String as () => CssClasses,
    default: 'variant-filled',
  },
  hover: {
    type: String as () => CssClasses,
    default: 'hover:variant-ghost hover:text-surface-900 dark:hover:text-surface-50',
  },
});

provide('activeRail', props.active);
provide('hoverRail', props.hover);
</script>

<template>
  <v-radio-group
    v-model="selectedRailTile"
    unstyled
    hover=""
    active=""
    class="flex h-full w-[70px] flex-col overflow-y-auto"
  >
    <slot />
  </v-radio-group>
</template>
