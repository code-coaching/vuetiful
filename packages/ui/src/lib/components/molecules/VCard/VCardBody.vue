<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { computed } from 'vue';

interface CardBodyProps {
  class?: string;
}

const props = withDefaults(defineProps<CardBodyProps>(), {
  class: '',
});

const classRootDefault = 'p-4';
const classRootMerged = computed(() => tm(classRootDefault, props.class));
</script>
<template>
  <div data-test="vuetiful-card-body-content" :class="`vuetiful-card-body ${classRootMerged}`">
    <slot />
  </div>
</template>
