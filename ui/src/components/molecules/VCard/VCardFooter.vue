<script setup lang="ts">
import { inject, useAttrs } from 'vue';
import { unstyledProp } from '@/props';
import { useSettings } from '@/services';

const props = defineProps({
  classSeparator: {
    type: String as () => string,
    default: 'opacity-90',
  },
  unstyled: unstyledProp,
});

const hideSeparator = inject('hideSeparator', false);

const attrs = useAttrs();
const classAttribute = attrs.class as string;

const { settings } = useSettings();
const isUnstyled =
  settings.global.unstyled || settings.components.cardBody.unstyled || props.unstyled;
</script>

<template>
  <hr
    v-if="!hideSeparator"
    data-test="vuetiful-card-footer-separator"
    class="divider"
    :class="classSeparator"
  />
  <div
    data-test="vuetiful-card-footer-content"
    :class="`vuetiful-card-footer ${isUnstyled ? '' : 'p-4'} ${classAttribute}`"
  >
    <slot />
  </div>
</template>
