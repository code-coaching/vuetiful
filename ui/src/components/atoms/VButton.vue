<template>
  <button :class="`cc-button p-2 ${classes}`">
    <template v-if="msg">{{ msg }}</template>
    <slot />
  </button>
</template>

<script lang="ts">
import { CssClasses, useDarkMode } from "@/index";
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    bgLight: {
      type: String as () => CssClasses,
      default: "bg-primary-50",
    },
    bgDark: {
      type: String as () => CssClasses,
      default: "bg-primary-900",
    },
    textOnLight: {
      type: String as () => CssClasses,
      default: "text-primary-900",
    },
    textOnDark: {
      type: String as () => CssClasses,
      default: "text-primary-50",
    },
    width: {
      type: String as () => CssClasses,
      default: "w-fit",
    },
    height: {
      type: String as () => CssClasses,
      default: "h-fit",
    },
    ring: {
      type: String as () => CssClasses,
      default: "ring-[1px] ring-primary-500/30",
    },
    rounded: {
      type: String as () => CssClasses,
      default: "rounded-token",
    },

    msg: {
      type: String,
    },
  },
  setup(props, { attrs }) {
    const { currentMode, MODE } = useDarkMode();
    const cTransition = `transition-all duration-[200ms]`;

    const background = computed(() => {
      return currentMode.value === MODE.LIGHT ? props.bgLight : props.bgDark;
    });
    const text = computed(() => {
      return currentMode.value === MODE.LIGHT ? props.textOnLight : props.textOnDark;
    });

    const classes = computed(() => {
      return `${cTransition} 
      ${background.value} 
      ${text.value} 
      ${props.width} 
      ${props.height} 
      ${props.ring} 
      ${props.rounded} 
      ${attrs.class ?? ""}`;
    });

    return {
      classes,
    };
  },
});
</script>

<style scoped>
.cc-button:hover {
  opacity: 0.8;
}
</style>
