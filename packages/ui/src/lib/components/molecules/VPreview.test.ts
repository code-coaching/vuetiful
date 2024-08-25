import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { VPreview } from '.';

test('VPreview', () => {
  expect(VPreview).toBeTruthy();
});

describe('VPreview', () => {
  test('defaults', () => {
    const wrapper = mount(VPreview);

    expect(wrapper.props()).toEqual({
      background: 'neutral',
      class: undefined,
      classHeader: undefined,
      classPreviewAreaDesktop: undefined,
      classPreviewAreaMobile: undefined,
      classPreviewTab: undefined,
      classPreviewTabArea: undefined,
      classPreviewTabFooter: undefined,
      classPreviewTabSource: undefined,
      classRadioGroupWrapper: undefined,
      classSwatch: undefined,
      classSwatchToggle: undefined,
      classSwatchToggleActive: undefined,
      classSwatchToggleInactive: undefined,
      classSwatches: undefined,
      hideMobileToggle: false,
      hideSwatches: false,
    });
  });

  describe('given code radio item is selected', () => {
    test('renders source code', async () => {
      const wrapper = mount(VPreview, {
        props: {
          regionSource: 'source',
        },
      });

      expect(wrapper.find("[data-test='previewer-source']").exists()).toBe(false);
      expect(wrapper.find("[data-test='previewer-preview']").exists()).toBe(true);

      const radioItemCode = wrapper.find("[data-test='radio-item-code']");
      await radioItemCode.trigger('click');

      expect(wrapper.find("[data-test='previewer-source']").exists()).toBe(true);
      expect(wrapper.find("[data-test='previewer-preview']").exists()).toBe(false);
    });
  });

  describe('given the swatch button is clicked', () => {
    test('renders swatches', async () => {
      const wrapper = mount(VPreview);

      expect(wrapper.find("[data-test='swatches']").exists()).toBe(false);

      const swatchButton = wrapper.find("[data-test='swatch-button']");
      await swatchButton.trigger('click');

      expect(wrapper.find("[data-test='swatches']").exists()).toBe(true);
    });
  });

  describe('given the mobile toggle button is clicked', () => {
    test('renders mobile preview', async () => {
      const wrapper = mount(VPreview);

      const before = wrapper.find("[data-test='previewer-preview']");
      expect(before.classes()).not.toContain('mobile-screen');
      expect(before.classes()).toContain('w-full');

      const radioItemMobile = wrapper.find("[data-test='radio-item-mobile']");
      await radioItemMobile.trigger('click');

      const after = wrapper.find("[data-test='previewer-preview']");
      expect(after.classes()).toContain('mobile-screen');
      expect(after.classes()).not.toContain('w-full');
    });
  });

  describe('given background is changed', () => {
    test('should update the v-model background', async () => {
      const wrapper = mount(VPreview, {
        props: {
          background: 'non-existing',
          hideSwatches: false,
        },
      });

      const showSwatchesButton = wrapper.find('[data-test="swatch-button"]');
      await showSwatchesButton.trigger('click');

      const swatches = wrapper.find('[data-test="swatches"]');
      await swatches.trigger('click');

      const itemTransparent = wrapper.find('.bg-transparent');
      await itemTransparent.trigger('click');

      const itemOpaque = wrapper.find('.bg-surface-100-900');
      expect(itemOpaque.element.innerHTML).not.toContain('https://lucide.dev/icons/circle-check');

      await itemOpaque.trigger('click');
      expect(itemOpaque.element.innerHTML).toContain('https://lucide.dev/icons/circle-check');
    });
  });

  describe('given a footer slot is provided', () => {
    test('should render the footer slot', () => {
      const wrapper = mount(VPreview, {
        slots: {
          footer: 'John Duck',
        },
      });
      expect(wrapper.text()).toContain('John Duck');
    });
  });

  describe('given mobile button should be hidden', () => {
    test('should not render the mobile button', () => {
      const wrapper = mount(VPreview, {
        props: {
          hideMobileToggle: true,
        },
      });
      expect(wrapper.find("[data-test='radio-item-mobile']").exists()).toBe(false);
    });
  });

  describe('given swatches should be hidden', () => {
    test('should not render the swatches', () => {
      const wrapper = mount(VPreview, {
        props: {
          hideSwatches: true,
        },
      });
      expect(wrapper.find("[data-test='swatch-button']").exists()).toBe(false);
    });
  });
});
