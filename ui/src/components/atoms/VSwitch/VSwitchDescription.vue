<script setup lang="ts">
import { SwitchDescription } from "@headlessui/vue";

defineProps({
  as: {
    type: String,
    default: "p",
  },
});
</script>

<template>
  <SwitchDescription :as="as">
    <slot />
  </SwitchDescription>
</template>
