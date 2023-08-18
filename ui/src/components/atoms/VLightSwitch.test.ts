import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';
import { ref } from 'vue';
import { VLightSwitch } from '.';

const applyMode = vi.fn();
const chosenMode = ref('dark');
const MODE = {
  LIGHT: 'light',
  DARK: 'dark',
};
vi.mock('../../services/dark-mode.service', () => ({
  useDarkMode: () => ({
    applyMode,
    chosenMode,
    MODE,
  }),
}));

describe('VLightSwitch', () => {
  test('toggle dark to light', async () => {
    const wrapper = mount(VLightSwitch);
    await wrapper.trigger('click');
    expect(applyMode).toHaveBeenCalledWith(MODE.LIGHT);
  });

  test('toggle light to dark', async () => {
    chosenMode.value = 'light';
    const wrapper = mount(VLightSwitch);
    await wrapper.trigger('click');
    expect(applyMode).toHaveBeenCalledWith(MODE.DARK);
  });

  test('svg dark/light', async () => {
    chosenMode.value = MODE.DARK;
    const wrapper = mount(VLightSwitch);
    const path = wrapper.find('path');
    expect(path.attributes().d).toBe(wrapper.vm.svgPath.moon);

    chosenMode.value = MODE.LIGHT;
    await wrapper.vm.$nextTick();
    expect(path.attributes().d).toBe(wrapper.vm.svgPath.sun);
  });

  test('keydown Enter', async () => {
    const wrapper = mount(VLightSwitch);
    const preventDefaultSpy = vi.fn();
    const event = { code: 'Enter', preventDefault: preventDefaultSpy };
    await wrapper.trigger('keydown', event);
    expect(applyMode).toHaveBeenCalledWith(MODE.LIGHT);
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  test('keydown Space', async () => {
    const wrapper = mount(VLightSwitch);
    const preventDefaultSpy = vi.fn();
    const event = { code: 'Space', preventDefault: preventDefaultSpy };
    await wrapper.trigger('keydown', event);
    expect(applyMode).toHaveBeenCalledWith(MODE.LIGHT);
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  test('keydown other', async () => {
    applyMode.mockClear();
    const wrapper = mount(VLightSwitch);
    await wrapper.trigger('keydown', { key: 'a' });
    expect(applyMode).not.toHaveBeenCalled();
  });
});
