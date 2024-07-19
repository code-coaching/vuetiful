import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { VCard, VCardBody } from '..';

describe('VCardBody', () => {
  test('unstyled', () => {
    const wrapper = mount({
      template: /*html*/ `
        <v-card>
          <v-card-body unstyled>John Duck</v-card-body>
        </v-card>
      `,
      components: {
        'v-card': VCard,
        'v-card-body': VCardBody,
      },
    });

    const content = wrapper.find("[data-test='vuetiful-card-body-content']");
    expect(content.text()).toEqual('John Duck');
    expect(content.classes()).not.toContain('p-4');
  });

  test('defaults', async () => {
    const wrapper = mount({
      template: /*html*/ `
        <v-card>
          <v-card-body>John Duck</v-card-body>
        </v-card>
      `,
      components: {
        'v-card': VCard,
        'v-card-body': VCardBody,
      },
    });

    expect(wrapper.text()).toEqual('John Duck');
  });
});
