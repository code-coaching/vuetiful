import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { VAlert } from '..';

describe('VAlert', () => {
  test('types', () => {
    const wrapper = mount({
      template: /*html*/ `
          <v-alert data-test="default"></v-alert>
          <v-alert data-test="info" type="info"></v-alert>
          <v-alert data-test="success" type="success"></v-alert>
          <v-alert data-test="warning" type="warning"></v-alert>
          <v-alert data-test="error" type="error"></v-alert>
        `,
      components: {
        'v-alert': VAlert,
      },
    });

    const defaultAlert = wrapper.find('[data-test=default]');
    expect(defaultAlert.classes()).not.toContain('variant-filled-primary');

    const infoAlert = wrapper.find('[data-test=info]');
    expect(infoAlert.classes()).toContain('variant-filled');

    const successAlert = wrapper.find('[data-test=success]');
    expect(successAlert.classes()).toContain('variant-filled-success');

    const warningAlert = wrapper.find('[data-test=warning]');
    expect(warningAlert.classes()).toContain('variant-filled-warning');
  });

  test('unstyled', () => {
    const wrapper = mount(VAlert, {
      props: {
        unstyled: true,
      },
    });

    expect(wrapper.classes()).toEqual(['vuetiful-alert', 'flex']);
  });

  describe('given close icon is clicked', () => {
    test('should emit close', async () => {
      const wrapper = mount(VAlert, { props: { showClose: true } });
      await wrapper.find('[data-test=close]').trigger('click');
      expect(wrapper.emitted()['close'][0]).toEqual([]);

      await wrapper.find('[data-test=close]').trigger('keydown', { key: 'Enter' });
      expect(wrapper.emitted()['close'][0]).toEqual([]);

      await wrapper.find('[data-test=close]').trigger('keydown', { key: ' ' });
      expect(wrapper.emitted()['close'][0]).toEqual([]);
    });
  });

  describe('given a pre slot is provided', () => {
    test('should render the pre slot', () => {
      const wrapper = mount(VAlert, {
        slots: {
          pre: 'John Duck',
        },
      });
      expect(wrapper.text()).toContain('John Duck');
    });
  });

  describe('given a actions slot is provided', () => {
    test('should render the actions slot', () => {
      const wrapper = mount(VAlert, {
        slots: {
          actions: 'John Duck',
        },
      });
      expect(wrapper.text()).toContain('John Duck');
    });
  });

  describe('given hide-icon prop is present', () => {
    test('should not render an icon', () => {
      const wrapper = mount(VAlert, {
        props: {
          hideIcon: true,
        },
      });
      expect(wrapper.findAll('.icon').length).toBe(0);
    });
  });

  describe('given show-close prop is present', () => {
    test('should render a close icon', () => {
      const wrapper = mount(VAlert, {
        props: {
          showClose: true,
        },
      });
      expect(wrapper.find('[data-test=close]').exists()).toBe(true);
    });
  });
});
