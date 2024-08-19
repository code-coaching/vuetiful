<script setup lang="ts">
import {
  VAlert,
  VCodeBlock,
  VPreview,
  VTab,
  VTabPanel,
  VTabs,
} from "@code-coaching/vuetiful";

const fileNameExample = `<v-code-block
  file-name="file-name.ts"
  code="By default it will show PLAINTEXT as language."
/>`;

const consoleExample =
  '<v-code-block lang="sh" code="npm install @code-coaching/vuetiful" />';
const htmlExample = `<v-code-block
  language="html"
  code="<h1 class="h1">John Duck</h1>
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

const codeExample = `<div class="flex flex-wrap items-start gap-2 mb-2">
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

const codeCodeScriptExample = `const codeExample = \`<div class="flex flex-wrap items-start gap-2 mb-2">
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

const codeCodeTemplateExample =
  '<v-code-block language="html" :code="codeExample" />';
const withOverflowExample =
  '<v-code-block class="!max-w-[500px]" language="html" :code="withOverflowExample" />';
const withoutOverflowExample =
  '<v-code-block prevent-overflow class="!max-w-[500px]" language="html" :code="withoutOverflowExample" />';

const sourceScriptOverflowExample = `const withOverflowExample = '<v-code-block class="!max-w-[500px]" language="html" :code="withoutOverflowExample" />';
const withoutOverflowExample = '<v-code-block prevent-overflow class="!max-w-[500px]" language="html" :code="withoutOverflowExample" />';`;
const sourceTemplateOverflowExample = `<div class="flex flex-col max-w-full gap-4">
  <div class="flex flex-col gap-1">
    <v-code-block class="!max-w-[500px]" language="html" :code="withOverflowExample" />
    <div>With overflow (default)</div>
  </div>

  <div class="flex flex-col gap-1">
    <v-code-block prevent-overflow class="!max-w-[500px]" language="html" :code="withoutOverflowExample" />
    <div>Without overflow - Add <code class="code">prevent-overflow</code> prop</div>
  </div>
</div>`;

const copyButtonExample =
  '<v-code-block button-text="Grab me!" button-copied-text="You got me!" language="html" code="<h1 class="h1">John Duck</h1>" />';
const sourceTemplateCopyButtonExample = `<v-code-block
  button-text="Grab me!"
  button-copied-text="You got me!"
  language="html"
  :code="copyButtonExample"
/>`;
const sourceScriptCopyButtonExample =
  'const copyButtonExample = \'<v-code-block button-text="Grab me!" button-copied-text="You got me!" language="html" code="<h1 class="h1">John Duck</h1>" />\';';
</script>

<template>
  <h1 class="h1">VCodeBlock</h1>
  <section class="section">
    <v-code-block
      language="ts"
      :code="`import { VCodeBlock } from '@code-coaching/vuetiful';
import 'highlight.js/styles/github-dark.min.css';`"
    />
    <v-alert type="info">
      <p class="mb-2">
        Remember to install <code class="code">highlight.js</code> as a
        dependency.
    </p>

      <v-code-block language="sh" :code="`npm install highlight.js`" />
    </v-alert>
  </section>

  <h2 class="h2">Highlight Themes</h2>
  <section class="section">
    <p>
      Highlight.js has multiple
      <a
        class="anchor"
        href="https://github.com/highlightjs/highlight.js/tree/main/src/styles"
      >
        themes
      </a>
      available.
    </p>

    <p>
      Let's say we choose <code class="code">panda-syntax-dark.css</code> as the
      theme we want.
    </p>

    <v-code-block
      language="ts"
      :code="`import 'highlight.js/styles/panda-syntax-dark.min.css';`"
    />

    <v-alert type="info">
      Import the css either on the page that uses the
      <code class="code">VCodeBlock</code> component. Or, import it once in the
      root component if you use the component on multiple pages and want the
      same code highlighting everywhere.
    </v-alert>
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template #tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">File name</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-code-block
              file-name="file-name.ts"
              code="By default it will show PLAINTEXT as language."
            />
          </template>
          <template #source>
            <v-code-block language="html" :code="fileNameExample" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Console</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-code-block
              language="console"
              code="npm install @code-coaching/vuetiful"
            />
          </template>
          <template #source>
            <v-code-block language="html" :code="consoleExample" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">HTML</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-code-block
              language="html"
              code='<h1 class="h1">John Duck</h1>
<p>Vuetiful is beautiful</p>'
            />
          </template>
          <template #source>
            <v-code-block language="html" :code="htmlExample" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">JavaScript</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-code-block
              language="js"
              code="const mascot = {
  name: 'John Duck',
  age: 32,
  isCool: true,
};"
            />
          </template>
          <template #source>
            <v-code-block language="html" :code="jsExample" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">TypeScript</h2>

      <section class="section">
        <v-preview>
          <template #preview>
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
          <template #source>
            <v-code-block language="html" :code="tsExample" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">A lot of code</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-code-block language="html" :code="codeExample" />
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="codeCodeScriptExample" />
              <v-code-block
                language="html"
                :code="codeCodeTemplateExample"
              ></v-code-block>
            </div>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Prevent overflow</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex max-w-full flex-col gap-4">
              <div class="flex flex-col gap-1">
                <v-code-block
                  class="max-w-[500px]"
                  language="html"
                  :code="withOverflowExample"
                />
                <div>With overflow (default)</div>
              </div>

              <div class="flex flex-col gap-1">
                <v-code-block
                  prevent-overflow
                  class="max-w-[500px]"
                  language="html"
                  :code="withoutOverflowExample"
                />
                <div>
                  Without overflow - Add
                  <code class="code">prevent-overflow</code> prop
                </div>
              </div>
            </div>
          </template>

          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block
                language="typescript"
                :code="sourceScriptOverflowExample"
              />
              <v-code-block
                language="html"
                :code="sourceTemplateOverflowExample"
              />
            </div>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Copy Button</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex max-w-full flex-col gap-2">
              <v-code-block
                button-text="Grab me!"
                button-copied-text="You got me!"
                language="html"
                :code="copyButtonExample"
              />
              <div>
                The text to copy and the copied text can be customized with the
                <code class="code">button-text</code> and
                <code class="code">button-copied-text</code> props.
              </div>
            </div>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block
                language="typescript"
                :code="sourceScriptCopyButtonExample"
              />
              <v-code-block
                language="html"
                :code="sourceTemplateCopyButtonExample"
              />
            </div>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
