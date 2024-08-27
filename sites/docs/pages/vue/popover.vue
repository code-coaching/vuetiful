<script setup lang="ts">
import {
  VAlert,
  VCodeBlock,
  VPopover,
  VPreview,
  VTab,
  VTabPanel,
  VTabs,
} from "@code-coaching/vuetiful";
import { ref } from "vue";

const anchorRef = ref();
const getAnchor = () => anchorRef;
const basicScript = `const anchorRef = ref();
const getAnchor = () => anchorRef;`;
const basicTemplate = `<div class="px-4 py-2 preset-filled" ref="anchorRef">Hover me</div>
<v-popover :anchor="getAnchor">bottom</v-popover>`;

const anchorClickRef = ref();
const getAnchorClick = () => anchorClickRef;
const clickScript = `const anchorClickRef = ref();
const getAnchorClick = () => anchorClickRef;`;
const clickTemplate = `<div
  id="click-anchor"
  class="px-4 py-2 preset-filled hover:cursor-pointer"
  ref="anchorClickRef"
>
  Click me
</div>
<v-popover show-on-click :anchor="getAnchorClick">
  shown on click
</v-popover>`;

const anchorBottomRef = ref();
const getBottomAnchor = () => anchorBottomRef;
const bottomScript = `const anchorBottomRef = ref();
const getBottomAnchor = () => anchorBottomRef;`;
const bottomTemplate = `<div class="px-8 py-2 preset-filled" ref="anchorBottomRef">
  bottom
</div>
<v-popover placement="bottom" :anchor="getBottomAnchor">
  bottom
</v-popover>`;

const anchorBottomStartRef = ref();
const getBottomStartAnchor = () => anchorBottomStartRef;
const bottomStartScript = `const anchorBottomStartRef = ref();
const getBottomStartAnchor = () => anchorBottomStartRef;`;
const bottomStartTemplate = `<div class="px-8 py-2 preset-filled" ref="anchorBottomStartRef">
  bottom-start
</div>
<v-popover placement="bottom-start" :anchor="getBottomStartAnchor">
  bottom-start
</v-popover>`;

const anchorBottomEndRef = ref();
const getBottomEndAnchor = () => anchorBottomEndRef;
const bottomEndScript = `const anchorBottomEndRef = ref();
const getBottomEndAnchor = () => anchorBottomEndRef;`;
const bottomEndTemplate = `<div class="px-8 py-2 preset-filled" ref="anchorBottomEndRef">
  bottom-end
</div>
<v-popover placement="bottom-end" :anchor="getBottomEndAnchor">
  bottom-end
</v-popover>`;

const anchorTopRef = ref();
const getTopAnchor = () => anchorTopRef;
const topScript = `const anchorTopRef = ref();
const getTopAnchor = () => anchorTopRef;`;
const topTemplate = `<div class="px-8 py-2 preset-filled" ref="anchorTopRef">
  top
</div>
<v-popover placement="top" :anchor="getTopAnchor">
  top
</v-popover>`;

const anchorTopStartRef = ref();
const getTopStartAnchor = () => anchorTopStartRef;
const topStartScript = `const anchorTopStartRef = ref();
const getTopStartAnchor = () => anchorTopStartRef;`;
const topStartTemplate = `<div class="px-8 py-2 preset-filled" ref="anchorTopStartRef">
  top-start
</div>
<v-popover placement="top-start" :anchor="getTopStartAnchor">
  top-start
</v-popover>`;

const anchorTopEndRef = ref();
const getTopEndAnchor = () => anchorTopEndRef;
const topEndScript = `const anchorTopEndRef = ref();
const getTopEndAnchor = () => anchorTopEndRef;`;
const topEndTemplate = `<div class="px-8 py-2 preset-filled" ref="anchorTopEndRef">
  top-end
</div>
<v-popover placement="top-end" :anchor="getTopEndAnchor">
  top-end
</v-popover>`;

const anchorLeftRef = ref();
const getLeftAnchor = () => anchorLeftRef;
const leftScript = `const anchorLeftRef = ref();
const getLeftAnchor = () => anchorLeftRef;`;
const leftTemplate = `<div class="px-8 py-2 preset-filled" ref="anchorLeftRef">
  left
</div>
<v-popover placement="left" :anchor="getLeftAnchor">
  left
</v-popover>`;

const anchorLeftStartRef = ref();
const getLeftStartAnchor = () => anchorLeftStartRef;
const leftStartScript = `const anchorLeftStartRef = ref();
const getLeftStartAnchor = () => anchorLeftStartRef;`;
const leftStartTemplate = `<div class="px-8 py-2 preset-filled" ref="anchorLeftStartRef">
  left-start
</div>
<v-popover placement="left-start" :anchor="getLeftStartAnchor">
  left-start
</v-popover>`;

const anchorLeftEndRef = ref();
const getLeftEndAnchor = () => anchorLeftEndRef;
const leftEndScript = `const anchorLeftEndRef = ref();
const getLeftEndAnchor = () => anchorLeftEndRef;`;
const leftEndTemplate = `<div class="px-8 py-2 preset-filled" ref="anchorLeftEndRef">
  left-end
</div>
<v-popover placement="left-end" :anchor="getLeftEndAnchor">
  left-end
</v-popover>`;

const anchorRightRef = ref();
const getRightAnchor = () => anchorRightRef;
const rightScript = `const anchorRightRef = ref();
const getRightAnchor = () => anchorRightRef;`;
const rightTemplate = `<div class="px-8 py-2 preset-filled" ref="anchorRightRef">
  right
</div>
<v-popover placement="right" :anchor="getRightAnchor">
  right
</v-popover>`;

const anchorRightStartRef = ref();
const getRightStartAnchor = () => anchorRightStartRef;
const rightStartScript = `const anchorRightStartRef = ref();
const getRightStartAnchor = () => anchorRightStartRef;`;
const rightStartTemplate = `<div class="px-8 py-2 preset-filled" ref="anchorRightStartRef">
  right-start
</div>
<v-popover placement="right-start" :anchor="getRightStartAnchor">
  right-start
</v-popover>`;

const anchorRightEndRef = ref();
const getRightEndAnchor = () => anchorRightEndRef;
const rightEndScript = `const anchorRightEndRef = ref();
const getRightEndAnchor = () => anchorRightEndRef;`;
const rightEndTemplate = `<div class="px-8 py-2 preset-filled" ref="anchorRightEndRef">
  right-end
</div>
<v-popover placement="right-end" :anchor="getRightEndAnchor">
  right-end
</v-popover>`;
</script>

<template>
  <h1 class="h1">VPopover</h1>
  <section class="section">
    <v-code-block
      language="ts"
      :code="`import { VPopover } from '@code-coaching/vuetiful';`"
    />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template #tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Basic</h2>
      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div class="px-4 py-2 preset-filled" ref="anchorRef">Hover me</div>
            <v-popover :anchor="getAnchor">bottom</v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="basicTemplate" />
            </div>
          </template>
          <template #footer>
            <p class="flex justify-center">
              On mobile devices, the popover will be shown on click instead of
              hover.
            </p>
          </template>
        </v-preview>
        <v-alert type="info">
          <p>Do add a template ref to the anchor element.</p>
          <p>
            Do add a function that returns the ref to pass to the
            <code class="code">anchor</code> prop.
          </p>
        </v-alert>
      </section>

      <h2 class="h2">Show on click</h2>
      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div
              id="click-anchor"
              class="px-4 py-2 preset-filled hover:cursor-pointer"
              ref="anchorClickRef"
            >
              Click me
            </div>
            <v-popover show-on-click :anchor="getAnchorClick">
              shown on click
            </v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="clickScript" />
              <v-code-block language="html" :code="clickTemplate" />
              <v-alert type="info">
                Do add a unique id to the anchor element when using
                show-on-click.
              </v-alert>
            </div>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Placement</h2>
      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div class="px-8 py-2 preset-filled" ref="anchorBottomRef">
              bottom
            </div>
            <v-popover placement="bottom" :anchor="getBottomAnchor">
              bottom
            </v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="bottomScript" />
              <v-code-block language="html" :code="bottomTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div class="px-8 py-2 preset-filled" ref="anchorBottomStartRef">
              bottom-start
            </div>
            <v-popover placement="bottom-start" :anchor="getBottomStartAnchor">
              bottom-start
            </v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="bottomStartScript" />
              <v-code-block language="html" :code="bottomStartTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div class="px-8 py-2 preset-filled" ref="anchorBottomEndRef">
              bottom-end
            </div>
            <v-popover placement="bottom-end" :anchor="getBottomEndAnchor">
              bottom-end
            </v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="bottomEndScript" />
              <v-code-block language="html" :code="bottomEndTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div class="px-8 py-2 preset-filled" ref="anchorTopRef">top</div>
            <v-popover placement="top" :anchor="getTopAnchor"> top </v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="topScript" />
              <v-code-block language="html" :code="topTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div class="px-8 py-2 preset-filled" ref="anchorTopStartRef">
              top-start
            </div>
            <v-popover placement="top-start" :anchor="getTopStartAnchor">
              top-start
            </v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="topStartScript" />
              <v-code-block language="html" :code="topStartTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div class="px-8 py-2 preset-filled" ref="anchorTopEndRef">
              top-end
            </div>
            <v-popover placement="top-end" :anchor="getTopEndAnchor">
              top-end
            </v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="topEndScript" />
              <v-code-block language="html" :code="topEndTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div class="px-2 py-8 preset-filled" ref="anchorLeftRef">left</div>
            <v-popover placement="left" :anchor="getLeftAnchor">
              left
            </v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="leftScript" />
              <v-code-block language="html" :code="leftTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div class="px-2 py-8 preset-filled" ref="anchorLeftStartRef">
              left-start
            </div>
            <v-popover placement="left-start" :anchor="getLeftStartAnchor">
              left-start
            </v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="leftStartScript" />
              <v-code-block language="html" :code="leftStartTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div class="px-2 py-8 preset-filled" ref="anchorLeftEndRef">
              left-end
            </div>
            <v-popover placement="left-end" :anchor="getLeftEndAnchor">
              left-end
            </v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="leftEndScript" />
              <v-code-block language="html" :code="leftEndTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div class="px-2 py-8 preset-filled" ref="anchorRightRef">
              right
            </div>
            <v-popover placement="right" :anchor="getRightAnchor">
              right
            </v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="rightScript" />
              <v-code-block language="html" :code="rightTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div class="px-2 py-8 preset-filled" ref="anchorRightStartRef">
              right-start
            </div>
            <v-popover placement="right-start" :anchor="getRightStartAnchor">
              right-start
            </v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="rightStartScript" />
              <v-code-block language="html" :code="rightStartTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview class-preview-tab-area="h-28">
          <template #preview>
            <div class="px-2 py-8 preset-filled" ref="anchorRightEndRef">
              right-end
            </div>
            <v-popover placement="right-end" :anchor="getRightEndAnchor">
              right-end
            </v-popover>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="rightEndScript" />
              <v-code-block language="html" :code="rightEndTemplate" />
            </div>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
