<script setup lang="ts">
import { useSettings } from "@/index";
import { RadioGroupOption } from "@headlessui/vue";
import { inject } from "vue";

const props = defineProps({
  value: {
    type: [String, Number, Boolean, Object],
    required: true,
  },
  unstyled: {
    type: Boolean,
    default: false,
  },
});

const active = inject("active") as string;
const hover = inject("hover") as string;
const classItem = inject("classItem") as string;

const { settings } = useSettings();
const isUnstyled =
  settings.global.unstyled || settings.components.radioItem.unstyled || props.unstyled;
</script>

<template>
  <RadioGroupOption v-slot="{ checked, disabled }" :value="value">
    <div
      data-test="radio-item"
      :class="`vuetiful-radio-item ${
        isUnstyled ? '' : `px-4 py-1 text-center text-base rounded-token`
      } ${checked ? active : hover} ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      } ${classItem}`"
    >
      <slot />
    </div>
  </RadioGroupOption>
</template>
