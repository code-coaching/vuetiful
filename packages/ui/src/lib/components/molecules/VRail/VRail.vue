<script setup lang="ts">
import { VRadioGroup, tm, useRail } from '@/lib';
import { computed, provide } from 'vue';
const { selectedRailTile } = useRail();

interface RailProps {
  class?: string;
  classItemActive?: string;
  classItemHover?: string;
}

const props = withDefaults(defineProps<RailProps>(), {
  class: '',
  classItemActive: 'bg-surface-950-50 text-surface-50-950',
  classItemHover: 'border border-transparent hover:border-surface-200-800',
});

provide('activeRail', props.classItemActive);
provide('hoverRail', props.classItemHover);

const classRootDefault = 'flex h-full w-[70px] flex-col overflow-y-auto rounded-none border-0 border-r gap-0 p-0';
const classRootMerged = computed(() => tm(classRootDefault, props.class));
</script>

<template>
  <v-radio-group
    v-model="selectedRailTile"
    :class="`vuetiful-rail ${classRootMerged}`"
  >
    <slot />
  </v-radio-group>
</template>
