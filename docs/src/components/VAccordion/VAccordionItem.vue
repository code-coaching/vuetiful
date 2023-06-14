<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { inject } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const active = inject('active');
const hover = inject('hover');
</script>
<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton
      as="div"
      class="vuetiful-accordion-item-button flex items-center justify-between p-4 rounded-container-token hover:cursor-pointer"
      :class="`${active} ${hover} ${open ? '!rounded-bl-none !rounded-br-none' : ''}`"
    >
      <span class="font-bold">{{ title }}</span>
      <slot v-if="!open" name="open-item">
        <!-- https://fontawesome.com/icons/plus?f=classic&s=solid -->
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          />
        </svg>
      </slot>
      <slot v-if="open" name="close-item">
        <!-- https://fontawesome.com/icons/minus?f=classic&s=solid -->
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </slot>
      <i v-if="!open" class="fa-solid fa-plus fa-xl"></i>
      <i v-if="open" class="fa-solid fa-minus fa-xl"></i>
    </DisclosureButton>
    <DisclosurePanel
      class="vuetiful-accordion-item-panel p-4 pt-0 rounded-container-token"
      :class="`${open ? `${active} !rounded-tl-none !rounded-tr-none` : ''}`"
    >
      <slot></slot>
    </DisclosurePanel>
  </Disclosure>
</template>
