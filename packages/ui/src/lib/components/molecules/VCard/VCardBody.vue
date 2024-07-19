<script setup lang="ts">
import { useSettings } from '@/lib';
import { unstyledProp } from '@/lib/props';

const props = defineProps({
  unstyled: unstyledProp,
});

const { settings } = useSettings();
const isUnstyled =
  settings.global.unstyled || settings.components.cardBody.unstyled || props.unstyled;
</script>
<template>
  <div
    data-test="vuetiful-card-body-content"
    :class="`vuetiful-card-body ${isUnstyled ? '' : 'p-4'}`"
  >
    <slot />
  </div>
</template>
