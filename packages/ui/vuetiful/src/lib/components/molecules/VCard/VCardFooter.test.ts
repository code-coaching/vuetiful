import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { VCard, VCardFooter } from '..';

describe('VCardFooter', () => {
  test('unstyled', () => {
    const wrapper = mount({
      template: /*html*/ `
        <v-card>
          <v-card-footer unstyled>John Duck</v-card-footer>
        </v-card>
      `,
      components: {
        'v-card': VCard,
        'v-card-footer': VCardFooter,
      },
    });

    const content = wrapper.find("[data-test='vuetiful-card-footer-content']");
    expect(content.text()).toEqual('John Duck');
    expect(content.classes()).not.toContain('p-4');
  });

  test('defaults', async () => {
    const wrapper = mount({
      template: /*html*/ `
        <v-card>
          <v-card-footer>John Duck</v-card-footer>
        </v-card>
      `,
      components: {
        'v-card': VCard,
        'v-card-footer': VCardFooter,
      },
    });

    const separator = wrapper.find("[data-test='vuetiful-card-footer-separator']");
    const content = wrapper.find("[data-test='vuetiful-card-footer-content']");
    expect(separator.element.tagName).toEqual('HR');
    expect(content.text()).toEqual('John Duck');
  });

  describe('given hideSeparator is true', () => {
    test('should not show separator', async () => {
      const wrapper = mount({
        template: /*html*/ `
          <v-card hide-separator>
            <v-card-footer>John Duck</v-card-footer>
          </v-card>
        `,
        components: {
          'v-card': VCard,
          'v-card-footer': VCardFooter,
        },
      });

      const separator = wrapper.find("[data-test='vuetiful-card-footer-separator']");
      const content = wrapper.find("[data-test='vuetiful-card-footer-content']");
      expect(separator.exists()).toEqual(false);
      expect(content.text()).toEqual('John Duck');
    });
  });
});
