<script setup lang="ts">
import { useSettings } from "@/index";
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

  classTrack: {
    type: String,
    default: "variant-filled",
  },
  classThumb: {
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

const { settings } = useSettings();
const isUnstyled =
  settings.global.unstyled || settings.components.switch.unstyled || props.unstyled;
</script>

<template>
  <!-- There is some odd behavior with test coverage, v-model must be the last property in this component -->
  <Switch
    data-test="switch"
    :class="`vuetiful-slide-toggle ${
      isUnstyled
        ? ''
        : `rounded-container-token ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`
    }`"
    :name="name"
    :as="as"
    v-slot="{ checked }"
    v-model="parentModelValue"
  >
    <div
      data-test="switch-track"
      :class="`vuetiful-slide-toggle-track flex ${
        isUnstyled
          ? ''
          : `transition-all duration-[150ms] border-token rounded-token ${
              disabled ? 'cursor-not-allowed' : 'cursor-pointer'
            }`
      } ${trackSize} ${classTrack}`"
    >
      <template v-if="$slots.default">
        <span class="sr-only"><slot /></span>
      </template>
      <div
        data-test="switch-thumb"
        :class="`vuetiful-slide-toggle-thumb w-[50%] scale-[0.8] ${
          isUnstyled
            ? ''
            : `bg-opactiy-90 shadow transition-all duration-[150ms] rounded-token ${
                disabled ? 'cursor-not-allowed' : 'cursor-pointer'
              }`
        } ${checked ? 'translate-x-full' : `${isUnstyled ? '' : 'opacity-90'}`} ${classThumb}`"
      ></div>
    </div>
  </Switch>
</template>
