import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { VTab, VTabPanel, VTabs } from '..';

describe('VTabs', () => {
  test('hide separator', () => {
    const wrapper = mount({
      template: /*html*/ `
          <v-tabs hide-separator></v-tabs>
        `,
      components: {
        'v-tabs': VTabs,
      },
    });

    const separator = wrapper.find("[data-test='vuetiful-separator']");
    expect(separator.exists()).toBeFalsy();
  });

  test('default props', () => {
    const wrapper = mount({
      template: /*html*/ `
          <v-tabs>
            <template v-slot:tabs>
              <v-tab>John Duck</v-tab>
            </template>
            <v-tab-panel>John Duck Panel</v-tab-panel>
          </v-tabs>
        `,
      components: {
        'v-tabs': VTabs,
        'v-tab': VTab,
        'v-tab-panel': VTabPanel,
      },
    });

    const tabList = wrapper.find("[data-test='vuetiful-tab-list']");
    expect(tabList.classes()).toEqual([
      'vuetiful-tab-list',
      'flex',
      '!rounded-bl-none',
      '!rounded-br-none',
      'rounded-container',
    ]);
    expect(tabList.classes()).not.toContain('flex-col');

    const tabPanels = wrapper.find("[data-test='vuetiful-tab-panels']");
    expect(tabPanels.classes()).toEqual([
      'vuetiful-tab-panels',
      'p-4',
      '!rounded-tl-none',
      '!rounded-tr-none',
      'rounded-container',
    ]);
  });

  test('vertical', () => {
    const wrapper = mount({
      template: /*html*/ `
          <v-tabs vertical>
            <template v-slot:tabs>
              <v-tab>Tab 1</v-tab>
            </template>
            <v-tab-panel>Panel 1</v-tab-panel>
          </v-tabs>
        `,
      components: {
        'v-tabs': VTabs,
        'v-tab': VTab,
        'v-tab-panel': VTabPanel,
      },
    });
    const tabList = wrapper.find("[data-test='vuetiful-tab-list']");
    expect(tabList.classes()).toEqual([
      'vuetiful-tab-list',
      'flex',
      'flex-col',
      '!rounded-br-none',
      '!rounded-tr-none',
      'rounded-container',
    ]);

    const tabPanels = wrapper.find("[data-test='vuetiful-tab-panels']");
    expect(tabPanels.classes()).toEqual([
      'vuetiful-tab-panels',
      'p-4',
      '!rounded-bl-none',
      '!rounded-tl-none',
      'rounded-container',
    ]);
  });
});
