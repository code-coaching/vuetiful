<script setup lang="ts">
import { VCodeBlock } from "@code-coaching/vuetiful";
import { Ghost, ScreenShare } from "lucide-vue-next";
</script>

<template>
  <h1 class="h1">Icons</h1>
  <section class="section">
    <p>
      You can use any icon library you want. The icons used in the components
      are from <a href="https://lucide.dev" target="_blank">Lucide</a>.
    </p>

    <p>
      This page will show how to couple Lucid icons into your Vuetiful project.
    </p>
  </section>

  <h2 class="h2">Install Lucide</h2>
  <section class="section">
    <v-code-block
      language="sh"
      code="npm install lucide-vue-next"
    ></v-code-block>
  </section>

  <h2 class="h2">Usage</h2>
  <p>
    You can use any icon from Lucide. You can use any icon that is available in
    their
    <a href="https://lucide.dev/icons/" class="anchor">library</a>.
  </p>

  <h3 class="h3">Ghost</h3>
  <section class="section">
    <p>
      The name of the icon is <code class="code">ghost</code>. The component to
      import is <code class="code">Ghost</code>.
    </p>
    <v-code-block
      language="ts"
      code="import { Ghost } from 'lucide-vue-next';"
    />
    <v-code-block
      language="html"
      :code="`<Ghost />
<Ghost class=&quot;h-8 w-8&quot; />
<Ghost class=&quot;h-16 w-16 text-red-500&quot; />`"
    />
    <div class="flex flex-wrap gap-2">
      <Ghost />
      <Ghost class="h-8 w-8" />
      <Ghost class="h-16 w-16 text-red-500" />
    </div>
  </section>

  <h3 class="h3">Screen Share</h3>
  <section class="section">
    <p>
      The name of the icon is <code class="code">screen-share</code>. The
      component to import is <code class="code">ScreenShare</code>.
    </p>
    <v-code-block
      language="ts"
      code="import { ScreenShare } from 'lucide-vue-next';"
    />
    <v-code-block
      language="html"
      :code="`<ScreenShare />
<ScreenShare class=&quot;h-8 w-8&quot; />
<ScreenShare class=&quot;h-16 w-16 text-red-500&quot; />`"
    />
    <div class="flex flex-wrap gap-2">
      <ScreenShare />
      <ScreenShare class="h-8 w-8" />
      <ScreenShare class="h-16 w-16 text-red-500" />
    </div>
  </section>
</template>
