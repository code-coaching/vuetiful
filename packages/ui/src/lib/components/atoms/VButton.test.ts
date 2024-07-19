import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';
import { VButton } from '.';

test('VButton', () => {
  expect(VButton).toBeTruthy();
});

test('VButton using slot', () => {
  const wrapper = mount(VButton, {
    slots: {
      default: 'John Duck',
    },
  });

  expect(wrapper.text()).toContain('John Duck');
});

describe('VButton props', () => {
  describe('size', () => {
    test('xs', () => {
      const wrapper = mount(VButton, {
        props: {
          size: 'xs',
        },
      });
      expect(wrapper.classes()).toContain('px-2.5');
      expect(wrapper.classes()).toContain('py-1.5');
      expect(wrapper.classes()).toContain('text-xs');
    });

    test('sm', () => {
      const wrapper = mount(VButton, {
        props: {
          size: 'sm',
        },
      });
      expect(wrapper.classes()).toContain('px-3');
      expect(wrapper.classes()).toContain('py-2');
      expect(wrapper.classes()).toContain('text-sm');
      expect(wrapper.classes()).toContain('leading-4');
    });

    test('md', () => {
      const wrapper = mount(VButton, {
        props: {
          size: 'md',
        },
      });
      expect(wrapper.classes()).toContain('px-4');
      expect(wrapper.classes()).toContain('py-2');
      expect(wrapper.classes()).toContain('text-sm');
    });

    test('lg', () => {
      const wrapper = mount(VButton, {
        props: {
          size: 'lg',
        },
      });
      expect(wrapper.classes()).toContain('px-4');
      expect(wrapper.classes()).toContain('py-2');
      expect(wrapper.classes()).toContain('text-base');
    });

    test('xl', () => {
      const wrapper = mount(VButton, {
        props: {
          size: 'xl',
        },
      });
      expect(wrapper.classes()).toContain('px-6');
      expect(wrapper.classes()).toContain('py-3');
      expect(wrapper.classes()).toContain('text-base');
    });
  });

  describe('given icon is true', () => {
    test('should have btn-icon class, not have btn class', () => {
      const wrapper = mount(VButton, {
        props: {
          icon: true,
        },
      });
      expect(wrapper.classes()).toContain('btn-icon');
      expect(wrapper.classes()).not.toContain('btn');
    });
  });
  describe('given icon is false', () => {
    test('should have btn class, not have btn-icon class', () => {
      const wrapper = mount(VButton, {
        props: {
          icon: false,
        },
      });
      expect(wrapper.classes()).not.toContain('btn-icon');
      expect(wrapper.classes()).toContain('btn');
    });
  });
});

describe('VButton events', () => {
  describe('given click event', () => {
    test('should preventDefault and emit click event', async () => {
      const wrapper = mount(VButton);
      const clickEvent = { preventDefault: () => {} };
      const preventDefaultSpy = vi.spyOn(clickEvent, 'preventDefault');
      wrapper.trigger('click', clickEvent);
      await wrapper.vm.$nextTick();
      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(wrapper.emitted('click')).toBeTruthy();
    });
  });
});

describe('VButton a11y', () => {
  describe('a11y role', () => {
    test('should have role button', () => {
      const wrapper = mount(VButton);
      expect(wrapper.attributes('role')).toBe('button');
    });
  });
  describe('a11y tabindex', () => {
    test('should have tabindex 0', () => {
      const wrapper = mount(VButton);
      expect(wrapper.attributes('tabindex')).toBe('0');
    });
  });
  describe('given keydown event', () => {
    describe('given key is Enter', () => {
      test('should preventDefault and emit click event', async () => {
        const wrapper = mount(VButton);
        const keydownEvent = { key: 'Enter', preventDefault: () => {} };
        const preventDefaultSpy = vi.spyOn(keydownEvent, 'preventDefault');
        wrapper.trigger('keydown', keydownEvent);
        await wrapper.vm.$nextTick();
        expect(preventDefaultSpy).toHaveBeenCalled();
        expect(wrapper.emitted('click')).toBeTruthy();
      });
    });

    describe('given key is Space', () => {
      test('should preventDefault and not emit click event', async () => {
        const wrapper = mount(VButton);
        const keydownEvent = { key: ' ', preventDefault: () => {} };
        const preventDefaultSpy = vi.spyOn(keydownEvent, 'preventDefault');
        wrapper.trigger('keydown', keydownEvent);
        await wrapper.vm.$nextTick();
        expect(preventDefaultSpy).toHaveBeenCalled();
        expect(wrapper.emitted('click')).toBeFalsy();
      });
    });

    describe('given key is not Enter or Space', () => {
      test('should not preventDefault and not emit click event', async () => {
        const wrapper = mount(VButton);
        const keydownEvent = { key: 'a', preventDefault: () => {} };
        const preventDefaultSpy = vi.spyOn(keydownEvent, 'preventDefault');
        wrapper.trigger('keydown', keydownEvent);
        await wrapper.vm.$nextTick();
        expect(preventDefaultSpy).not.toHaveBeenCalled();
        expect(wrapper.emitted('click')).toBeFalsy();
      });
    });
  });

  describe('given keyup event', () => {
    describe('given key is Space', () => {
      test('should preventDefault and emit click event', async () => {
        const wrapper = mount(VButton);
        const keyupEvent = { key: ' ', preventDefault: () => {} };
        const preventDefaultSpy = vi.spyOn(keyupEvent, 'preventDefault');
        wrapper.trigger('keyup', keyupEvent);
        await wrapper.vm.$nextTick();
        expect(preventDefaultSpy).toHaveBeenCalled();
        expect(wrapper.emitted('click')).toBeTruthy();
      });
    });
  });
});
