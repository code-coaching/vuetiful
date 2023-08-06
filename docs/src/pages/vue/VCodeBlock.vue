<script setup lang="ts">
import { VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';
import { AlertUnstyled } from 'src/components';

const consoleExample = '<v-code-block lang="sh" code="npm install @code-coaching/vuetiful" />';
const htmlExample = `<v-code-block
  language="html"
  code="<h1>John Duck</h1>
<p>Vuetiful is beautiful</p>"
/>`;
const jsExample = `<v-code-block
  language="js"
  code="const mascot = {
  name: 'John Duck',
  age: 32,
  isCool: true,
};"
/>`;
const tsExample = `<v-code-block
  language="ts"
  code="interface Mascot {
  name: string;
  age: number;
  isCool: boolean;
};

const mascot: Mascot = {
  name: 'John Duck',
  age: 32,
  isCool: true,
};"
/>`;

const codeExample = `<div class="mb-2 flex flex-wrap items-start gap-2">
  <div class="color-column">primary</div>
  <div class="btn-sm bg-primary-50 text-primary-900">50</div>
  <div class="btn-sm bg-primary-100 text-primary-900">100</div>
  <div class="btn-sm bg-primary-200 text-primary-900">200</div>
  <div class="btn-sm bg-primary-300 text-primary-900">300</div>
  <div class="btn-sm bg-primary-400 text-primary-900">400</div>
  <div class="btn-sm bg-primary-500 text-primary-50">500</div>
  <div class="btn-sm bg-primary-600 text-primary-50">600</div>
  <div class="btn-sm bg-primary-700 text-primary-50">700</div>
  <div class="btn-sm bg-primary-800 text-primary-50">800</div>
  <div class="btn-sm bg-primary-900 text-primary-50">900</div>
</div>`;

const codeCodeScriptExample = `const codeExample = \`<div class="mb-2 flex flex-wrap items-start gap-2">
  <div class="color-column">primary</div>
  <div class="btn-sm bg-primary-50 text-primary-900">50</div>
  <div class="btn-sm bg-primary-100 text-primary-900">100</div>
  <div class="btn-sm bg-primary-200 text-primary-900">200</div>
  <div class="btn-sm bg-primary-300 text-primary-900">300</div>
  <div class="btn-sm bg-primary-400 text-primary-900">400</div>
  <div class="btn-sm bg-primary-500 text-primary-50">500</div>
  <div class="btn-sm bg-primary-600 text-primary-50">600</div>
  <div class="btn-sm bg-primary-700 text-primary-50">700</div>
  <div class="btn-sm bg-primary-800 text-primary-50">800</div>
  <div class="btn-sm bg-primary-900 text-primary-50">900</div>
</div>\`;`;

const codeCodeTemplateExample = '<v-code-block language="html" :code="codeExample" />';
const withOverflowExample = '<v-code-block class="!max-w-[500px]" language="html" :code="withOverflowExample" />';
const withoutOverflowExample =
  '<v-code-block prevent-overflow class="!max-w-[500px]" language="html" :code="withoutOverflowExample" />';

const sourceScriptOverflowExample = `const withOverflowExample = '<v-code-block class="!max-w-[500px]" language="html" :code="withoutOverflowExample" />';
const withoutOverflowExample = '<v-code-block prevent-overflow class="!max-w-[500px]" language="html" :code="withoutOverflowExample" />';`;
const sourceTemplateOverflowExample = `<div class="flex max-w-full flex-col gap-4">
  <div class="flex flex-col gap-1">
    <v-code-block class="!max-w-[500px]" language="html" :code="withOverflowExample" />
    <div>With overflow (default)</div>
  </div>

  <div class="flex flex-col gap-1">
    <v-code-block prevent-overflow class="!max-w-[500px]" language="html" :code="withoutOverflowExample" />
    <div>Without overflow - Add <code>prevent-overflow</code> prop</div>
  </div>
</div>`;

const copyButtonExample =
  '<v-code-block button-text="Grab me!" button-copied-text="You got me!" language="html" code="<h1>John Duck</h1>" />';
const sourceTemplateCopyButtonExample = `<v-code-block
  button-text="Grab me!"
  button-copied-text="You got me!"
  language="html"
  :code="copyButtonExample"
/>`;
const sourceScriptCopyButtonExample =
  'const copyButtonExample = \'<v-code-block button-text="Grab me!" button-copied-text="You got me!" language="html" code="<h1>John Duck</h1>" />\';';

const unstyledTemplate = `<v-code-block
  unstyled
  language="html"
  code="<h1>John Duck</h1>
<p>Vuetiful is beautiful</p>"
/>`;

const unstyledPropTemplate = `<v-code-block
  unstyled
  class="flex flex-col-reverse"
  class-header="flex items-center justify-between bg-blue-600 text-white px-8 py-1"
  class-pre="!rounded-none !bg-red-600"
  class-code="!bg-green-600"
  class-button="bg-green-600 text-white hover:bg-green-700"
  language="html"
  code="<h1>John Duck</h1>
<p>Vuetiful is beautiful</p>"
/>`;
</script>

<template>
  <h1>VCodeBlock</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VCodeBlock } from '@code-coaching/vuetiful`" />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template v-slot:tabs>
      <v-tab>Usage</v-tab>
      <v-tab>Unstyled</v-tab>
    </template>
    <v-tab-panel>
      <h2>Console</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-code-block language="console" code="npm install @code-coaching/vuetiful" />
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="consoleExample" />
          </template>
        </v-preview>
      </section>

      <h2>HTML</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-code-block
              language="html"
              code="<h1>John Duck</h1>
<p>Vuetiful is beautiful</p>"
            />
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="htmlExample" />
          </template>
        </v-preview>
      </section>

      <h2>JavaScript</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-code-block
              language="js"
              code="const mascot = {
  name: 'John Duck',
  age: 32,
  isCool: true,
};"
            />
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="jsExample" />
          </template>
        </v-preview>
      </section>

      <h2>TypeScript</h2>

      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-code-block
              language="ts"
              code="interface Mascot {
  name: string;
  age: number;
  isCool: boolean;
};

const mascot: Mascot = {
  name: 'John Duck',
  age: 32,
  isCool: true,
};"
            />
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="tsExample" />
          </template>
        </v-preview>
      </section>

      <h2>A lot of code</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-code-block language="html" :code="codeExample" />
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-2">
              <v-code-block language="ts" :code="codeCodeScriptExample" />
              <v-code-block language="html" :code="codeCodeTemplateExample"></v-code-block>
            </div>
          </template>
        </v-preview>
      </section>

      <h2>Prevent overflow</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex max-w-full flex-col gap-4">
              <div class="flex flex-col gap-1">
                <v-code-block class="!max-w-[500px]" language="html" :code="withOverflowExample" />
                <div>With overflow (default)</div>
              </div>

              <div class="flex flex-col gap-1">
                <v-code-block prevent-overflow class="!max-w-[500px]" language="html" :code="withoutOverflowExample" />
                <div>Without overflow - Add <code>prevent-overflow</code> prop</div>
              </div>
            </div>
          </template>

          <template v-slot:source>
            <div class="flex flex-col gap-2">
              <v-code-block language="typescript" :code="sourceScriptOverflowExample" />
              <v-code-block language="html" :code="sourceTemplateOverflowExample" />
            </div>
          </template>
        </v-preview>
      </section>

      <h2>Copy Button</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex max-w-full flex-col gap-2">
              <v-code-block
                button-text="Grab me!"
                button-copied-text="You got me!"
                language="html"
                :code="copyButtonExample"
              />
              <div>
                The text to copy and the copied text can be customized with the <code>button-text</code> and
                <code>button-copied-text</code> props.
              </div>
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-4">
              <v-code-block language="typescript" :code="sourceScriptCopyButtonExample" />
              <v-code-block language="html" :code="sourceTemplateCopyButtonExample" />
            </div>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
    <v-tab-panel>
      <section class="section">
        <alert-unstyled />
      </section>

      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-code-block
              unstyled
              language="html"
              code="<h1>John Duck</h1>
<p>Vuetiful is beautiful</p>"
            />
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="unstyledTemplate" />
          </template>
        </v-preview>
      </section>

      <h2>Custom style example</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-code-block
              unstyled
              class="flex flex-col-reverse"
              class-header="flex items-center justify-between bg-blue-600 text-white px-8 py-1"
              class-pre="!rounded-none !bg-red-600 p-4"
              class-code="!bg-green-600 !text-white"
              class-button="bg-green-600 text-white hover:bg-green-700 dark:bg-green-600"
              language="html"
              code="<h1>John Duck</h1>
<p>Vuetiful is beautiful</p>"
            />
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="unstyledPropTemplate" />
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
