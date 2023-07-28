<script setup lang="ts">
import { useSettings } from "@/services";

const props = defineProps({
  unstyled: {
    type: Boolean,
    default: false,
  },
});

const { settings } = useSettings();
const isUnstyled = settings.global.unstyled || settings.components.badge.unstyled || props.unstyled;
</script>
<template>
  <div :class="`vuetiful-badge ${isUnstyled ? '' : 'badge'}`">
    <slot />
  </div>
</template>
