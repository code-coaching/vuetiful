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

  labelledby: {
    type: String,
    default: "",
  },
});

const radioGroupRef = ref<HTMLElement>();
const selectedOption = ref(props.modelValue);
provide("selectedOption", selectedOption);
provide("name", props.name);
provide("radioGroup", radioGroupRef);

watch(selectedOption, (newVal) => {
  emits("update:modelValue", newVal);
});
</script>

<template>
  <div
    ref="radioGroupRef"
    role="radiogroup"
    class="radio-group inline-flex space-x-1 p-1 bg-surface-200-700-token border-token border-surface-400-500-token rounded-token"
    tabindex="-1"
  >
    <slot></slot>
  </div>
</template>
