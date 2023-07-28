<script setup lang="ts">
import { RadioGroupLabel } from "@headlessui/vue";

defineProps({
  as: {
    type: String,
    default: "p",
  },
});
</script>

<template>
  <RadioGroupLabel :as="as" class="vuetiful-radio-label"><slot /></RadioGroupLabel>
</template>
