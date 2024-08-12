import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { ref } from 'vue';
import VListbox from './VListbox.vue';
import VListboxItem from './VListboxItem.vue';

describe('VListboxItem props', () => {
  test('defaults', async () => {
    const listboxValue = ref('John');
    const wrapper = mount({
      setup() {
        return { listboxValue };
      },
      template: /* html */ `
        <v-listbox v-model="listboxValue">
          <v-listbox-item value="John">John Duck</v-listbox-item>
          <v-listbox-item value="Jane">Jane Duck</v-listbox-item>
        </v-listbox>
      `,
      components: {
        'v-listbox': VListbox,
        'v-listbox-item': VListboxItem,
      },
    });

    const listbox = wrapper.find("[data-test='listbox']");
    await listbox.find('button').trigger('click');

    const listboxItems = listbox.findAll("[data-test='listbox-item']");
    const selectedItem = listboxItems[0];
    const normalItem = listboxItems[1];
    expect(selectedItem.classes()).toEqual([
      'vuetiful-listbox-item',
      'rounded',
      'px-4',
      'py-1',
      'text-base',
      'preset-filled-surface-800-200',
      'cursor-pointer',
    ]);
    expect(normalItem.classes()).toEqual([
      'vuetiful-listbox-item',
      'rounded',
      'px-4',
      'py-1',
      'text-base',
      'hover:preset-outlined-surface-800-200',
      'cursor-pointer',
    ]);
  });

  test('disabled', async () => {
    const listboxValue = ref('John');
    const wrapper = mount({
      setup() {
        return { listboxValue };
      },
      template: /* html */ `
        <v-listbox v-model="listboxValue">
          <v-listbox-item value="John" disabled>John Duck</v-listbox-item>
          <v-listbox-item value="Jane">Jane Duck</v-listbox-item>
        </v-listbox>
      `,
      components: {
        'v-listbox': VListbox,
        'v-listbox-item': VListboxItem,
      },
    });

    const listbox = wrapper.find("[data-test='listbox']");
    await listbox.find('button').trigger('click');

    const listboxItems = listbox.findAll("[data-test='listbox-item']");
    const disabledItem = listboxItems[0];
    const normalItem = listboxItems[1];
    expect(disabledItem.classes()).toEqual([
      'vuetiful-listbox-item',
      'rounded',
      'px-4',
      'py-1',
      'text-base',
      'preset-filled-surface-800-200',
      'pointer-events-none',
      'opacity-50',
    ]);
    expect(normalItem.classes()).toEqual([
      'vuetiful-listbox-item',
      'rounded',
      'px-4',
      'py-1',
      'text-base',
      'hover:preset-outlined-surface-800-200',
      'cursor-pointer',
    ]);
  })

  test('focussed but not selected', async () => {
    const listboxValue = ref('John');
    const wrapper = mount({
      setup() {
        return { listboxValue };
      },
      template: /* html */ `
        <v-listbox v-model="listboxValue">
          <v-listbox-item value="John">John Duck</v-listbox-item>
          <v-listbox-item value="Jane">Jane Duck</v-listbox-item>
        </v-listbox>
      `,
      components: {
        'v-listbox': VListbox,
        'v-listbox-item': VListboxItem,
      },
     
    });

    const listbox = wrapper.find("[data-test='listbox']");
    await listbox.find('button').trigger('click');

    const listboxItems = listbox.findAll("[data-test='listbox-item']");
    const selectedItem = listboxItems[0];
    await selectedItem.trigger('mouseenter');
    const normalItem = listboxItems[1];
    await normalItem.trigger('mouseenter');

    expect(normalItem.classes()).toEqual([
      'vuetiful-listbox-item',
      'rounded',
      'px-4',
      'py-1',
      'text-base',
      'hover:preset-outlined-surface-800-200',
      'cursor-pointer',
    ]);
    expect(selectedItem.classes()).toEqual([
      'vuetiful-listbox-item',
      'rounded',
      'px-4',
      'py-1',
      'text-base',
      'preset-filled-surface-800-200',
      'cursor-pointer',
    ]);
  }) 
});
