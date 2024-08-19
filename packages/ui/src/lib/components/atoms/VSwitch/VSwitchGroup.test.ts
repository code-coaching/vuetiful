import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import VSwitchGroup from './VSwitchGroup.vue';

test('VSwitchGroup using slot', () => {
  const wrapper = mount(VSwitchGroup as any, {
    slots: {
      default: 'John Duck',
    },
  });

  expect(wrapper.text()).toContain('John Duck');
});

describe('VSwitchGroup props', () => {
  test("custom 'as' prop", () => {
    const wrapper = mount(VSwitchGroup as any, {
      props: {
        as: 'div',
      },
    });

    const divEl = wrapper.find('div');
    expect(divEl).not.toBeUndefined();
  });
});
