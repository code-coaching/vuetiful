import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import VSwitch from './VSwitch.vue';

describe('VSwitch props', () => {
  test('defaults', () => {
    const wrapper = mount(VSwitch);

    expect(wrapper.props()).toEqual({
      modelValue: false,
      disabled: false,
      size: 'md',
      classTrack: 'preset-filled',
      classThumb: 'bg-surface-100-900',
      as: 'button',
      name: '',
      unstyled: false,
    });
  });

  test('size xs', () => {
    const wrapper = mount(VSwitch, {
      props: {
        size: 'xs',
      },
    });

    const track = wrapper.find("[data-test='switch-track']");
    expect(track.attributes('class')).toContain('w-8 h-4');
  });

  test('size sm', () => {
    const wrapper = mount(VSwitch, {
      props: {
        size: 'sm',
      },
    });

    const track = wrapper.find("[data-test='switch-track']");
    expect(track.attributes('class')).toContain('w-12 h-6');
  });

  test('size md', () => {
    const wrapper = mount(VSwitch, {
      props: {
        size: 'md',
      },
    });

    const track = wrapper.find("[data-test='switch-track']");
    expect(track.attributes('class')).toContain('w-16 h-8');
  });

  test('size lg', () => {
    const wrapper = mount(VSwitch, {
      props: {
        size: 'lg',
      },
    });

    const track = wrapper.find("[data-test='switch-track']");
    expect(track.attributes('class')).toContain('w-20 h-10');
  });

  test('size xl', () => {
    const wrapper = mount(VSwitch, {
      props: {
        size: 'xl',
      },
    });

    const track = wrapper.find("[data-test='switch-track']");
    expect(track.attributes('class')).toContain('w-24 h-12');
  });
});

describe('VSwitch events', () => {
  test('update:modelValue', async () => {
    const wrapper = mount(VSwitch, {
      props: {
        modelValue: false,
      },
    });

    await wrapper.setProps({ modelValue: true });
    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
  });
});

describe('VSwitch default slot', () => {
  test('default slot', () => {
    const wrapper = mount(VSwitch, {
      slots: {
        default: 'John Duck',
      },
    });

    expect(wrapper.text()).toContain('John Duck');
  });
});
