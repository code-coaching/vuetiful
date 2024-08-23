<script setup lang="ts">
import { tm } from '@/lib/utils';
import { RadioGroupOption } from '@headlessui/vue';
import { computed, inject } from 'vue';

interface RadioItemProps {
  class?: string;
  classActive?: string;
  classHover?: string;
  classDisabled?: string;
  value: string | number | boolean | object;
}

const props = withDefaults(defineProps<RadioItemProps>(), {
  class: '',
  classActive: '',
  classHover: '',
  classDisabled: '',
  value: '',
})

const active = inject('active') as string;
const hover = inject('hover') as string;
const classItem = inject('classItem') as string;

const classRootDefault = 'px-4 py-1 text-center text-base rounded border border-transparent';
const classRootMerged = computed(() => tm(classRootDefault, classItem, props.class));

const classActiveDefault = 'bg-surface-950-50 text-surface-50-950';
const classActiveMerged = computed(() => tm(classActiveDefault, active, props.classActive));

const classHoverDefault = 'hover:border-black dark:hover:border-white hover:border';
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
