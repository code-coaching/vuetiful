<script setup lang="ts">
import { computed } from 'vue';
import { tm } from '..';
import { useDarkMode } from './dark-mode.service';

const { applyMode, chosenMode, MODE } = useDarkMode();

interface LightSwitchProps {
  class?: string;
  classThumb?: string;
  classIcon?: string;
}
const props = defineProps<LightSwitchProps>();

const classRootDefault =
  'bg-surface-100-900 w-12 h-6 rounded cursor-pointer transition-all duration-150 flex items-center';
const classRootMerged = computed(() => tm(classRootDefault, props.class));

const classThumbDefault =
  'bg-surface-800-200 text-surface-200-800 aspect-square scale-[0.8] flex justify-center items-center transition-all duration-150 h-6 rounded';
const classThumbPosition = computed(() =>
  chosenMode.value === MODE.LIGHT ? 'translate-x-[100%]' : '',
);
const classThumbMerged = computed(() =>
  tm(classThumbDefault, classThumbPosition.value, props.classThumb),
);

const classIconDefault = 'w-[70%] aspect-square text-surface-100-900';
const classIconMerged = computed(() => tm(classIconDefault, props.classIcon));

const svgPath = {
  sun: 'M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z',
  moon: 'M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z',
};

const onToggleHandler = () => {
  const toggle = chosenMode.value === MODE.LIGHT ? MODE.DARK : MODE.LIGHT;
  applyMode(toggle);
};

type OnKeyDownEvent = KeyboardEvent & {
  currentTarget: EventTarget & HTMLDivElement;
};
const onKeyDown = (event: KeyboardEvent) => {
  if (['Enter', 'Space'].includes(event.code)) {
    event.preventDefault();
    (event as OnKeyDownEvent).currentTarget.click();
  }
};
</script>

<template>
  <div
    :class="`vuetiful-lightswitch-track ${classRootMerged}`"
    @click="onToggleHandler"
    @keydown="onKeyDown"
    role="switch"
    aria-label="Light Switch"
    :aria-checked="chosenMode === MODE.LIGHT"
    :title="`Toggle ${chosenMode === MODE.DARK ? 'Dark' : 'Light'} Mode`"
    tabindex="0"
  >
    <div :class="`lightswitch-thumb ${classThumbMerged}`">
      <svg
        :class="`lightswitch-icon ${classIconMerged}`"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path fill="currentColor" :d="chosenMode === MODE.LIGHT ? svgPath.sun : svgPath.moon" />
      </svg>
    </div>
  </div>
</template>
