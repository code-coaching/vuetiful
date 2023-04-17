<script setup lang="ts">
import { CodeBlock, useDrawer, VButton } from '@code-coaching/vuetiful';

const { open } = useDrawer();

const codeExample = `<v-drawer>
  <h1>This is a drawer</h1>
  <p>This is some content in the drawer.</p>
</v-drawer>`;

const codeExampleMultipleScript = `import { VDrawer, useDrawer } from '@code-coaching/vuetiful';
const { drawer } = useDrawer();
`;

const codeExampleMultipleTemplate = `<v-drawer>
    <template v-if="drawer.id === 'content-one'">
      <h1>Content One</h1>
      <p>This is some content in the drawer.</p>
    </template>
    <template v-if="drawer.id === 'content-two'">
      <h1>Content Two</h1>
      <p>This is some content in the drawer.</p>
    </template>
  </v-drawer>`;

const useDrawerCode = `<v-button @click="open({ id: \'content-one\', position: \'top\' })">Open Content One</v-button>
<v-button @click="open({ id: \'content-two\', position: \'right\' })">Open Content Two</v-button>
<v-button @click="open({ id: \'content-three\, position: \'bottom\' })">Open Content Three</v-button>
<v-button @click="open({ id: \'content-four\', position: \'left\' })">Open Content Four</v-button>
`;

const useDrawerAnimationCode = `<v-button @click="open({ id: \'content-one\', duration: 150 })">Open Content One</v-button>
<v-button @click="open({ id: \'content-two\', duration: 300 })">Open Content Two</v-button>
`;
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VDrawer</h1>

    <CodeBlock language="ts" :code="`import { VDrawer} from '@code-coaching/vuetiful`" />
    <p class="mt-8">In case of not using <code>&lt;script setup&gt;</code></p>
    <CodeBlock
      language="ts"
      :code="`// ...
setup() {
  // ...
  components: {
    VDrawer,
  },
  // ...
}
// ...`"
    />

    <h2>Usage</h2>
    <h3>Single drawer</h3>
    <p class="mb-8">
      There should only be exact one <code>VDrawer</code> component in the app. A good place to put it is in the main
      layout component.
    </p>

    <code-block language="html" :code="codeExample" />

    <h3>Multiple drawers</h3>
    <p>
      There should still only exist exactly one instance of the <code>VDrawer</code> component in the app. In this
      instance, multiple sections can be added using <code>template</code> combined with <code>v-if</code>. The
      different sections can be opened by passing an <code>id</code> using <code>open()</code> from <code>useDrawer</code>.
    </p>
    <div>Script</div>
    <code-block language="ts" :code="codeExampleMultipleScript" />
    <div>Template</div>
    <code-block language="html" :code="codeExampleMultipleTemplate" />

    <h3>useDrawer</h3>

    <div class="flex flex-col gap-4">
      <code-block
        language="ts"
        :code="`import { useDrawer } from '@code-coaching/vuetiful';
  const { open } = useDrawer();
  `"
      />

      <code-block language="html" :code="useDrawerCode" />

      <div class="mb-4 flex flex-col items-center justify-center gap-2">
        <div class="grid grid-cols-3 gap-10">
          <div></div>
          <v-button class="variant-filled" @click="open({ position: 'top' })">&#8595;</v-button>
          <div></div>
          <v-button class="variant-filled" @click="open({ position: 'left' })">&#8594;</v-button>
          <div></div>
          <v-button class="variant-filled" @click="open({ position: 'right' })">&#8592;</v-button>
          <div></div>
          <v-button class="variant-filled" @click="open({ position: 'bottom' })">&#8593;</v-button>
          <div></div>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <p>There are two speeds for animation <code>300 (default)</code> and <code>150</code>.</p>
        <code-block language="html" :code="useDrawerAnimationCode" />
      </div>
    </div>
  </div>
</template>
