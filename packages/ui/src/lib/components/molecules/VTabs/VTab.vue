<script setup lang="ts">
import { tm } from '@/lib/utils';
import { Tab } from '@headlessui/vue';
import { computed, inject } from 'vue';

interface TabProps {
  class?: string;
  classActive?: string;
  classHover?: string;
  classTab?: string;
  classSeparator?: string;
  disabled?: boolean;
}
const props = withDefaults(defineProps<TabProps>(), {
  class: '',
  classActive: '',
  classHover: '',
  classTab: '',
  classSeparator: '',
  disabled: false,
});

const activeClass = inject('active') as string || '';
const hoverClass = inject('hover') as string;
const vertical = inject('vertical') as boolean;
const tabClass = inject('classTab') as string || '';
const hideSeparator = inject('hideSeparator') as boolean;
const tabSeparatorClass = inject('classTabSeparator') as string;

const classRootHorizontalVertical = computed(() =>
  vertical ? 'flex-row justify-between' : 'flex-col',
);
const classRootDefault = computed(() => `flex ${classRootHorizontalVertical.value}`);
const classRootMerged = computed(() => `${classRootDefault.value} ${props.class}`);

const classTabDefault = 'rounded text-base w-full px-4 py-2';
const classTabMerged = computed(() => tm(classTabDefault, tabClass, props.classTab));
const classTabActiveMerged = computed(() => tm(activeClass, props.classActive));
const classTabHoverMerged = computed(() => tm(hoverClass, props.classHover));

const classSeparatorDefault = 'z-0';
const classSeparatorHorizontalVertical = computed(() =>
  vertical ? 'mr-[-2px] h-full border-r-2' : 'mb-[-2px] w-full border-b-2',
);
const classSeparatorMerged = computed(
  () =>
    `${classSeparatorDefault} ${classSeparatorHorizontalVertical.value} ${tabSeparatorClass} ${props.classSeparator}`,
);
</script>

<template>
  <Tab
    :disabled="disabled"
    v-slot="{ selected }"
    class="vuetiful-tab"
    :class="`${classRootMerged}`"
  >
    <div
      data-test="slot-container"
      class="vuetiful-tab-content"
      :class="`${selected ? classTabActiveMerged : classTabHoverMerged} ${classTabMerged}`"
    >
      <slot />
    </div>
    <div
      v-show="selected && !hideSeparator"
      class="vuetiful-tab-separator"
      :class="`${classSeparatorMerged}`"
    ></div>
  </Tab>
</template>
