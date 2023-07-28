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
  <SwitchDescription class="vuetiful-switch-description" :as="as">
    <slot />
  </SwitchDescription>
</template>
