<script setup lang="ts">
import { VRadioGroup, tm, useRail } from '@/lib';
import { computed, provide } from 'vue';
const { selectedRailTile } = useRail();

const props = defineProps({
  class: {
    type: String,
    default: '',
  },

  classItemActive: {
    type: String,
    default: 'preset-filled',
  },
  classItemHover: {
    type: String,
    default: 'hover:preset-outlined',
  },
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
