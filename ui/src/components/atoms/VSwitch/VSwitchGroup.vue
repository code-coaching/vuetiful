<script setup lang="ts">
import { SwitchGroup } from "@headlessui/vue";

defineProps({
  as: {
    type: String,
    default: "div",
  },
});
</script>

<template>
  <SwitchGroup class="vuetiful-switch-group" :as="as">
    <slot />
  </SwitchGroup>
</template>
