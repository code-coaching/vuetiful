<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { type Ref, computed, inject, onMounted, ref } from 'vue';

interface CardHeaderProps {
  class?: string;
  classSeparator?: string;
}

const props = withDefaults(defineProps<CardHeaderProps>(), {
  class: '',
  classSeparator: '',
});

const headerRef = ref() as Ref<HTMLDivElement>;

const hasImageAsChild = ref(false);

onMounted(() => {
  const children = headerRef.value?.children;
  if (children.length === 0) return false;
  const childrenArray = Array.from(children);
  hasImageAsChild.value = childrenArray.some((child) => child.tagName === 'IMG');
});

const hideSeparator = inject('hideSeparator', false);

let classRootDefault = computed(() => (hasImageAsChild.value ? 'p-0' : 'p-4'));
const classRootMerged = computed(() => tm(classRootDefault.value, props.class));

const classSeperatorDefault = 'opacity-90';
const classSeparatorMerged = computed(() => tm(classSeperatorDefault, props.classSeparator));
</script>

<template>
  <div
    ref="headerRef"
    data-test="vuetiful-card-header-content"
    :class="`vuetiful-card-header ${classRootMerged}`"
  >
    <slot />
  </div>
  <hr
    v-if="!hideSeparator"
    data-test="vuetiful-card-header-separator"
    :class="`vuetiful-card-header-divider ${classSeparatorMerged}`"
  />
</template>
