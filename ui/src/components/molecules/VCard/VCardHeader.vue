<script setup lang="ts">
import { unstyledProp } from "@/props";
import { useSettings } from "@/services";
import { Ref, computed, inject, ref, useAttrs } from "vue";

const props = defineProps({
  classSeparator: {
    type: String as () => string,
    default: "opacity-90",
  },
  unstyled: unstyledProp,
});

const headerRef = ref() as Ref<HTMLDivElement>;

const hasImageAsChild = computed(() => {
  const children = headerRef.value?.children;
  if (!children) return false;
  const childrenArray = Array.from(children);
  return childrenArray.some((child) => child.tagName === "IMG");
});

const hideSeparator = inject("hideSeparator", false);

const attrs = useAttrs();
const classAttribute = attrs.class as string;

const { settings } = useSettings();
const isUnstyled =
  settings.global.unstyled || settings.components.cardHeader.unstyled || props.unstyled;
</script>

<template>
  <div
    ref="headerRef"
    data-test="vuetiful-card-header-content"
    :class="`vuetiful-card-header ${hasImageAsChild ? '' : `${isUnstyled ? '' : 'p-4'}`} ${classAttribute}`"
  >
    <slot />
  </div>
  <hr v-if="!hideSeparator" data-test="vuetiful-card-header-separator" class="divider" :class="classSeparator" />
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
