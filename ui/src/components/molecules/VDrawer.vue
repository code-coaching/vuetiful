<script setup lang="ts">
import type { CssClasses } from "@/index";
import { useDrawer } from "@/services";
import { Ref, computed, onMounted, ref, toRefs } from "vue";

const { drawer, close } = useDrawer();

// #region Props
const props = defineProps({
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

const { regionBackdrop, regionDrawer, labelledby, describedby } = toRefs(props);
// prettier-ignore
const presets = {
	top: { alignment: 'top-0', width: 'w-full', height: 'h-[50%]', rounded: 'rounded-bl-container-token rounded-br-container-token' },
	bottom: { alignment: 'bottom-0', width: 'w-full', height: ' h-[50%]', rounded: 'rounded-tl-container-token rounded-tr-container-token' },
	left: { alignment: 'lef-0', width: 'w-[90%]', height: 'h-full', rounded: 'rounded-tr-container-token rounded-br-container-token' },
	right: { alignment: 'right-0', width: 'w-[90%]', height: 'h-full', rounded: 'rounded-tl-container-token rounded-bl-container-token' }
};
const preset = computed(() => {
  const position = drawer.position || "left";
  return presets[position];
});
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
  <transition :name="`slide-${drawer.position}-${drawer.duration}`">
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
  <transition :name="`fade-${drawer.duration}`">
    <div
      v-if="drawer.open"
      ref="elemBackdrop"
      :class="`drawer-backdrop backdrop-blur-xs fixed bottom-0 left-0 right-0 top-0 flex bg-surface-backdrop-token z-40 ${regionBackdrop}`"
      @mousedown="onBackdropInteraction"
      @touchstart="onBackdropInteraction"
    ></div>
  </transition>
</template>
