<script setup lang="ts">
/**
 * @slot fixedHeader - Insert fixed header content, such as Skeleton's App Bar component.
 * @slot sidebarLeft - Hidden when empty. Allows you to set fixed left sidebar content.
 * @slot sidebarRight - Hidden when empty. Allows you to set fixed right sidebar content.
 * @slot pageHeader - Insert content that resides above your page content. Great for global alerts.
 * @slot pageFooter - Insert content that resides below your page content. Recommended for most layouts.
 * @slot fixedFooter - Insert fixed footer content. Not recommended for most layouts.
 */
export type CssClasses = string;
defineProps({
  regionPage: { type: String as () => CssClasses, default: '' },
  slotFixedHeader: { type: String as () => CssClasses, default: 'z-10' },
  slotSidebarLeft: { type: String as () => CssClasses, default: 'w-auto' },
  slotSidebarRight: { type: String as () => CssClasses, default: 'w-auto' },
  slotPageHeader: { type: String as () => CssClasses, default: '' },
  slotPageContent: { type: String as () => CssClasses, default: '' },
  slotPageFooter: { type: String as () => CssClasses, default: '' },
  slotFixedFooter: { type: String as () => CssClasses, default: '' },
});
</script>

<template>
  <div class="vuetiful-shell flex h-full w-full flex-col overflow-hidden">
    <header v-if="$slots.fixedHeader" :class="`vuetiful-fixed-header ${slotFixedHeader}`">
      <slot name="fixedHeader" />
    </header>

    <div class="vuetiful-shell-content flex h-full w-full flex-auto overflow-hidden">
      <aside
        v-if="$slots.sidebarLeft"
        :class="`vuetiful-sidebar-left overflow-y-auto overflow-x-hidden ${slotSidebarLeft}`"
      >
        <slot name="sidebarLeft" />
      </aside>

      <div tabindex="-1" :class="`vuetiful-page flex flex-1 flex-col overflow-x-hidden ${regionPage ?? ''}`">
        <header v-if="$slots.pageHeader" :class="`vuetiful-page-header flex-none ${slotPageHeader}`">
          <slot name="pageHeader" />
        </header>

        <main :class="`vuetiful-page-content flex-auto ${slotPageContent}`">
          <slot />
        </main>

        <footer v-if="$slots.pageFooter" :class="`vuetiful-page-footer flex-none ${slotPageFooter}`">
          <slot name="pageFooter" />
        </footer>
      </div>

      <aside
        v-if="$slots.sidebarRight"
        :class="`vuetiful-sidebar-right flex-none overflow-y-auto overflow-x-hidden ${slotSidebarRight}`"
      >
        <slot name="sidebarRight" />
      </aside>
    </div>

    <footer v-if="$slots.fixedFooter" :class="`vuetiful-fixed-footer ${slotFixedFooter}`">
      <slot name="fixedFooter" />
    </footer>
  </div>
</template>
