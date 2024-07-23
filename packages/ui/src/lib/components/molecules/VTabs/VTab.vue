<script setup lang="ts">
import { useSettings } from '@/lib';
import { unstyledProp } from '@/lib/props';
import { Tab } from '@headlessui/vue';
import { computed, inject } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  unstyled: unstyledProp,
});

const activeClass = inject('active') as string;
const hoverClass = inject('hover') as string;
const vertical = inject('vertical') as boolean;
const classTab = inject('classTab') as string;
const hideSeparator = inject('hideSeparator') as boolean;
const classTabSeparator = inject('classTabSeparator') as string;

const tabClass = computed(() => {
  return classTab ? classTab : 'w-full px-4 py-2';
});

const { settings } = useSettings();
const isUnstyled = settings.global.unstyled || settings.components.tab.unstyled || props.unstyled;
</script>

<template>
  <Tab
    :disabled="disabled"
    v-slot="{ selected }"
    class="vuetiful-tab"
    :class="`flex ${vertical ? 'flex-row justify-between' : 'flex-col'}`"
  >
    <div
      data-test="slot-container"
      class="vuetiful-tab-content"
      :class="`text-base ${isUnstyled ? '' : 'rounded'} ${selected ? activeClass : hoverClass} ${tabClass}`"
    >
      <slot />
    </div>
    <div
      v-show="selected && !hideSeparator"
      class="vuetiful-tab-separator"
      :class="`z-10 ${vertical ? 'mr-[-2px] h-full border-r-2' : 'mb-[-2px] w-full border-b-2'} ${classTabSeparator}`"
    ></div>
  </Tab>
</template>
