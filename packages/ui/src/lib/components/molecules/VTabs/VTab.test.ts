import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { VTab, VTabs } from '..';

describe('VTab', () => {
  test('defaults', async () => {
    const wrapper = mount({
      template: /*html*/ `
          <v-tabs>
            <template v-slot="tabs">
              <v-tab data-test="vuetiful">Vuetiful</v-tab>
            </template>
          </v-tabs>
        `,
      components: {
        'v-tabs': VTabs,
        'v-tab': VTab,
      },
    });

    const vuetiful = wrapper.find("[data-test='vuetiful']");
    const slotContainer = vuetiful.find("[data-test='slot-container']");
    expect(vuetiful.classes()).toEqual(['vuetiful-tab', 'flex', 'flex-col']);
    expect(slotContainer.classes()).toEqual([
      'vuetiful-tab-content',
      'border-t-2',
      'border-x-2',
      'rounded-bl-none',
      'rounded-br-none',
      "border-surface-950-50",
      'rounded-container',
      'text-base',
      'w-full',
      'px-4',
      'py-2',
    ]);
  });

  test('vertical', async () => {
    const wrapper = mount({
      template: /*html*/ `
          <v-tabs vertical>
            <template v-slot="tabs">
              <v-tab data-test="vuetiful">Vuetiful</v-tab>
            </template>
          </v-tabs>
        `,
      components: {
        'v-tabs': VTabs,
        'v-tab': VTab,
      },
    });

    const vuetiful = wrapper.find("[data-test='vuetiful']");
    expect(vuetiful.classes()).toEqual(['vuetiful-tab', 'flex', 'flex-row', 'justify-between']);
  });

  test('class-tab', async () => {
    const wrapper = mount({
      template: /*html*/ `
          <v-tabs class-tab="my-custom-class">
            <template v-slot="tabs">
              <v-tab data-test="vuetiful">Vuetiful</v-tab>
            </template>
          </v-tabs>
        `,
      components: {
        'v-tabs': VTabs,
        'v-tab': VTab,
      },
    });

    const vuetiful = wrapper.find("[data-test='vuetiful']");
    const slotContainer = vuetiful.find("[data-test='slot-container']");
    expect(slotContainer.classes()).toEqual([
      'vuetiful-tab-content',
      'border-t-2',
      'border-x-2',
      'rounded-bl-none',
      'rounded-br-none',
      "border-surface-950-50",
      'rounded-container',
      'text-base',
      'w-full',
      'px-4',
      'py-2',
      'my-custom-class',
    ]);
  });

  test('hover/active', async () => {
    const wrapper = mount({
      template: /*html*/ `
          <v-tabs class-tab-active="my-custom-active-class">
            <template v-slot="tabs">
              <v-tab data-test="vuetiful">Vuetiful</v-tab>
              <v-tab data-test="is">Is</v-tab>
              <v-tab data-test="beautiful">Beautiful</v-tab>
            </template>
          </v-tabs>
        `,
      components: {
        'v-tabs': VTabs,
        'v-tab': VTab,
      },
    });

    const vuetifulSlotContainer = wrapper
      .find("[data-test='vuetiful']")
      .find("[data-test='slot-container']");
    const isSlotContainer = wrapper.find("[data-test='is']").find("[data-test='slot-container']");
    const beautifulSlotContainer = wrapper
      .find("[data-test='beautiful']")
      .find("[data-test='slot-container']");

    expect(vuetifulSlotContainer.classes()).toEqual([
      'vuetiful-tab-content',
      'border-t-2',
      'border-x-2',
      'rounded-bl-none',
      'rounded-br-none',
      "border-surface-950-50",
      'my-custom-active-class',
      'rounded-container',
      'text-base',
      'w-full',
      'px-4',
      'py-2',
    ]);
    expect(isSlotContainer.classes()).toEqual([
      'vuetiful-tab-content',
      'border',
      'border-transparent',
      'hover:border-surface-950-50',
      'rounded-container',
      'text-base',
      'w-full',
      'px-4',
      'py-2',
    ]);
    expect(beautifulSlotContainer.classes()).toEqual([
      'vuetiful-tab-content',
      'border',
      'border-transparent',
      'hover:border-surface-950-50',
      'rounded-container',
      'text-base',
      'w-full',
      'px-4',
      'py-2',
    ]);
  });
});
