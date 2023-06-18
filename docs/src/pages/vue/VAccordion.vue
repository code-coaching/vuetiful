<script setup lang="ts">
import { VCodeBlock, VPreview, VAccordion, VAccordionItem } from '@code-coaching/vuetiful';

const usage = `<v-accordion>
  <v-accordion-item title="Vuetiful">
    Vuetiful is a component library built with Vue 3 and TailwindCSS.
  </v-accordion-item>
  <v-accordion-item title="Is">
    Vuetiful is a theming solution for Vue 3 applications, including Quasar applications.
  </v-accordion-item>
  <v-accordion-item title="Beautiful"> Vuetiful Is Beautiful. </v-accordion-item>
</v-accordion>`;

const faqs = [
  {
    question: 'What is Vuetiful?',
    answer: 'Vuetiful is a component library built with Vue 3 and TailwindCSS.',
  },
  {
    question: 'Is Vuetiful a theming solution for Vue 3 applications, including Quasar applications?',
    answer: 'Yes.',
  },
];

const faqTemplate = `<v-accordion hover="hover:variant-ghost-primary" background="bg-secondary-100-800-token">
  <v-accordion-item v-for="(faq, index) in faqs" :key="index" :title="faq.question">
    {{ faq.answer }}
    <template v-slot:open-item>open</template>
    <template v-slot:close-item>close</template>
  </v-accordion-item>
</v-accordion>`;

const faqScript = `const faqs = [
  {
    question: 'What is Vuetiful?',
    answer: 'Vuetiful is a component library built with Vue 3 and TailwindCSS.',
  },
  {
    question: 'Is Vuetiful a theming solution for Vue 3 applications, including Quasar applications?',
    answer: 'Yes.',
  },
];`;
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VAccordion</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VAccordion, VAccordionItem } from '@code-coaching/vuetiful`" />
    </section>

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
          <v-code-block language="html" :code="usage" />
        </template>
      </v-preview>
    </section>

    <h3>Accessibility</h3>
    <section class="section">
      <p><kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>: Move focus onto and away from the accordion item.</p>
      <p><kbd>Space</kbd> and <kbd>Enter</kbd>: Toggle open/close the accordion item.</p>
    </section>

    <h3>Customization</h3>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-accordion hover="hover:variant-ghost-primary" background="bg-secondary-100-800-token">
            <v-accordion-item v-for="(faq, index) in faqs" :key="index" :title="faq.question">
              {{ faq.answer }}
              <template v-slot:open-item>open</template>
              <template v-slot:close-item>close</template>
            </v-accordion-item>
          </v-accordion>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="ts" :code="faqScript" />
          <v-code-block class="mb-2" language="html" :code="faqTemplate" />
          <p>
            <code>hover</code> will be appended to the <code>class</code> property of each invidivual tab. This can be
            one or multiple classes. This can be both normal CSS classes or Tailwind classes. This property is
            automatically applied to each accordion item.
          </p>
          <p>
            <code>background</code> will be appended to the <code>class</code> property of each invidivual tab. This can
            be one or multiple classes. This can be both normal CSS classes or Tailwind classes. This property is
            automatically applied to each accordion item.
          </p>
          <p>
            <code>open-item</code> and <code>close-item</code> are slots that can be used to customize the open and
            close content. These slots are optional. By default, the open slot will display a plus icon and the close
            slot will display a minus icon.
          </p>
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
