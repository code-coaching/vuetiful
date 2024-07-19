import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { ref } from 'vue';
import { VListboxItem } from '..';
import VListbox from './VListbox.vue';

describe('VListbox', () => {
  test('default props', () => {
    const wrapper = mount(VListbox);

    expect(wrapper.props()).toEqual({
      modelValue: undefined,
      classLabel: '',
      textButton: 'Select an option',
      classButton: '',
      classItem: '',
      classItems: '',
      horizontal: false,
      multiple: false,
      active: 'variant-filled',
      hover: 'hover:variant-ghost',
      background: 'bg-surface-200-700-token',
      text: 'text-surface-900 dark:text-surface-50',
      unstyled: false,
      by: undefined,
      display: undefined,
      textLabel: undefined,
    });
  });

  describe('modelValue', () => {
    test('should update modelValue', async () => {
      const choice = ref();
      const wrapper = mount({
        setup() {
          return { choice };
        },
        template: /*html*/ `
          <v-listbox class="w-60" v-model="choice">
            <v-listbox-item data-test="vuetiful" value="vuetiful">Vuetiful</v-listbox-item>
            <v-listbox-item data-test="is" value="is">Is</v-listbox-item>
            <v-listbox-item data-test="beautiful" value="beautiful">Beautiful</v-listbox-item>
          </v-listbox>
        `,
        components: {
          'v-listbox': VListbox,
          'v-listbox-item': VListboxItem,
        },
      });

      const listbox = wrapper.find("[data-test='listbox']");
      await listbox.find("[data-test='listbox-button']").trigger('click');
      await listbox.find("[data-test='vuetiful']").trigger('click');
      expect(choice.value).toBe('vuetiful');
    });
  });

  describe('object modelValue', () => {
    test('should use display prop', async () => {
      const choice = ref();
      const wrapper = mount({
        setup() {
          return { choice };
        },
        template: /*html*/ `
          <v-listbox class="w-60" v-model="choice" by="id" display="name">
            <v-listbox-item data-test="vuetiful" :value="{ name: 'vuetiful', id: 0 }">Vuetiful</v-listbox-item>
            <v-listbox-item data-test="is" :value="{ name: 'is', id: 1 }">Is</v-listbox-item>
            <v-listbox-item data-test="beautiful" :value="{ name: 'Beautiful', id: 2 }">Beautiful</v-listbox-item>
          </v-listbox>
        `,
        components: {
          'v-listbox': VListbox,
          'v-listbox-item': VListboxItem,
        },
      });

      const listbox = wrapper.find("[data-test='listbox']");
      const button = listbox.find("[data-test='listbox-button']");
      expect(button.text()).toBe('Select an option');
      await button.trigger('click');
      await listbox.find("[data-test='vuetiful']").trigger('click');

      expect(choice.value).toEqual({ name: 'vuetiful', id: 0 });
      expect(button.text()).toBe('vuetiful');
    });
  });

  describe('multiple', () => {
    test('should update modelValue and button text', async () => {
      const choice = ref([]);
      const wrapper = mount({
        setup() {
          return { choice };
        },
        template: /*html*/ `
          <v-listbox class="w-60" v-model="choice" multiple>
            <v-listbox-item data-test="vuetiful" value="vuetiful">Vuetiful</v-listbox-item>
            <v-listbox-item data-test="is" value="is">Is</v-listbox-item>
            <v-listbox-item data-test="beautiful" value="beautiful">Beautiful</v-listbox-item>
          </v-listbox>
        `,
        components: {
          'v-listbox': VListbox,
          'v-listbox-item': VListboxItem,
        },
      });

      const listbox = wrapper.find("[data-test='listbox']");
      const button = listbox.find("[data-test='listbox-button']");
      expect(button.text()).toBe('Select an option');

      await button.trigger('click');
      await listbox.find("[data-test='vuetiful']").trigger('click');
      expect(choice.value).toEqual(['vuetiful']);
      expect(button.text()).toBe('vuetiful');

      await listbox.find("[data-test='is']").trigger('click');
      expect(choice.value).toEqual(['vuetiful', 'is']);
      expect(button.text()).toBe('2 options selected');
    });
  });

  describe('unstyled', () => {
    test('should only have vuetiful- classes', async () => {
      const wrapper = mount(VListbox, {
        props: {
          unstyled: true,
        },
      });

      const listbox = wrapper.find("[data-test='listbox']");
      await listbox.find("[data-test='listbox-button']").trigger('click');
      const listboxItems = wrapper.find("[data-test='listbox-items']");

      expect(listbox.classes()).toEqual(['vuetiful-listbox']);
      expect(listboxItems.classes()).toEqual([
        'z-10',
        'bg-surface-200-700-token',
        'text-surface-900',
        'dark:text-surface-50',
        'flex-col',
      ]);
    });
  });
});
