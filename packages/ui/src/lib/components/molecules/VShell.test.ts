import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { VShell } from '.';

test('VShell', () => {
  expect(VShell).toBeTruthy();
});

// TODO: add tests
test('VShell using slot', () => {
  const wrapper = mount(VShell);

  expect(wrapper).toBeTruthy();
});
