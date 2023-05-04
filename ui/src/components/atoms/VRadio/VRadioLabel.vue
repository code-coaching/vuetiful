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
  <RadioGroupLabel :as="as"><slot /></RadioGroupLabel>
</template>
