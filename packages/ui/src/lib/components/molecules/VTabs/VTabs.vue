<script setup lang="ts">
import { tm } from '@/lib/utils';
import { TabGroup, TabList, TabPanels } from '@headlessui/vue';
import { computed, provide } from 'vue';

interface TabsProps {
  class?: string;
  classPanels?: string;
  classTabs?: string;
  classTab?: string;
  classTabActive?: string;
  classTabHover?: string;
  classSeparator?: string;
  classTabSeparator?: string;
  hideSeparator?: boolean;
  vertical?: boolean;
  defaultIndex?: number;
}

const props = withDefaults(defineProps<TabsProps>(), {
  defaultIndex: 0,
});

const classTabHoverDefault = 'border border-transparent hover:border-surface-950-50';
const classTabHoverMerged = computed(() => tm(classTabHoverDefault, props.classTabHover));
const classSeparatorDefault = 'border-surface-900-100';
const classSeparatorMerged = computed(() => tm(classSeparatorDefault, props.classSeparator));
const classTabSeparatorDefault = 'border-primary-400';
const classTabSeparatorMerged = computed(() => tm(classTabSeparatorDefault, props.classTabSeparator));
const classTabActiveDefault = computed(() => props.vertical ? 'border-l-2 border-y-2 rounded-tr-none rounded-br-none border-surface-950-50' : 'border-t-2 border-x-2 rounded-bl-none rounded-br-none border-surface-950-50');
const classTabActiveMerged = computed(() => tm(classTabActiveDefault.value, props.classTabActive));

provide('active', classTabActiveMerged.value);
provide('hover', classTabHoverMerged.value);
provide('vertical', props.vertical);
provide('classTab', props.classTab);
provide('hideSeparator', classSeparatorMerged.value);
provide('classTabSeparator', classTabSeparatorMerged.value);

const classRootDefault = computed(() => props.vertical ? 'flex' : '')
const classRootMerged = computed(() => tm(classRootDefault.value, props.class))

const classTabListHorizontalVertical = computed(() => props.vertical ? 'flex flex-col rounded-br-none rounded-tr-none' : 'flex rounded-bl-none rounded-br-none');
const classTabListDefault = computed(() => `rounded-container ${classTabListHorizontalVertical.value}`);
const classTabListMerged = computed(() => tm(classTabListDefault.value, props.classTabs));

const classTabPanelsHorizontalVertical = computed(() => props.vertical ? 'rounded-bl-none rounded-tl-none' : 'rounded-tl-none rounded-tr-none');
const classTabPanelsDefault = computed(() => `p-4 rounded-container ${classTabPanelsHorizontalVertical.value}`);
const classPanelsMerged = computed(() => tm(classTabPanelsDefault.value, props.classPanels));
</script>

<template>
  <TabGroup
    as="div"
    :vertical="vertical"
    :defaultIndex="defaultIndex"
    class="vuetiful-tab-group"
    :class="classRootMerged"
  >
    <TabList
      data-test="vuetiful-tab-list"
      :class="`vuetiful-tab-list ${classTabListMerged}`"
    >
      <slot name="tabs" />
    </TabList>
    <div
      data-test="vuetiful-tab-separator"
      v-if="!hideSeparator"
      :class="`border-[1px] ${classSeparatorMerged}`"
    ></div>
    <TabPanels
      data-test="vuetiful-tab-panels"
      :class="`vuetiful-tab-panels ${classPanelsMerged}`"
    >
      <slot />
    </TabPanels>
  </TabGroup>
</template>
