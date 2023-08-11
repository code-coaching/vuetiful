import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { VBadge } from '.';

test('VBadge', () => {
  expect(VBadge).toBeTruthy();
});

test('VBadge using slot', () => {
  const wrapper = mount(VBadge, {
    slots: {
      default: 'John Duck',
    },
  });

  expect(wrapper.text()).toContain('John Duck');
  expect(wrapper.classes()).toContain('badge');
});

test('VBadge unstyled', () => {
  const wrapper = mount(VBadge, {
    props: {
      unstyled: true,
    },
  });

  expect(wrapper.classes()).not.toContain('badge');
});
