<script setup lang="ts">
import { VAccordion, VAccordionItem, VAlert, VCodeBlock, VPreview } from '@code-coaching/vuetiful';

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

const customTemplate = `<v-accordion
  class-question="hover:variant-ghost-primary bg-secondary-200-700-token"
  class-answer="bg-secondary-100-800-token"
>
  <v-accordion-item v-for="(faq, index) in faqs" :key="index" :title="faq.question">
    {{ faq.answer }}
    <template v-slot:open-item>open</template>
    <template v-slot:close-item>close</template>
  </v-accordion-item>
</v-accordion>`;

const unstyledTemplate = `<v-accordion unstyled>
  <v-accordion-item unstyled v-for="(faq, index) in faqs" :key="index" :title="faq.question">
    {{ faq.answer }}
  </v-accordion-item>
</v-accordion>`;

const unstyledPropTemplate = `<v-accordion unstyled>
  <v-accordion-item unstyled v-for="(faq, index) in faqs" :key="index" :title="faq.question">
    {{ faq.answer }}
  </v-accordion-item>
</v-accordion>`;

const unstyledCustomTemplate = `<v-accordion
  unstyled
  class="flex flex-col gap-4"
  class-question="hover:bg-pink-400 bg-pink-500 p-4"
  class-answer="bg-red-500 p-4"
>
  <v-accordion-item unstyled v-for="(faq, index) in faqs" :key="index" :title="faq.question">
    {{ faq.answer }}
  </v-accordion-item>
</v-accordion>`;
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
          <v-accordion
            class-question="hover:variant-ghost-primary bg-secondary-200-700-token"
            class-answer="bg-secondary-100-800-token"
          >
            <v-accordion-item v-for="(faq, index) in faqs" :key="index" :title="faq.question">
              {{ faq.answer }}
              <template v-slot:open-item>open</template>
              <template v-slot:close-item>close</template>
            </v-accordion-item>
          </v-accordion>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="ts" :code="faqScript" />
          <v-code-block class="mb-2" language="html" :code="customTemplate" />
          <p>
            <code>class-question</code> will be appended to the <code>class</code> property of each invidivual tab's
            question. This can be one or multiple classes. This can be both normal CSS classes or Tailwind classes.
          </p>
          <p>
            <code>class-answer</code> will be appended to the <code>class</code> property of each invidivual tab's
            answer. This can be one or multiple classes. This can be both normal CSS classes or Tailwind classes.
          </p>
          <p>
            <code>open-item</code> and <code>close-item</code> are slots that can be used to customize the open and
            close content. These slots are optional. By default, the open slot will display a plus icon and the close
            slot will display a minus icon.
          </p>
        </template>
      </v-preview>
    </section>

    <h3>Unstyled</h3>

    <section class="section">
      <v-alert type="info">Unstyled prop removes default styles, while retaining essential prop-based styles.</v-alert>
    </section>

    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-accordion unstyled>
            <v-accordion-item unstyled v-for="(faq, index) in faqs" :key="index" :title="faq.question">
              {{ faq.answer }}
            </v-accordion-item>
          </v-accordion>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="ts" :code="faqScript" />
          <v-code-block class="mb-2" language="html" :code="unstyledTemplate" />
        </template>
      </v-preview>
    </section>

    <h4>Unstyled - no prop-based styles</h4>

    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-accordion unstyled class-question="" class-answer="">
            <v-accordion-item unstyled v-for="(faq, index) in faqs" :key="index" :title="faq.question">
              {{ faq.answer }}
            </v-accordion-item>
          </v-accordion>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="ts" :code="faqScript" />
          <v-code-block class="mb-2" language="html" :code="unstyledPropTemplate" />
          <p>
            Overwrite <code>class-question</code> and <code>class-answer</code> with empty strings to remove all prop
            based styles.
          </p>
        </template>
      </v-preview>
    </section>

    <h4>Unstyled - custom style example</h4>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-accordion
            unstyled
            class="flex flex-col gap-4"
            class-question="flex flex-row-reverse justify-between gap-2 bg-blue-600 p-4 text-white hover:bg-blue-400"
            class-answer="bg-blue-500 p-4 text-white"
          >
            <v-accordion-item unstyled v-for="(faq, index) in faqs" :key="index" :title="faq.question">
              {{ faq.answer }}
            </v-accordion-item>
          </v-accordion>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="ts" :code="faqScript" />
          <v-code-block class="mb-2" language="html" :code="unstyledCustomTemplate" />
          <p>
            <code>class-question</code> will be appended to the <code>class</code> property of each invidivual tab's
            question. This can be one or multiple classes. This can be both normal CSS classes or Tailwind classes.
          </p>
          <p>
            <code>class-answer</code> will be appended to the <code>class</code> property of each invidivual tab's
            answer. This can be one or multiple classes. This can be both normal CSS classes or Tailwind classes.
          </p>
        </template>
      </v-preview>
    </section>
  </div>
</template>
