<script setup lang="ts">
import { useAttrs } from "vue";
const attrs = useAttrs();
</script>

<template>
  <div :class="`vuetiful-badge badge ${attrs.class ?? ''}`">
    <slot />
  </div>
</template>
