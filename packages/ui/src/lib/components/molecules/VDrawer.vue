<script setup lang="ts">
import { useDrawer } from '@/lib';
import { type Ref, computed, onMounted, ref, watch } from 'vue';
import { withVuetiful } from '../../utils/tailwind-merge';
const { drawer, close } = useDrawer();

import { extendTailwindMerge } from 'tailwind-merge';
/**
 * Normally we would just import `tm` from '@/lib'.
 * For some reason this doesn't work for VDrawer when using multiple calls to `tm`
 */
const tm = extendTailwindMerge(withVuetiful);

interface DrawerProps {
  classBackdrop: string;
  classDrawer: string;
  labelledby: string;
  describedby: string;
}

const props = withDefaults(defineProps<DrawerProps>(), {
  classBackdrop: '',
  classDrawer: '',
  labelledby: '',
  describedby: '',
});

const presets = {
  top: 'top-0 w-full h-[50%] rounded-bl-container rounded-br-container',
  bottom: 'bottom-0 w-full h-[50%] rounded-tl-container rounded-tr-container',
  left: 'lef-0 w-[90%] h-full rounded-tr-container rounded-br-container',
  right: 'right-0 w-[90%] h-full rounded-tl-container rounded-bl-container',
};
const preset = computed(() => {
  const position = drawer.position || 'left';
  return presets[position];
});

const elemBackdrop: Ref<HTMLElement> = ref() as Ref<HTMLElement>;

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

const classDrawerDefault = computed(
  () =>
    `fixed overflow-y-auto shadow-xl transition-transform bg-surface-100-900 z-50 ${preset.value}`,
);
const classDrawerMerged = computed(() => tm(classDrawerDefault.value, props.classDrawer));

const classBackdropDefault =
  'fixed bottom-0 left-0 right-0 top-0 z-40 flex backdrop-blur-sm cursor-pointer';
const classBackdropMerged = computed(() => tm(classBackdropDefault, props.classBackdrop));
</script>

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
      :class="`drawer ${classDrawerMerged}`"
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
      :class="`drawer-backdrop ${classBackdropMerged}`"
      @mousedown="onBackdropInteraction"
      @touchstart="onBackdropInteraction"
    ></div>
  </transition>
</template>
