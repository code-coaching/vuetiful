<script setup lang="ts">
import { Ref, computed, inject, ref } from 'vue';

const headerRef = ref() as Ref<HTMLDivElement>;

const hasImageAsChild = computed(() => {
  const children = headerRef.value?.children;
  if (!children) return false;
  const childrenArray = Array.from(children);
  return childrenArray.some((child) => child.tagName === 'IMG');
});

const hideSeparator = inject('hideSeparator', false);
</script>

<template>
  <div ref="headerRef" data-test='vuetiful-card-header-content' :class="`vuetiful-card-header ${hasImageAsChild ? '' : 'p-4'}`">
    <slot />
  </div>
  <hr v-if="!hideSeparator" data-test='vuetiful-card-header-separator' class="opacity-90" />
</template>

<style>
.vuetiful-card-header {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.vuetiful-card-header > * {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
</style>
