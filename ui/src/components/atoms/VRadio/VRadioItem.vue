<script setup lang="ts">
import { RadioGroupOption } from '@headlessui/vue';
import { inject } from 'vue';

defineProps({
  value: {
    type: [String, Number],
    required: true,
  },
});

const active = (inject('active') as string) || 'variant-filled';
const hover = (inject('hover') as string) || 'hover:variant-ghost';
</script>

<template>
  <RadioGroupOption v-slot="{ checked, disabled }" :value="value">
    <span
      :class="`radio-item px-4 py-1 text-center text-base rounded-token ${checked ? active : hover} ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      }`"
    >
      <slot />
    </span>
  </RadioGroupOption>
</template>
