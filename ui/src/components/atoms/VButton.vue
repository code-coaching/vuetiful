<script setup lang="ts">
import { useAttrs } from "vue";

defineProps({
  tag: {
    type: String as () => string,
    default: "button",
  },
  msg: {
    type: String,
  },
});
const attrs = useAttrs();
</script>

<template>
  <component
    :is="tag"
    :class="`vuetiful-button btn border-token hover:cursor-pointer ${attrs.class ?? ''}`"
  >
    <template v-if="msg">{{ msg }}</template>
    <slot />
  </component>
</template>
