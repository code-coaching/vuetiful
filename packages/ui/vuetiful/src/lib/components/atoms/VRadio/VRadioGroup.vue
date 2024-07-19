<script setup lang="ts">
import { useSettings } from '@/lib';
import { RadioGroup } from '@headlessui/vue';
import { provide, ref, watch } from 'vue';
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  as: {
    type: String,
    default: 'div',
  },

  disabled: {
    type: Boolean,
    default: false,
  },
  by: {
    type: [String, Function],
  },

  modelValue: RadioGroup.props['modelValue'],

  active: {
    type: String,
    default: 'variant-filled',
  },
  hover: {
    type: String,
    default: 'hover:variant-ghost hover:text-surface-900 dark:hover:text-surface-50',
  },

  background: {
    type: String,
    default: 'bg-surface-200-700-token',
  },
  text: {
    type: String,
    default: 'text-surface-900 dark:text-surface-50',
  },

  classItem: {
    type: String,
    default: '',
  },

  unstyled: {
    type: Boolean,
    default: false,
  },
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

provide('active', props.active);
provide('hover', props.hover);
provide('classItem', props.classItem);

const { settings } = useSettings();
const isUnstyled =
  settings.global.unstyled || settings.components.radioGroup.unstyled || props.unstyled;
</script>
l
<template>
  <!-- There is some odd behavior with test coverage, v-model must be the last property in this component -->
  <radio-group
    data-test="radio-group"
    :as="as"
    :disabled="disabled"
    :by="by"
    :class="`vuetiful-radio-group inline-flex ${
      isUnstyled
        ? ''
        : `gap-1 p-1 border-token border-surface-400-500-token rounded-container-token`
    } ${background} ${text}`"
    v-model="parentModelValue"
  >
    <slot></slot>
  </radio-group>
</template>
