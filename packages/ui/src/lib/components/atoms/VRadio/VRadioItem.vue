<script setup lang="ts">
import { tm } from '@/lib/utils';
import { RadioGroupOption } from '@headlessui/vue';
import { computed, inject } from 'vue';
const props = defineProps({
  class: {
    type: String,
    default: '',
  },

  classActive: {
    type: String,
    default: '',
  },
  classHover: {
    type: String,
    default: '',
  },
  classDisabled: {
    type: String,
    default: '',
  },

  value: {
    type: [String, Number, Boolean, Object],
    required: true,
  },
});

const active = inject('active') as string;
const hover = inject('hover') as string;
const classItem = inject('classItem') as string;

const classRootDefault = 'px-4 py-1 text-center text-base rounded';
const classRootMerged = computed(() => tm(classRootDefault, classItem, props.class));

const classActiveDefault = 'preset-filled';
const classActiveMerged = computed(() => tm(classActiveDefault, active, props.classActive));

const classHoverDefault = 'hover:preset-outlined';
const classHoverMerged = computed(() => tm(classHoverDefault, hover, props.classHover));

const classDisabledDefault = 'pointer-events-none opacity-50';
const classDisabledMerged = computed(() => tm(classDisabledDefault, props.classDisabled));
</script>

<template>
  <RadioGroupOption v-slot="{ checked, disabled }" :value="value">
    <div
      data-test="radio-item"
      :class="`vuetiful-radio-item ${checked ? classActiveMerged : `${disabled ? '' : classHoverMerged}`} ${disabled ? classDisabledMerged : 'cursor-pointer'} ${classRootMerged}`"
    >
      <slot />
    </div>
  </RadioGroupOption>
</template>
