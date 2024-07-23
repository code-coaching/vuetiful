import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { VChip } from '.';

describe('VChip', () => {
  test('default slot', () => {
    const wrapper = mount({
      template: `<v-chip>John Duck</v-chip>`,
      components: { VChip },
    });

    expect(wrapper.text()).toContain('John Duck');
    expect(wrapper.classes()).toContain('chip');
  });

  test('unstyled', () => {
    const wrapper = mount({
      template: `<v-chip unstyled>John Duck</v-chip>`,
      components: { VChip },
    });

    expect(wrapper.classes()).not.toContain('chip');
  });

  test('preset', () => {
    const wrapper = mount({
      template: `<v-chip preset="primary">John Duck</v-chip>`,
      components: { VChip },
    });

    expect(wrapper.classes()).toContain('preset-primary');
  });
});
