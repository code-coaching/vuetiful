<script setup lang="ts">
import {
  VAccordion,
  VAccordionItem,
  VCodeBlock,
  VPreview,
  VTab,
  VTabPanel,
  VTabs,
} from "@code-coaching/vuetiful";

const usage = `<v-accordion>
  <v-accordion-item title="Vuetiful">
    Vuetiful is a component library built with Vue 3 and TailwindCSS.
  </v-accordion-item>
  <v-accordion-item title="Is">
    Vuetiful is a theming solution for Vue 3 applications, including Nuxt.
  </v-accordion-item>
  <v-accordion-item title="Beautiful"> Vuetiful Is Beautiful.</v-accordion-item>
</v-accordion>`;

const faqs = [
  {
    question: "What is Vuetiful?",
    answer: "Vuetiful is a component library built with Vue 3 and TailwindCSS.",
  },
  {
    question:
      "Is Vuetiful a theming solution for Vue 3 applications, including Nuxt?",
    answer: "Yes.",
  },
];

const faqScript = `const faqs = [
  {
    question: 'What is Vuetiful?',
    answer: 'Vuetiful is a component library built with Vue 3 and TailwindCSS.',
  },
  {
    question: 'Is Vuetiful a theming solution for Vue 3 applications, including Nuxt?',
    answer: 'Yes.',
  },
];`;

const customTemplate = `<v-accordion
  class-question="hover:border-secondary-700-300 bg-secondary-300-700"
  class-answer="bg-secondary-100-900"
>
  <v-accordion-item
    v-for="(faq, index) in faqs"
    :key="index"
    :title="faq.question"
  >
    {{ faq.answer }}
    <template #open-item>open</template>
    <template #close-item>close</template>
  </v-accordion-item>
</v-accordion>`;
</script>

<template>
  <h1 class="h1">VAccordion</h1>
  <section class="section">
    <v-code-block
      language="ts"
      :code="`import { VAccordion, VAccordionItem } from '@code-coaching/vuetiful';`"
    />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template #tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-accordion>
              <v-accordion-item title="Vuetiful">
                Vuetiful is a component library built with Vue 3 and
                TailwindCSS.
              </v-accordion-item>
              <v-accordion-item title="Is">
                Vuetiful is a theming solution for Vue 3 applications, including
                Nuxt.
              </v-accordion-item>
              <v-accordion-item title="Beautiful">
                Vuetiful Is Beautiful.
              </v-accordion-item>
            </v-accordion>
          </template>
          <template #source>
            <v-code-block language="html" :code="usage" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Accessibility</h2>
      <section class="section">
        <p>
          <kbd class="kbd">Tab</kbd> and <kbd class="kbd">Shift + Tab</kbd>:
          Move focus onto and away from the accordion item.
        </p>
        <p>
          <kbd class="kbd">Space</kbd> and <kbd class="kbd">Enter</kbd>: Toggle
          open/close the accordion item.
        </p>
      </section>

      <h2 class="h2">Customization</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-accordion
              class-question="hover:border-secondary-700-300 bg-secondary-300-700"
              class-answer="bg-secondary-100-900"
            >
              <v-accordion-item
                v-for="(faq, index) in faqs"
                :key="index"
                :title="faq.question"
              >
                {{ faq.answer }}
                <template #open-item>open</template>
                <template #close-item>close</template>
              </v-accordion-item>
            </v-accordion>
          </template>
          <template #source>
            <v-code-block class="mb-2" language="ts" :code="faqScript" />
            <v-code-block class="mb-2" language="html" :code="customTemplate" />
            <p>
              <code class="code">class-question</code> will be appended to the
              <code class="code">class</code> property of each invidivual tab's
              question. This can be one or multiple classes. This can be both
              normal CSS classes or Tailwind classes.
            </p>
            <p>
              <code class="code">class-answer</code> will be appended to the
              <code class="code">class</code> property of each invidivual tab's
              answer. This can be one or multiple classes. This can be both
              normal CSS classes or Tailwind classes.
            </p>
            <p>
              <code class="code">open-item</code> and
              <code class="code">close-item</code> are slots that can be used to
              customize the open and close content. These slots are optional. By
              default, the open slot will display a plus icon and the close slot
              will display a minus icon.
            </p>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
