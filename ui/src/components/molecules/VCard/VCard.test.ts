import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { VCard } from '..';

describe('VCard', () => {
  test('defaults', async () => {
    const wrapper = mount(VCard);
    expect(wrapper.props()).toEqual({
      background: 'bg-surface-200-700-token',
      clickable: false,
      hideSeparator: false,
      text: 'text-surface-900-50-token',
      unstyled: false,
    });
  });

  describe('given the card is clicked', () => {
    describe('given the card is not clickable', () => {
      test('should not emit click', async () => {
        const wrapper = mount(VCard, { props: { clickable: false } });
        expect(wrapper.attributes()['tabindex']).toBeUndefined();
        await wrapper.trigger('click');
        expect(wrapper.emitted()['click']).toBeUndefined();

        await wrapper.trigger('keydown', { key: 'Enter' });
        expect(wrapper.emitted()['click']).toBeUndefined();

        await wrapper.trigger('keydown', { key: ' ' });
        expect(wrapper.emitted()['click']).toBeUndefined();
      });
    });
    describe('given the card is clickable', () => {
      test('should emit click', async () => {
        const wrapper = mount(VCard, { props: { clickable: true } });
        expect(wrapper.attributes()['tabindex']).toEqual('0');
        await wrapper.trigger('click');
        expect(wrapper.emitted()['click'].length).toEqual(1);

        await wrapper.trigger('keydown', { key: 'Enter' });
        expect(wrapper.emitted()['click'].length).toEqual(2);

        await wrapper.trigger('keydown', { key: ' ' });
        expect(wrapper.emitted()['click'].length).toEqual(3);
      });
    });
  });
});
