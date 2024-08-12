<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { ListboxOptions } from '@headlessui/vue';
import { computed, inject } from 'vue';

interface ListboxItemsProps {
  class?: string;
}
const props = defineProps<ListboxItemsProps>();

const horizontal = inject('horizontal') as boolean;

const classRootDefault = 'z-10 rounded-container gap-1 p-4 flex preset-filled-surface-200-800';
const classRootMerged = computed(() => tm(classRootDefault, props.class));
</script>

<template>
  <ListboxOptions
    :class="`${horizontal ? 'flex-row' : 'flex-col'} ${classRootMerged}`"
    data-test="listbox-items"
  >
    <slot />
  </ListboxOptions>
</template>
