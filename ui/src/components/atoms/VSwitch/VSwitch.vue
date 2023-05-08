<script setup lang="ts">
import { Switch } from "@headlessui/vue";
import { computed, ref, watch } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "md",
  },

  switchClass: {
    type: String,
    default: "variant-filled",
  },
  thumbClass: {
    type: String,
    default: "bg-surface-100-800-token",
  },

  as: {
    type: String,
    default: "button",
  },
  name: {
    type: String,
    default: "",
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

const trackSize = computed(() => {
  switch (props.size) {
    case "xs":
      return "w-8 h-4";
    case "sm":
      return "w-12 h-6";
    case "md":
      return "w-16 h-8";
    case "lg":
      return "w-20 h-10";
    case "xl":
      return "w-24 h-12";
    default:
      return props.size;
  }
});
</script>

<template>
  <!-- There is some odd behavior with test coverge, v-model must be the last property in this component -->
  <Switch
    :class="`slide-toggle rounded-container-token ${
      disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
    }`"
    :name="name"
    :as="as"
    v-slot="{ checked }"
    v-model="parentModelValue"
  >
    <div
      :class="`slide-toggle-track flex transition-all duration-[150ms] border-token rounded-token ${trackSize} ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } ${switchClass}`"
    >
      <template v-if="$slots.default">
        <span class="sr-only"><slot /></span>
      </template>
      <div
        :class="`slide-toggle-thumb h-full w-[50%] scale-[0.8] shadow transition-all duration-[150ms] rounded-token ${
          checked ? 'translate-x-full' : 'opacity-90'
        } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${thumbClass} bg-opacity-90`"
      ></div>
    </div>
  </Switch>
</template>
