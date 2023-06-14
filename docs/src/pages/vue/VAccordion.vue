<script setup lang="ts">
import { VCodeBlock, VPreview } from '@code-coaching/vuetiful';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import VAccordion from 'src/components/VAccordion/VAccordion.vue';
import VAccordionItem from 'src/components/VAccordion/VAccordionItem.vue';
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VAccordion</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VAccordion, VAccordionItem } from '@code-coaching/vuetiful`" />
    </section>

    <div class="w-full px-4 pt-16">
      <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span>What is your refund policy?</span>
            <svg v-if="!open" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
              />
            </svg>

            <svg v-if="open" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
            If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full,
            no questions asked.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" class="mt-2" v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span>Do you offer technical support?</span>
            <svg v-if="!open" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
              />
            </svg>

            <svg v-if="open" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500"> No. </DisclosurePanel>
        </Disclosure>
      </div>
    </div>

    <h2>Usage</h2>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-accordion>
            <v-accordion-item title="Vuetiful">
              Vuetiful is a component library built with Vue 3 and TailwindCSS.
            </v-accordion-item>
            <v-accordion-item title="Is">
              Vuetiful is a theming solution for Vue 3 applications, including Quasar applications.
            </v-accordion-item>
            <v-accordion-item title="Beautiful"> Vuetiful Is Beautiful. </v-accordion-item>
          </v-accordion>
        </template>
        <template v-slot:source>
          <!-- <v-code-block class="mb-2" language="html" :code="usage" /> -->
        </template>
      </v-preview>
    </section>
  </div>
</template>

<style>
.custom-class {
  fill: #ec4899;
}
</style>
