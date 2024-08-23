<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { ListboxButton } from '@headlessui/vue';
import { computed } from 'vue';

interface ListboxButtonProps {
  class?: string;
  hideIcon?: boolean;
}

const props = defineProps<ListboxButtonProps>();

const classRootDefault =
  'bg-surface-800-200 text-surace-50-950 btn flex w-full justify-between active:scale-[100%]';
const classRootMerged = computed(() => tm(classRootDefault, props.class));
</script>

<template>
  <ListboxButton
    v-slot="{ open }"
    as="button"
    :class="`vuetiful-listbox-button ${classRootMerged}`"
  >
    <slot />
    <span v-if="!hideIcon">
      <slot v-if="!open" name="open-icon">
        <!-- https://lucide.dev/icons/chevron-down -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-down my-1 h-5 w-5"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </slot>
      <slot v-if="open" name="close-icon">
        <!-- https://lucide.dev/icons/chevron-up -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-up my-1 h-5 w-5"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </slot>
    </span>
  </ListboxButton>
</template>
