<script setup lang="ts">
import { useAttrs } from "vue";
const attrs = useAttrs();
</script>

<template>
  <div :class="`vuetiful-chip chip ${attrs.class ?? ''}`">
    <slot />
  </div>
</template>
