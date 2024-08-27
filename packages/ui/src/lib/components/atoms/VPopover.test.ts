import { VPopover } from '@/lib'; // adjust this path as necessary
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { nextTick, ref } from 'vue';

// Mock for vClickOutsideGroup directive
vi.mock('@/lib/directives', () => ({
  vClickOutsideGroup: vi.fn(),
}));

describe('VPopover.vue', () => {
  it('shows and hides popover on mouseenter mouseleave', async () => {
    const anchorElement = document.createElement('div');
    const anchor = ref(anchorElement);

    const wrapper = mount(VPopover, {
      props: {
        anchor: () => anchor as any,
      },
      slots: {
        default: 'John Duck',
      },
    });

    const enter = new MouseEvent('mouseenter');
    anchorElement.dispatchEvent(enter);
    await nextTick();
    expect(wrapper.html()).toContain('John Duck');

    const leave = new MouseEvent('mouseleave');
    anchorElement.dispatchEvent(leave);
    await nextTick();
    expect(wrapper.html()).not.toContain('John Duck');
  });

  it('shows and hides popover on click', async () => {
    const anchorElement = document.createElement('div');
    const anchor = ref(anchorElement);

    /**
     * Because vClickOutsideGroup is mocked, we do not need to worry about setting an id
     */
    const wrapper = mount(VPopover, {
      props: {
        anchor: () => anchor as any,
        showOnClick: true,
      },
      slots: {
        default: 'John Duck',
      },
    });

    const clickShow = new Event('click');
    anchorElement.dispatchEvent(clickShow);
    await nextTick();
    expect(wrapper.html()).toContain('John Duck');

    const clickHide = new Event('click');
    anchorElement.dispatchEvent(clickHide);
    await nextTick();
    expect(wrapper.html()).not.toContain('John Duck');
  });

  it('should work with custom component as anchor', async () => {
    const anchorElement = {
      $el: document.createElement('div'),
    };
    const anchor = ref(anchorElement);

    const wrapper = mount(VPopover, {
      props: {
        anchor: () => anchor as any,
      },
      slots: {
        default: 'John Duck',
      },
    });

    const enter = new MouseEvent('mouseenter');
    anchorElement.$el.dispatchEvent(enter);
    await nextTick();
    expect(wrapper.html()).toContain('John Duck');

    const leave = new MouseEvent('mouseleave');
    anchorElement.$el.dispatchEvent(leave);
    await nextTick();
    expect(wrapper.html()).not.toContain('John Duck');
  });
});
