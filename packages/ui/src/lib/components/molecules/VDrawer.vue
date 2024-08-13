<script setup lang="ts">
import type { CssClasses } from '@/lib';
import { useDrawer } from '@/lib';
import { type Ref, computed, onMounted, ref, toRefs, watch } from 'vue';
const { drawer, close } = useDrawer();

const props = defineProps({
  // Regions
  regionBackdrop: {
    type: String as () => CssClasses,
    default: '',
  },
  regionDrawer: {
    type: String as () => CssClasses,
    default: '',
  },

  // a11y
  labelledby: {
    type: String,
    default: '',
  },
  describedby: {
    type: String,
    default: '',
  },
});

const { regionBackdrop, regionDrawer, labelledby, describedby } = toRefs(props);
// prettier-ignore
const presets = {
	top: { alignment: 'top-0', width: 'w-full', height: 'h-[50%]', rounded: 'rounded-bl-container rounded-br-container' },
	bottom: { alignment: 'bottom-0', width: 'w-full', height: ' h-[50%]', rounded: 'rounded-tl-container rounded-tr-container' },
	left: { alignment: 'lef-0', width: 'w-[90%]', height: 'h-full', rounded: 'rounded-tr-container rounded-br-container' },
	right: { alignment: 'right-0', width: 'w-[90%]', height: 'h-full', rounded: 'rounded-tl-container rounded-bl-container' }
};
const preset = computed(() => {
  const position = drawer.position || 'left';
  return presets[position];
});

const elemBackdrop: Ref<HTMLElement> = ref() as Ref<HTMLElement>;
const elemDrawer: Ref<HTMLElement> = ref() as Ref<HTMLElement>;

const onBackdropInteraction = (event: Event) => {
  if (event.target === elemBackdrop.value) close();
};

const onKeydownWindow = (event: KeyboardEvent) => {
  if (event.code === 'Escape') close();
};

const enterFromClass = ref('transform-[translateY(-100%)]');
const enterToClass = ref('transform-[translateY(0)]');
const leaveFromClass = ref('transform-[translateY(0)]');
const leaveToClass = ref('transform-[translateY(-100%)]');
onMounted(() => {
  window.addEventListener('keydown', onKeydownWindow);
});

watch(
  () => drawer.position,
  () => {
    switch (drawer.position) {
      case 'top':
        enterFromClass.value = 'translate-y-[-100%]';
        enterToClass.value = 'translate-y-0';
        leaveFromClass.value = 'translate-y-0';
        leaveToClass.value = 'translate-y-[-100%]';
        break;
      case 'bottom':
        enterFromClass.value = 'translate-y-full';
        enterToClass.value = 'translate-y-0';
        leaveFromClass.value = 'translate-y-0';
        leaveToClass.value = 'translate-y-full';
        break;
      case 'left':
        enterFromClass.value = 'translate-x-[-100%]';
        enterToClass.value = 'translate-x-0';
        leaveFromClass.value = 'translate-x-0';
        leaveToClass.value = 'translate-x-[-100%]';
        break;
      case 'right':
        enterFromClass.value = 'translate-x-full';
        enterToClass.value = 'translate-x-0';
        leaveFromClass.value = 'translate-x-0';
        leaveToClass.value = 'translate-x-full';
        break;
    }
  },
  { immediate: true },
);
</script>

<!-- TODO - api -->
<template>
  <transition
    enter-active-class="transition-all"
    :enter-from-class="enterFromClass"
    :enter-to-class="enterToClass"
    leave-active-class="transition-all"
    :leave-from-class="leaveFromClass"
    :leave-to-class="leaveToClass"
  >
    <div
      v-if="drawer.open"
      ref="elemDrawer"
      :class="`drawer fixed overflow-y-auto shadow-xl transition-transform bg-surface-100-900 ${preset.width} ${preset.height} ${preset.rounded} ${preset.alignment} z-50 ${regionDrawer}`"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="labelledby"
      :aria-describedby="describedby"
    >
      <slot />
    </div>
  </transition>
  <transition
    enter-active-class="transition-opacity"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="drawer.open"
      ref="elemBackdrop"
      :class="`drawer-backdrop bg-surface-backdrop fixed bottom-0 left-0 right-0 top-0 z-40 flex backdrop-blur-sm ${regionBackdrop}`"
      @mousedown="onBackdropInteraction"
      @touchstart="onBackdropInteraction"
    ></div>
  </transition>
</template>
