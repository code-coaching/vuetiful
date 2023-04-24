<script setup lang="ts">
import { VButton, VCodeBlock, VShell } from '@code-coaching/vuetiful';
import { computed, reactive } from 'vue';

const state = reactive({
  fixedHeader: true,
  sidebarLeft: true,
  sidebarRight: false,
  pageHeader: false,
  pageFooter: true,
  fixedFooter: false,
  vueRouter: false,
});

const codeExample = computed(() => {
  const code = `<v-shell>
    ${state.fixedHeader ? '<template v-slot:fixedHeader>fixedHeader</template>' : ' '}
    ${state.sidebarLeft ? '<template v-slot:sidebarLeft>sidebarLeft</template>' : ' '}
    ${state.sidebarRight ? '<template v-slot:sidebarRight>sidebarRight</template>' : ' '}
    ${state.pageHeader ? '<template v-slot:pageHeader>pageHeader</template>' : ' '}
    ${state.vueRouter ? '<router-view />' : '(default slot)'}
    ${state.pageFooter ? '<template v-slot:pageFooter>pageFooter</template>' : ' '}
    ${state.fixedFooter ? '<template v-slot:fixedFooter>fixedFooter</template>' : ' '}
</v-shell>`
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .join('\n');
  return code;
});
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VShell</h1>

    <v-code-block language="ts" :code="`import { VShell } from '@code-coaching/vuetiful`" />

    <h2>Usage</h2>
    <p>
      The <code>page</code> is a scrollable area. The page exists out of the <code>pageHeader</code>,
      <code>(default slot)</code> and <code>pageFooter</code>.
    </p>

    <p>Both <code>sidebarLeft</code> and <code>sidebarRight</code> are scrollable.</p>
    <div class="mb-4 flex h-[576px] flex-col items-center justify-center gap-2 md:h-[576px]">
      <v-shell class="card max-w-3xl p-1">
        <template v-slot:fixedHeader>
          <div
            v-if="state.fixedHeader"
            class="variant-soft card m-0.5 flex items-center justify-center overflow-hidden p-2 text-xs"
          >
            fixedHeader
          </div>
        </template>
        <template v-slot:sidebarLeft>
          <div
            v-if="state.sidebarLeft"
            class="variant-soft card m-0.5 flex h-[150%] items-center justify-center overflow-hidden p-2 text-xs"
          >
            <div class="flex flex-col items-center">
              &#8593;
              <div>sidebarLeft</div>
              &#8595;
            </div>
          </div>
        </template>
        <template v-slot:sidebarRight>
          <div
            v-if="state.sidebarRight"
            class="variant-soft card m-0.5 flex h-[150%] items-center justify-center overflow-hidden p-2 text-xs"
          >
            <div class="flex flex-col items-center">
              &#8593;
              <div>sidebarRight</div>
              &#8595;
            </div>
          </div>
        </template>
        <template v-slot:pageHeader>
          <div
            v-if="state.pageHeader"
            class="variant-soft-primary card m-0.5 flex items-center justify-center overflow-hidden p-2 text-xs"
          >
            pageHeader
          </div>
        </template>
        <template v-slot:pageFooter>
          <div
            v-if="state.pageFooter"
            class="variant-soft-primary card m-0.5 flex items-center justify-center overflow-hidden p-2 text-xs"
          >
            pageFooter
          </div>
        </template>

        <div
          class="variant-soft-primary card m-0.5 flex h-[500px] items-center justify-center overflow-hidden p-2 text-xs"
        >
          <div class="flex flex-col items-center">
            &#8593;
            <div>(default slot)</div>
            &#8595;
          </div>
        </div>

        <template v-slot:fixedFooter>
          <div
            v-if="state.fixedFooter"
            class="variant-soft card m-0.5 flex items-center justify-center overflow-hidden p-2 text-xs"
          >
            fixedFooter
          </div>
        </template>
      </v-shell>

      <div class="flex flex-col items-center">
        <p>Adjust layout by using the buttons below!</p>
        <div class="flex flex-wrap justify-center gap-1">
          <v-button
            :class="`${state.fixedHeader ? 'variant-filled' : 'variant-soft'}`"
            @click="state.fixedHeader = !state.fixedHeader"
            >fixedHeader</v-button
          >
          <v-button
            :class="`${state.sidebarLeft ? 'variant-filled' : 'variant-soft'}`"
            @click="state.sidebarLeft = !state.sidebarLeft"
            >sidebarLeft</v-button
          >
          <v-button
            :class="`${state.sidebarRight ? 'variant-filled' : 'variant-soft'}`"
            @click="state.sidebarRight = !state.sidebarRight"
            >sidebarRight</v-button
          >
          <v-button
            :class="`${state.fixedFooter ? 'variant-filled' : 'variant-soft'}`"
            @click="state.fixedFooter = !state.fixedFooter"
            >fixedFooter</v-button
          >
          <v-button
            :class="`${state.pageHeader ? 'variant-filled' : 'variant-soft'}`"
            @click="state.pageHeader = !state.pageHeader"
            >pageHeader</v-button
          >
          <v-button
            :class="`${state.pageFooter ? 'variant-filled' : 'variant-soft'}`"
            @click="state.pageFooter = !state.pageFooter"
            >pageFooter</v-button
          >
        </div>
        <v-button
          :class="`mt-2 ${state.vueRouter ? 'variant-filled' : 'variant-soft'}`"
          @click="state.vueRouter = !state.vueRouter"
          >Vue Router</v-button
        >
      </div>
    </div>

    <v-code-block class="md:h-60" language="html" :code="codeExample" />
  </div>
</template>
