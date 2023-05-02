<script setup lang="ts">
import { VCodeBlock } from '@code-coaching/vuetiful';

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
const withOverflowExample = '<v-code-block class="max-w-[500px]" language="html" :code="withoutOverflowExample" />';
const withoutOverflowExample =
  '        <v-code-block prevent-overflow class="max-w-[500px]" language="html" :code="withoutOverflowExample" />';

const copyButtonExample =
  '<v-code-block button-text="Grab me!" button-copied-text="You got me!" language="html" code="<h1>John Duck</h1>" />';
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VCodeBlock</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VCodeBlock } from '@code-coaching/vuetiful`" />
    </section>

    <h2>Usage</h2>
    <h3>Console</h3>
    <section class="section">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1">
          <div>Output</div>
          <v-code-block language="console" code="npm install @code-coaching/vuetiful" />
        </div>

        <div class="flex flex-col gap-1">
          <div>Code used to achieve the output</div>
          <v-code-block language="html" :code="consoleExample" />
        </div>
      </div>
    </section>

    <h3>HTML</h3>
    <section class="section">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1">
          <div>Output</div>
          <v-code-block
            language="html"
            code="<h1>John Duck</h1>
  <p>Vuetiful is beautiful</p>"
          />
        </div>
        <div class="flex flex-col gap-1">
          <div>Code used to achieve the output</div>
          <v-code-block language="html" :code="htmlExample" />
        </div>
      </div>
    </section>

    <h3>JavaScript</h3>
    <section class="section">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1">
          <div>Output</div>
          <v-code-block
            language="js"
            code="const mascot = {
    name: 'John Duck',
    age: 32,
    isCool: true,
  };"
          />
        </div>
        <div class="flex flex-col gap-1">
          <div>Code used to achieve the output</div>
          <v-code-block language="html" :code="jsExample" />
        </div>
      </div>
    </section>

    <h3>TypeScript</h3>
    <section class="section">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1">
          <div>Output</div>
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
        </div>

        <div class="flex flex-col gap-1">
          <div>Code used to achieve the output</div>
          <v-code-block language="html" :code="tsExample" />
        </div>
      </div>
    </section>

    <h3>A lot of code</h3>
    <section class="section">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1">
          <div>Output</div>
          <v-code-block language="html" :code="codeExample" />
        </div>

        <div class="flex flex-col gap-1">
          <div>Code used to achieve the output</div>
          <v-code-block language="ts" :code="codeCodeScriptExample" />
          <v-code-block language="html" :code="codeCodeTemplateExample"></v-code-block>
        </div>
      </div>
    </section>

    <h3>Prevent overflow</h3>
    <section class="section">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <div>With overflow (default)</div>
          <v-code-block class="max-w-[500px]" language="html" :code="withOverflowExample" />
        </div>

        <div class="flex flex-col gap-1">
          <div>Without overflow - Add <code>prevent-overflow</code> prop</div>
          <v-code-block prevent-overflow class="max-w-[500px]" language="html" :code="withoutOverflowExample" />
        </div>
      </div>
    </section>

    <h3>Copy Button</h3>
    <section class="section">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1">
          <div>
            The text to copy and the copied text can be customized with the <code>button-text</code> and
            <code>button-copied-text</code> props.
          </div>
          <v-code-block
            button-text="Grab me!"
            button-copied-text="You got me!"
            language="html"
            :code="copyButtonExample"
          />
        </div>
      </div>
    </section>
  </div>
</template>
