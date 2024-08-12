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
});
