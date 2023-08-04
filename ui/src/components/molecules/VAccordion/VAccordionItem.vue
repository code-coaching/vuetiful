<script setup lang="ts">
import { useSettings } from "@/services";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { inject } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  unstyled: {
    type: Boolean,
    default: false,
  },
});

const classQuestion = inject("classQuestion");
const classAnswer = inject("classAnswer");

const { settings } = useSettings();
const isUnstyled =
  settings.global.unstyled || settings.components.accordionItem.unstyled || props.unstyled;
</script>

<template>
  <Disclosure class="vuetiful-accordion-item" as="div" v-slot="{ open }">
    <DisclosureButton
      :class="`${isUnstyled ? '' : `${open ? '!rounded-bl-none !rounded-br-none' : ''}`}
      ${
        isUnstyled
          ? ''
          : 'items-center justify-between p-4 py-2 rounded-container-token hover:cursor-pointer'
      }
      ${classQuestion}`"
      class="vuetiful-accordion-item-button flex w-full"
    >
      <span class="vuetiful-accordion-title">{{ title }}</span>
      <slot v-if="!open" name="open-item">
        <!-- https://fontawesome.com/icons/plus?f=classic&s=solid -->
        <svg
          class="vuetiful-accordion-item-icon-plus icon"
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
          class="vuetiful-accordion-item-icon-minus icon"
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
      :class="`${open ? `${isUnstyled ? '' : '!rounded-tl-none !rounded-tr-none'}` : ''} ${
        isUnstyled ? '' : 'p-4 py-2 rounded-container-token'
      } ${classAnswer}`"
    >
      <slot></slot>
    </DisclosurePanel>
  </Disclosure>
</template>

<style scoped>
.icon {
  @apply my-1 h-4 min-h-[1rem] w-4 min-w-[1rem] fill-current;
}
</style>
