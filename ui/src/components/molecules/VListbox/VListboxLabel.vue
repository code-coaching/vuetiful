<script setup lang="ts">
import { ListboxLabel } from "@headlessui/vue";

defineProps({
  as: {
    type: String,
    default: "label",
  },
});
</script>

<template>
  <ListboxLabel :as="as"><slot /></ListboxLabel>
</template>
