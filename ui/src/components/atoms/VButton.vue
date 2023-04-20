<script setup lang="ts">
import { useAttrs } from "vue";

defineProps({
  tag: {
    type: String as () => string,
    default: "button",
  },
});
const attrs = useAttrs();
</script>

<template>
  <component
    :is="tag"
    :class="`vuetiful-button btn border-token hover:cursor-pointer ${attrs.class ?? ''}`"
  >
    <slot />
  </component>
</template>
