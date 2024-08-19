<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { computed, provide } from 'vue';

interface AccordionProps {
  class?: string;
  classQuestion?: string;
  classAnswer?: string;
}

const props = withDefaults(defineProps<AccordionProps>(), {
  class: '',
  classQuestion: '',
  classAnswer: '',
});

const classQuestionDefault = 'bg-surface-200-800 hover:preset-outlined';
const classQuestionMerged = computed(() => tm(classQuestionDefault, props.classQuestion));

const classAnswerDefault = 'bg-surface-200-800';
const classAnswerMerged = computed(() => tm(classAnswerDefault, props.classAnswer));

provide('classQuestion', classQuestionMerged.value);
provide('classAnswer', classAnswerMerged.value);

const classRootDefault = 'flex w-full flex-col gap-1';
</script>

<template>
  <div :class="`vuetiful-accordion ${classRootDefault}`">
    <slot></slot>
  </div>
</template>
