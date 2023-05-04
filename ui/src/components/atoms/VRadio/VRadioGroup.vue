<script setup lang="ts">
import { RadioGroup } from "@headlessui/vue";
import { provide, ref, watch } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  as: {
    type: String,
    default: "div",
  },

  disabled: {
    type: Boolean,
    default: false,
  },
  by: {
    type: [String, Function],
  },

  modelValue: RadioGroup.props["modelValue"],

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
    emit("update:modelValue", newValue);
  }
);

provide("active", props.active);
provide("hover", props.hover);
</script>
l
<template>
  <!-- There is some odd behavior with test coverge, v-model must be the last property in this component -->
  <radio-group
    data-test="radio-group"
    :as="as"
    :disabled="disabled"
    :by="by"
    :class="`radio-group inline-flex gap-1 p-1 ${background} ${text} border-token border-surface-400-500-token rounded-container-token`"
    v-model="parentModelValue"
  >
    <slot></slot>
  </radio-group>
</template>
