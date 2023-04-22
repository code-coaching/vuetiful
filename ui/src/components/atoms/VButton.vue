<script setup lang="ts">
import { useAttrs } from "vue";

defineProps({
  icon: {
    type: Boolean as () => boolean,
    default: false,
  },
  tag: {
    type: String as () => string,
    default: "button",
  },
});
const attrs = useAttrs();
const emit = defineEmits<{ (event: "click"): void }>();

const activate = () => {
  emit("click");
};

const clickHandler = (event: MouseEvent) => {
  event.preventDefault();
  activate();
};

const keydownHandler = (event: KeyboardEvent) => {
  if (["Enter", " "].includes(event.key)) event.preventDefault();
  if (event.key === "Enter") activate();
};

const keyupHandler = (event: KeyboardEvent) => {
  if (event.key === " ") {
    event.preventDefault();
    activate();
  }
};
</script>

<template>
  <component
    tabindex="0"
    role="button"
    :is="tag"
    :class="`vuetiful-button ${icon ? 'btn-icon' : 'btn'} border-token hover:cursor-pointer ${
      attrs.class ?? ''
    }`"
    @click="clickHandler"
    @keydown="keydownHandler"
    @keyup="keyupHandler"
  >
    <slot />
  </component>
</template>
