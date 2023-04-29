<script setup lang="ts">
import { defineEmits, provide, ref, watch } from "vue";

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },

  active: {
    type: String,
    default: "variant-filled",
  },
  hover: {
    type: String,
    default: "hover:variant-ghost",
  },

  background: {
    type: String,
    default: "bg-surface-200-700-token",
  },
  text: {
    type: String,
    default: "text-surface-900 dark:text-surface-50",
  },

  ariaLabel: {
    type: String,
    default: undefined,
  },
  ariaLabelledby: {
    type: String,
    default: undefined,
  },
});

const radioGroupRef = ref<HTMLElement>();
const selectedOption = ref(props.modelValue);
provide("selectedOption", selectedOption);
provide("name", props.name);
provide("radioGroup", radioGroupRef);

provide("active", props.active);
provide("hover", props.hover);

watch(selectedOption, (newVal) => {
  emits("update:modelValue", newVal);
});
</script>

<template>
  <div
    ref="radioGroupRef"
    role="radiogroup"
    :class="`radio-group inline-flex space-x-1 p-1 ${background} ${text} border-token border-surface-400-500-token rounded-token`"
    :aria-labelledby="ariaLabelledby"
    :aria-label="ariaLabel"
    tabindex="-1"
  >
    <slot></slot>
  </div>
</template>
