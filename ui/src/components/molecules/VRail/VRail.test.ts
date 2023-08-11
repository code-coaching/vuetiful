import { VRail } from '@/index';
import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';

test('VRail', () => {
  expect(VRail).toBeTruthy();
});

// TODO: add tests
test('VRail using slot', () => {
  const wrapper = mount(VRail);

  expect(wrapper).toBeTruthy();
});
