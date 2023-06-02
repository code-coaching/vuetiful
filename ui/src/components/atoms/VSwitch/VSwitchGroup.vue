<script setup lang="ts">
import { SwitchGroup } from "@headlessui/vue";

defineProps({
  as: {
    type: String,
    default: "template",
  },
});
</script>

<template>
  <SwitchGroup :as="as">
    <slot />
  </SwitchGroup>
</template>
