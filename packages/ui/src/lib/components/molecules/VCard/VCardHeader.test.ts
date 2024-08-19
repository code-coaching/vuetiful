import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { VCard, VCardHeader } from '..';

describe('VCardHeader', () => {
  test('defaults', async () => {
    const wrapper = mount({
      template: /*html*/ `
        <v-card>
          <v-card-header>John Duck</v-card-header>
        </v-card>
      `,
      components: {
        'v-card': VCard,
        'v-card-header': VCardHeader,
      },
    });

    const separator = wrapper.find("[data-test='vuetiful-card-header-separator']");
    const content = wrapper.find("[data-test='vuetiful-card-header-content']");
    expect(separator.element.tagName).toEqual('HR');
    expect(content.text()).toEqual('John Duck');
    expect(content.classes()).toContain('p-4');
  });

  describe('given hideSeparator is true', () => {
    test('should not show separator', async () => {
      const wrapper = mount({
        template: /*html*/ `
          <v-card hide-separator>
            <v-card-header>John Duck</v-card-header>
          </v-card>
        `,
        components: {
          'v-card': VCard,
          'v-card-header': VCardHeader,
        },
      });

      const separator = wrapper.find("[data-test='vuetiful-card-header-separator']");
      const content = wrapper.find("[data-test='vuetiful-card-header-content']");
      expect(separator.exists()).toEqual(false);
      expect(content.text()).toEqual('John Duck');
    });
  });

  describe('given an image is present', () => {
    test('should not have padding', async () => {
      const wrapper = mount({
        template: /*html*/ `
        <v-card>
          <v-card-header>
            <img src="fakeUrl" />
          </v-card-header>
        </v-card>
      `,
        components: {
          'v-card': VCard,
          'v-card-header': VCardHeader,
        },
      });
      await wrapper.vm.$nextTick();

      const content = wrapper.find("[data-test='vuetiful-card-header-content']");
      expect(content.classes()).not.toContain('p-4');
    });
  });

  describe('given no children', () => {
    test('should not render', async () => {
      const wrapper = mount({
        template: /*html*/ `
        <v-card>
          <v-card-header />
        </v-card>
      `,
        components: {
          'v-card': VCard,
          'v-card-header': VCardHeader,
        },
      });

      expect(wrapper.text()).toEqual('');
    });
  })
});
