import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import VRadioGroup from './VRadioGroup.vue';
import VRadioLabel from './VRadioLabel.vue';

test('VRadioLabel using slot', () => {
  const wrapper = mount({
    template: `
      <v-radio-group>
        <v-radio-label>John Duck</v-radio-label>
      </v-radio-group>
    `,
    components: {
      'v-radio-label': VRadioLabel,
      'v-radio-group': VRadioGroup,
    },
  });

  expect(wrapper.text()).toContain('John Duck');
});

describe('VRadioLabel props', () => {
  test("default 'as' prop", () => {
    const wrapper = mount({
      template: `
        <v-radio-group>
          <v-radio-label data-test="label">John Duck</v-radio-label>
        </v-radio-group>
      `,
      components: {
        'v-radio-label': VRadioLabel,
        'v-radio-group': VRadioGroup,
      },
    });

    const label = wrapper.find("[data-test='label']");
    expect(label.element).toBeInstanceOf(HTMLParagraphElement);
  });
  test("custom 'as' prop", () => {
    const wrapper = mount({
      template: `
        <v-radio-group>
          <v-radio-label as="div" data-test="label">John Duck</v-radio-label>
        </v-radio-group>
      `,
      components: {
        'v-radio-label': VRadioLabel,
        'v-radio-group': VRadioGroup,
      },
    });

    const label = wrapper.find("[data-test='label']");
    expect(label.element).toBeInstanceOf(HTMLDivElement);
  });
});
