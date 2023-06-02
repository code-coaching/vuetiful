<script setup lang="ts">
import { Listbox } from "@headlessui/vue";
import { computed, provide, ref, watch } from "vue";
import VListboxButton from "./VListboxButton.vue";
import VListboxItems from "./VListboxItems.vue";
import VListboxLabel from "./VListboxLabel.vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  by: {
    type: String,
  },
  display: {
    type: String,
  },

  labelText: {
    type: String,
  },
  labelClasses: {
    type: Boolean,
    default: false,
  },

  buttonText: {
    type: String,
    default: "Select an option",
  },

  modelValue: Listbox.props["modelValue"],
  horizontal: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },

  active: {
    type: String,
    default: "variant-filled",
  },
  hover: {
    type: String,
    default: "variant-ghost",
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
provide("background", props.background);
provide("text", props.text);
provide("horizontal", props.horizontal);

const showText = computed(() => {
  if (props.display && parentModelValue.value) return parentModelValue.value[props.display];

  const length = parentModelValue.value?.length;
  if (props.multiple && length === 0) return props.buttonText;
  if (props.multiple && length === 1) return parentModelValue.value[0];
  if (props.multiple && length > 1) return `${length} options selected`; // TODO: i18n

  if (parentModelValue.value) return parentModelValue.value;

  return props.buttonText;
});
</script>

<template>
  <!-- There is some odd behavior with test coverge, v-model must be the last property in this component -->
  <Listbox
    data-test="v-listbox"
    as="div"
    :by="by"
    :multiple="multiple"
    class="vuetiful-listbox relative rounded-container-token"
    v-model="parentModelValue"
  >
    <v-listbox-label v-if="labelText" :class="labelClasses">{{ labelText }}</v-listbox-label>
    <v-listbox-button data-test="v-listbox-button">{{ showText }}</v-listbox-button>
    <!-- TODO: Add configurable transition -->
    <transition
      enter-active-class="transition duration-150 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <v-listbox-items class="absolute mt-1 min-w-full">
        <slot />
      </v-listbox-items>
    </transition>
  </Listbox>
</template>
