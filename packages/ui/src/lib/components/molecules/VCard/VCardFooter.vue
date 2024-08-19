<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { computed, inject } from 'vue';

interface CardFooterProps {
  class?: string;
  classSeparator?: string;
}

const props = withDefaults(defineProps<CardFooterProps>(), {
  class: '',
  classSeparator: '',
});

const hideSeparator = inject('hideSeparator', false);

const classRootDefault = 'p-4';
const classRootMerged = computed(() => tm(classRootDefault, props.class));

const classSeparatorDefault = 'opacity-90';
const classSeparatorMerged = computed(() => tm(classSeparatorDefault, props.classSeparator));
</script>

<template>
  <hr
    v-if="!hideSeparator"
    data-test="vuetiful-card-footer-separator"
    class="vuetiful-card-footer-divider"
    :class="classSeparatorMerged"
  />
  <div data-test="vuetiful-card-footer-content" :class="`vuetiful-card-footer ${classRootMerged}`">
    <slot />
  </div>
</template>
