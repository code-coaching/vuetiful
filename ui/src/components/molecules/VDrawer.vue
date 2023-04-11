<script setup lang="ts">
import type { CssClasses } from "@/index";
import { useDrawer } from "@/services";
import { Ref, computed, onMounted, ref, toRefs, useAttrs } from "vue";

const { drawer, close } = useDrawer();
const attrs = useAttrs();

// #region Props
const props = defineProps({
  position: {
    type: String as () => "left" | "top" | "right" | "bottom",
    default: "left",
  },
  duration: {
    type: Number as () => 150 | 300,
    default: 300,
  },

  // Regions
  regionBackdrop: {
    type: String as () => CssClasses,
    default: "",
  },
  regionDrawer: {
    type: String as () => CssClasses,
    default: "",
  },

  // a11y
  labelledby: {
    type: String,
    default: "",
  },
  describedby: {
    type: String,
    default: "",
  },
});

// prettier-ignore
const { position, duration, regionBackdrop, regionDrawer, labelledby, describedby } = toRefs(props);
// prettier-ignore
const presets = {
	top: { alignment: 'top-0', width: 'w-full', height: 'h-[50%]', rounded: 'rounded-bl-container-token rounded-br-container-token' },
	bottom: { alignment: 'bottom-0', width: 'w-full', height: ' h-[50%]', rounded: 'rounded-tl-container-token rounded-tr-container-token' },
	left: { alignment: 'lef-0', width: 'w-[90%]', height: 'h-full', rounded: 'rounded-tr-container-token rounded-br-container-token' },
	right: { alignment: 'right-0', width: 'w-[90%]', height: 'h-full', rounded: 'rounded-tl-container-token rounded-bl-container-token' }
};
const preset = computed(() => presets[position.value]);
// #endregion

// #region template refs
const elemBackdrop: Ref<HTMLElement> = ref() as Ref<HTMLElement>;
const elemDrawer: Ref<HTMLElement> = ref() as Ref<HTMLElement>;
// #endregion

// #region Event Handlers
const onBackdropInteraction = (event: Event) => {
  if (event.target === elemBackdrop.value) close();
};

const onKeydownWindow = (event: KeyboardEvent) => {
  if (event.code === "Escape") close();
};
onMounted(() => {
  window.addEventListener("keydown", onKeydownWindow);
});
// #endregion
</script>

<template>
  <transition :name="`slide-${position}-${duration}`">
    <div
      v-if="drawer.open"
      ref="elemDrawer"
      :class="`drawer absolute overflow-y-auto shadow-xl transition-transform bg-surface-100-800-token ${preset.width} ${preset.height} ${preset.rounded} ${preset.alignment} z-50 ${regionDrawer}`"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="labelledby"
      :aria-describedby="describedby"
    >
      <slot />
    </div>
  </transition>
  <transition :name="`fade-${duration}`">
    <div
      v-if="drawer.open"
      ref="elemBackdrop"
      :class="`drawer-backdrop backdrop-blur-xs fixed top-0 left-0 right-0 bottom-0 flex bg-surface-backdrop-token ${regionBackdrop} z-40 ${
        attrs.class ?? ''
      }`"
      @mousedown="onBackdropInteraction"
      @touchstart="onBackdropInteraction"
    ></div>
  </transition>
</template>
