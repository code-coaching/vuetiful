import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { VAvatar } from '.';

describe('VAvatar', () => {
  test('defaults', () => {
    const wrapper = mount(VAvatar);

    expect(wrapper.classes()).toContain('vuetiful-avatar');
    expect(wrapper.classes()).toContain('bg-surface-50-950');
    expect(wrapper.classes()).toContain('text-surface-950-50');
  });

  test('custom props', () => {
    const wrapper = mount(VAvatar, {
      props: {
        class: 'bg-blue-500 text-white'
      }
    });

    expect(wrapper.classes()).toContain('bg-blue-500');
    expect(wrapper.classes()).toContain('text-white');
    expect(wrapper.classes()).not.toContain('bg-surface-50-950');
    expect(wrapper.classes()).not.toContain('text-surface-950-50');
  });

  test('initials', () => {
    const wrapper = mount(VAvatar, {
      props: {
        initials: 'JD',
      },
    });

    expect(wrapper.text()).toBe('JD');

    const avatarImage = wrapper.find('.vuetiful-avatar-image');
    expect(avatarImage.exists()).toBe(false);
  });

  test('image', () => {
    const wrapper = mount(VAvatar, {
      props: {
        src: 'https://via.placeholder.com/150',
      },
    });

    const avatarText = wrapper.find('.vuetiful-avatar-text');
    expect(avatarText.exists()).toBe(false);

    const avatarImage = wrapper.find('.vuetiful-avatar-image');
    expect(avatarImage.exists()).toBe(true);
    expect(avatarImage.attributes('src')).toBe('https://via.placeholder.com/150');
  });

  test('image fallback', async () => {
    const wrapper = mount(VAvatar, {
      props: {
        src: 'https://via.placeholder.com/150',
        fallback: '/image/john-duck.png',
      },
    });

    const avatarText = wrapper.find('.vuetiful-avatar-text');
    expect(avatarText.exists()).toBe(false);

    const avatarImage = wrapper.find('.vuetiful-avatar-image');
    avatarImage.trigger('error');
    await wrapper.vm.$nextTick();

    expect(avatarImage.exists()).toBe(true);
    expect(avatarImage.attributes('src')).toBe('/image/john-duck.png');
  });

});
