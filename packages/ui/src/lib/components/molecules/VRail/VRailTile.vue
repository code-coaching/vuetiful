<script setup lang="ts">
import type { CssClasses } from '@/lib';
import { tm, useRail, VRadioItem } from '@/lib';
import { computed, inject } from 'vue';
const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  classIcon: {
    type: String,
    default: '',
  },
  classLabel: {
    type: String,
    default: '',
  },
  classActive: {
    type: String as () => CssClasses,
    default: '',
  },
  classHover: {
    type: String as () => CssClasses,
    default: '',
  },

  value: {
    type: String,
    default: '',
  },
  label: {
    type: String as () => string,
    default: '',
  },

});

const { selectedRailTile } = useRail();
const activeRail = inject('activeRail') as string;
const hoverRail = inject('hoverRail') as string;

const classRootDefault = 'grid aspect-square w-full cursor-pointer place-content-center place-items-center'
const classRootMerged = computed(() => tm(classRootDefault, props.class))

const classActiveMerged = computed(() => tm(activeRail, props.classActive))
const classHoverMerged = computed(() => tm(hoverRail, props.classHover))

const classIconDefault = '';
const classIconMerged = computed(() => tm(classIconDefault, props.classIcon))

const classLabelDefault = 'text-center text-xs font-bold';
const classLabelMerged = computed(() => tm(classLabelDefault, props.classLabel))
</script>

<template>
  <v-radio-item
    :value="value"
    :class-active="classActiveMerged"
    :class-hover="classHoverMerged"
    :class="`vuetiful-rail-tile ${ selectedRailTile === value ? `${classActiveMerged}` : `${classHoverMerged}` } ${classRootMerged}`"
  >
    <template v-if="$slots.default">
      <div :class="`vuetiful-rail-tile-icon ${classIconMerged}`"><slot /></div>
    </template>
    <template v-if="label">
      <div :class="`vuetiful-rail-tile-label ${classLabelMerged}`">
        {{ label }}
      </div>
    </template>
  </v-radio-item>
</template>
