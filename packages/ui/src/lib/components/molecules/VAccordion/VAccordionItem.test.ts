import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { VAccordion, VAccordionItem } from '..';

describe('VAccordionItem', () => {
  test('defaults', async () => {
    const wrapper = mount({
      template: /*html*/ `
        <v-accordion>
          <v-accordion-item title="Vuetiful">John Duck</v-accordion-item>
          <v-accordion-item title="Is">Janine Duck</v-accordion-item>
        </v-accordion>`,
      components: {
        'v-accordion': VAccordion,
        'v-accordion-item': VAccordionItem,
      },
    });

    const accordionItems = wrapper.findAllComponents(VAccordionItem);
    accordionItems.forEach((accordionItem) => {
      expect(accordionItem.classes()).toEqual(['vuetiful-accordion-item']);

      const accordionItemButton = accordionItem.find('.vuetiful-accordion-item-button');
      expect(accordionItemButton.classes()).toEqual([
        'items-center',
        'justify-between',
        'p-4',
        'py-2',
        'rounded-container',
        'hover:cursor-pointer',
        'bg-surface-200-800',
        'hover:preset-soft',
        'vuetiful-accordion-item-button',
        'flex',
        'w-full',
      ]);

      const accordionItemTitle = accordionItem.find('.vuetiful-accordion-title');
      expect(accordionItemTitle.text()).toEqual(accordionItem.props().title);
    });
  });

  test('unstyled', async () => {
    const wrapper = mount({
      template: /*html*/ `
        <v-accordion>
          <v-accordion-item title="Vuetiful" unstyled>John Duck</v-accordion-item>
          <v-accordion-item title="Is" unstyled>Janine Duck</v-accordion-item>
        </v-accordion>`,
      components: {
        'v-accordion': VAccordion,
        'v-accordion-item': VAccordionItem,
      },
    });

    const accordionItems = wrapper.findAllComponents(VAccordionItem);
    accordionItems.forEach((accordionItem) => {
      expect(accordionItem.classes()).toEqual(['vuetiful-accordion-item']);

      const accordionItemButton = accordionItem.find('.vuetiful-accordion-item-button');
      expect(accordionItemButton.classes()).toEqual([
        'bg-surface-200-800',
        'hover:preset-soft',
        'vuetiful-accordion-item-button',
        'flex',
        'w-full',
      ]);

      const accordionItemTitle = accordionItem.find('.vuetiful-accordion-title');
      expect(accordionItemTitle.text()).toEqual(accordionItem.props().title);
    });
  });

  test('open', async () => {
    const wrapper = mount({
      template: /*html*/ `
        <v-accordion>
          <v-accordion-item title="Vuetiful" open>John Duck</v-accordion-item>
          <v-accordion-item title="Is">Janine Duck</v-accordion-item>
        </v-accordion>`,
      components: {
        'v-accordion': VAccordion,
        'v-accordion-item': VAccordionItem,
      },
    });

    const accordionItems = wrapper.findAllComponents(VAccordionItem);
    const accordionItemButtonOne = accordionItems[0].find('.vuetiful-accordion-item-button');
    const accordionItemButtonTwo = accordionItems[1].find('.vuetiful-accordion-item-button');

    await accordionItemButtonOne.trigger('click');

    expect(accordionItemButtonOne.classes()).toEqual([
      '!rounded-bl-none',
      '!rounded-br-none',
      'items-center',
      'justify-between',
      'p-4',
      'py-2',
      'rounded-container',
      'hover:cursor-pointer',
      'bg-surface-200-800',
      'hover:preset-soft',
      'vuetiful-accordion-item-button',
      'flex',
      'w-full',
    ]);
    expect(accordionItemButtonTwo.classes()).toEqual([
      'items-center',
      'justify-between',
      'p-4',
      'py-2',
      'rounded-container',
      'hover:cursor-pointer',
      'bg-surface-200-800',
      'hover:preset-soft',
      'vuetiful-accordion-item-button',
      'flex',
      'w-full',
    ]);

    const accordionItemPanelOne = accordionItems[0].find('.vuetiful-accordion-item-panel');

    expect(accordionItemPanelOne.classes()).toEqual([
      'vuetiful-accordion-item-panel',
      '!rounded-tl-none',
      '!rounded-tr-none',
      'p-4',
      'py-2',
      'rounded-container',
      'bg-surface-200-800',
    ]);
  });
});
