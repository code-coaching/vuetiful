<script setup lang="ts">
import { RadioGroup } from '@headlessui/vue';
import { provide, ref, watch } from 'vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  as: RadioGroup.props['as'],
  disabled: RadioGroup.props['disabled'],
  by: RadioGroup.props['by'],
  modelValue: RadioGroup.props['modelValue'],

  active: {
    type: String,
    default: 'variant-filled',
  },
  hover: {
    type: String,
    default: 'hover:variant-ghost',
  },

  background: {
    type: String,
    default: 'bg-surface-200-700-token',
  },
  text: {
    type: String,
    default: 'text-surface-900 dark:text-surface-50',
  },
});

const parentModelValue = ref(props.modelValue);
watch(
  () => props.modelValue,
  (newValue) => {
    parentModelValue.value = newValue;
  }
);
watch(
  () => parentModelValue.value,
  (newValue) => {
    console.log('test: ', newValue)
    emit('update:modelValue', newValue);
  }
);

provide('active', props.active);
provide('hover', props.hover);
</script>

<template>
  <radio-group
    v-model="parentModelValue"
    :as="as"
    :disabled="disabled"
    :by="by"
    :class="`radio-group inline-flex gap-1 p-1 ${background} ${text} border-token border-surface-400-500-token rounded-container-token`"
  >
    <slot></slot>
  </radio-group>
</template>
