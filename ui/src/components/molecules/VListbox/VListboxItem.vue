<script setup lang="ts">
import { ListboxOption } from "@headlessui/vue";
import { inject } from "vue";

defineProps({
  value: {
    type: [String, Number, Boolean, Object],
    required: true,
  },
});

const activeClass = inject("active") as string;
const hoverClass = inject("hover") as string;
</script>

<template>
  <ListboxOption v-slot="{ selected, disabled, active }" :value="value">
    <div
      data-test="v-listbox-item"
      :class="`vuetiful-listbox-item px-4 py-1 text-base rounded-token ${
        selected ? activeClass : `hover:${hoverClass}`
      } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${
        active && !selected ? hoverClass : ''
      }`"
    >
      <slot />
    </div>
  </ListboxOption>
</template>
