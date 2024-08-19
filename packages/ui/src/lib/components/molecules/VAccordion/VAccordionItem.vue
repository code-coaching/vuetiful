<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { computed, inject } from 'vue';

interface AccordionItemProps {
  class?: string;
  title: string;
}

const props = withDefaults(defineProps<AccordionItemProps>(), {
  class: '',
});

const classQuestionDefault =
  'items-center justify-between rounded-container p-4 py-2 hover:cursor-pointer';
const classQuestion = inject('classQuestion') as string;
const classQuestionMerged = computed(() => tm(classQuestionDefault, classQuestion, props.class));

const classAnswerDefault = 'rounded-container p-4 py-2';
const classAnswer = inject('classAnswer') as string;
const classAnswerMerged = computed(() => tm(classAnswerDefault, classAnswer, props.class));
</script>

<template>
  <Disclosure class="vuetiful-accordion-item" as="div" v-slot="{ open }">
    <DisclosureButton
      :class="`${open ? 'rounded-bl-none rounded-br-none' : ''} ${classQuestionMerged}`"
      class="vuetiful-accordion-item-button flex w-full"
    >
      <span class="vuetiful-accordion-title">{{ title }}</span>
      <slot v-if="!open" name="open-item">
        <!-- https://lucide.dev/icons/plus -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-plus my-1 h-5 min-h-[1rem] w-5 min-w-[1rem]"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </slot>
      <slot v-if="open" name="close-item">
        <!-- https://lucide.dev/icons/minus -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-minus my-1 h-5 min-h-[1rem] w-5 min-w-[1rem]"
        >
          <path d="M5 12h14" />
        </svg>
      </slot>
    </DisclosureButton>
    <DisclosurePanel
      class="vuetiful-accordion-item-panel"
      :class="`${open ? `rounded-tl-none rounded-tr-none` : ''} ${classAnswerMerged}`"
    >
      <slot></slot>
    </DisclosurePanel>
  </Disclosure>
</template>
