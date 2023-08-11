import { mount } from '@vue/test-utils';
import { expect, test, vi } from 'vitest';
import { VLightSwitch } from '.';
import { useDarkMode } from '@/services';

const { MODE } = useDarkMode();

const matchMediaMock = (matches: boolean) => vi.fn(() => ({ matches, onchange: vi.fn() }));

test('VLightSwitch', () => {
  expect(VLightSwitch).toBeTruthy();
});

// TODO: add tests
test('VLightSwitch using slot', () => {
  window.matchMedia = matchMediaMock(MODE.LIGHT) as any;
  const wrapper = mount(VLightSwitch);

  expect(wrapper).toBeTruthy();
});
