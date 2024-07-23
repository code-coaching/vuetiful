<script setup lang="ts">
import { useSettings } from '@/lib';
import { ListboxButton } from '@headlessui/vue';
import { inject } from 'vue';
defineProps({
  as: {
    type: String,
    default: 'button',
  },
  hideIcon: {
    type: Boolean,
    default: false,
  },
});

const unstyled = inject('unstyled') as boolean;

const { settings } = useSettings();
const isUnstyled = settings.global.unstyled || settings.components.listbox.unstyled || unstyled;
</script>

<template>
  <ListboxButton
    v-slot="{ open }"
    :as="as"
    :class="`vuetiful-listbox-button ${
      isUnstyled ? 'flex' : 'preset-filled btn flex w-full justify-between active:scale-[100%]'
    }`"
  >
    <slot />
    <span v-if="!hideIcon">
      <slot v-if="!open" name="open-icon">
        <!-- https://fontawesome.com/icons/chevron-down?f=classic&s=solid -->
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          />
        </svg>
      </slot>
      <slot v-if="open" name="close-icon">
        <!-- https://fontawesome.com/icons/chevron-up?f=classic&s=solid -->
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
          />
        </svg>
      </slot>
    </span>
  </ListboxButton>
</template>

<style scoped>
.icon {
  @apply my-1 h-4 w-4 fill-current;
}
</style>
