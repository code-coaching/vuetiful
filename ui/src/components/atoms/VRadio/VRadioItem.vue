<script setup lang="ts">
import { RadioGroupOption } from "@headlessui/vue";
import { inject } from "vue";

defineProps({
  value: {
    type: [String, Number, Boolean, Object],
    required: true,
  },
});

const active = inject("active") as string;
const hover = inject("hover") as string;
</script>

<template>
  <RadioGroupOption v-slot="{ checked, disabled }" :value="value">
    <div
      data-test="radio-item"
      :class="`radio-item px-4 py-1 text-center text-base rounded-token ${
        checked ? active : hover
      } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`"
    >
      <slot />
    </div>
  </RadioGroupOption>
</template>
