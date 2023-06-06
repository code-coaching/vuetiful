<script setup lang="ts">
import { TabGroup, TabList, TabPanels, Tab, TabPanel } from '@headlessui/vue';
import { PropType } from 'vue';

defineProps({
  tabs: {
    type: Array as PropType<Array<{ label: string; disabled?: boolean }>>,
    // required: true,
  },
});
</script>

<template>
  <TabGroup vertical>
    <TabList>
      <Tab>a</Tab>
      <Tab>b</Tab>
      <Tab>c</Tab>
      <Tab>d</Tab>
      <!-- <slot name="tabs" /> -->
    </TabList>
    <TabPanels>
      <TabPanel>aaaa</TabPanel>
      <TabPanel>bbbb</TabPanel>
      <TabPanel>cccc</TabPanel>
      <TabPanel>dddd</TabPanel>
    </TabPanels>
  </TabGroup>
</template>
