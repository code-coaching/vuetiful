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
        <!-- https://fontawesome.com/icons/plus?f=classic&s=solid -->
        <svg
          class="vuetiful-accordion-item-icon-plus my-1 h-4 min-h-[1rem] w-4 min-w-[1rem] fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          />
        </svg>
      </slot>
      <slot v-if="open" name="close-item">
        <!-- https://fontawesome.com/icons/minus?f=classic&s=solid -->
        <svg
          class="vuetiful-accordion-item-icon-minus my-1 h-4 min-h-[1rem] w-4 min-w-[1rem] fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
          />
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
