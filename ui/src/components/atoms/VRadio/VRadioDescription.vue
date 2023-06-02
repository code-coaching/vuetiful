<script setup lang="ts">
import { RadioGroupDescription } from "@headlessui/vue";

defineProps({
  as: {
    type: String,
    default: "p",
  },
});
</script>

<template>
  <RadioGroupDescription :as="as"><slot /></RadioGroupDescription>
</template>
