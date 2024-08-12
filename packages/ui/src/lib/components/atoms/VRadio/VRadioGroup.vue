<script setup lang="ts">
import { tm } from '@/lib';
import { RadioGroup } from '@headlessui/vue';
import { computed, provide, ref, watch } from 'vue';
const emit = defineEmits(['update:modelValue']);

interface RadioGroupProps {
  class?: string;
  disabled?: boolean;
  by?: string | Function;
  modelValue?: any;
  classItemActive?: string;
  classItemHover?: string;
  classItemDisabled?: string;
  classItem?: string;
  vertical?: boolean;
}

const props = withDefaults(defineProps<RadioGroupProps>(), {
  class: '',
  classItem: '',
  classItemActive: '',
  classItemHover: '',
  classItemDisabled: '',
});

const parentModelValue = ref(props.modelValue);
watch(
  () => props.modelValue,
  (newValue) => {
    parentModelValue.value = newValue;
  },
);
watch(
  () => parentModelValue.value,
  (newValue) => {
    emit('update:modelValue', newValue);
  },
);

provide('active', props.classItemActive);
provide('hover', props.classItemHover);
provide('disabled', props.classItemDisabled);
provide('classItem', props.classItem);

const classRootDefault = computed(() => `inline-flex gap-1 p-1 border border-surface-400-600 rounded-container preset-filled-surface-200-800 ${props.vertical ? 'flex-col' : 'flex-row'}`);
const classRootMerged = computed(() => tm(classRootDefault.value, props.class));
</script>
l
<template>
  <!-- There is some odd behavior with test coverage, v-model must be the last property in this component -->
  <radio-group
    data-test="radio-group"
    :disabled="disabled"
    :by="by"
    :class="`vuetiful-radio-group ${classRootMerged}`"
    v-model="parentModelValue"
  >
    <slot></slot>
  </radio-group>
</template>
