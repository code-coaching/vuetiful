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
  <RadioGroupDescription :as="as" class="vuetiful-radio-group-description"><slot /></RadioGroupDescription>
</template>
