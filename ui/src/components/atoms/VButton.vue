<script setup lang="ts">
import { sizeProp, unstyledProp, variantProp } from "@/props";
import { useSettings } from "@/services";
import { computed } from "vue";

const props = defineProps({
  icon: {
    type: Boolean as () => boolean,
    default: false,
  },
  tag: {
    type: String as () => string,
    default: "button",
  },

  size: sizeProp,
  variant: variantProp,
  unstyled: unstyledProp,
});
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

const btnSize = computed(() => {
  switch (props.size) {
    case "xs":
      return "px-2.5 py-1.5 text-xs";
    case "sm":
      return "px-3 py-2 text-sm leading-4";
    case "md":
      return "px-4 py-2 text-sm";
    case "lg":
      return "px-4 py-2 text-base";
    case "xl":
      return "px-6 py-3 text-base";
  }
});

const { settings } = useSettings();
const isUnstyled =
  settings.global.unstyled || settings.components.button.unstyled || props.unstyled;
</script>

<template>
  <component
    tabindex="0"
    role="button"
    :is="tag"
    :class="`vuetiful-button ${
      isUnstyled ? '' : `${icon ? 'btn-icon' : 'btn'} border-token hover:cursor-pointer`
    } ${btnSize} variant-${variant}`"
    @click="clickHandler"
    @keydown="keydownHandler"
    @keyup="keyupHandler"
  >
    <slot />
  </component>
</template>
