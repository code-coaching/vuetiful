<script setup lang="ts">
import { computed } from 'vue';

/**
 * @slot fixedHeader - Insert fixed header content, such as Skeleton's App Bar component.
 * @slot sidebarLeft - Hidden when empty. Allows you to set fixed left sidebar content.
 * @slot sidebarRight - Hidden when empty. Allows you to set fixed right sidebar content.
 * @slot pageHeader - Insert content that resides above your page content. Great for global alerts.
 * @slot pageFooter - Insert content that resides below your page content. Recommended for most layouts.
 * @slot fixedFooter - Insert fixed footer content. Not recommended for most layouts.
 */
export type CssClasses = string;
const props = defineProps({
  regionPage: { type: String as () => CssClasses, default: '' },
  slotFixedHeader: { type: String as () => CssClasses, default: 'z-10' },
  slotSidebarLeft: { type: String as () => CssClasses, default: 'w-auto' },
  slotSidebarRight: { type: String as () => CssClasses, default: 'w-auto' },
  slotPageHeader: { type: String as () => CssClasses, default: '' },
  slotPageContent: { type: String as () => CssClasses, default: '' },
  slotPageFooter: { type: String as () => CssClasses, default: '' },
  slotFixedFooter: { type: String as () => CssClasses, default: '' },
});

const slots = defineSlots();
const computedHeight = computed(() => {
  return `calc(100vh - ${slots.fixedHeader ? '50px' : '0px'} - ${slots.fixedFooter ? '50px' : '0px'})`;
});
const computedTop = computed(() => {
  return `${slots.fixedHeader ? '50px' : '0px'}`;
});
</script>

<template>
  <div :class="`vuetiful-shell relative`">
    <div class="min-h-screen">
      <header
        v-if="$slots.fixedHeader"
        :class="`vuetiful-fixed-header sticky top-0 z-10 ${slotFixedHeader}`"
      >
        <slot name="fixedHeader" />
      </header>

      <div class="flex vuetiful-shell-content">
        <aside
          v-if="$slots.sidebarLeft"
          :class="`vuetiful-sidebar-left sticky overflow-y-auto hidden lg:!block w-fit min-w-fit`"
          :style="`height: ${computedHeight}; top: ${computedTop}`"
        >
          <!-- :style="`height: calc(100vh - ${$slots.fixedHeader ? '50px' : '0'} - ${$slots.fixedFooter ? '50px' : '0'}); top: ${$slots.fixedHeader ? '50px' : '0'}`" -->
          <slot name="sidebarLeft" />
        </aside>

        <div tabindex="-1" class="w-full vuetiful-page">
          <header v-if="$slots.pageHeader" :class="`vuetiful-page-header ${slotPageHeader}`">
            <slot name="pageHeader" />
          </header>

          <main :class="`vuetiful-page-content w-full ${slotPageContent}`">
            <slot />
          </main>

          <footer v-if="$slots.pageFooter" :class="`vuetiful-page-footer ${slotPageFooter}`">
            <slot name="pageFooter" />
          </footer>
        </div>

        <aside
          v-if="$slots.sidebarRight"
          :class="`vuetiful-sidebar-right sticky overflow-y-auto hidden lg:!block`"
          :style="`height: ${computedHeight}; top: ${computedTop}`"
        >
          <slot name="sidebarRight" />
        </aside>
      </div>

      <footer
        v-if="$slots.fixedFooter"
        :class="`vuetiful-fixed-footer z-10 bottom-0 sticky ${slotFixedFooter}`"
      >
        <slot name="fixedFooter" />
      </footer>
    </div>
  </div>
</template>
