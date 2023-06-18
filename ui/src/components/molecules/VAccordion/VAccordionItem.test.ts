import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { VAccordion, VAccordionItem } from "..";

describe("VAccordionItem", () => {
  test("defaults", async () => {
    const wrapper = mount({
      template: /*html*/ `
        <v-accordion>
          <v-accordion-item title="Vuetiful">John Duck</v-accordion-item>
          <v-accordion-item title="Is">Janine Duck</v-accordion-item>
        </v-accordion>`,
      components: {
        "v-accordion": VAccordion,
        "v-accordion-item": VAccordionItem,
      },
    });

    const accordionItems = wrapper.findAllComponents(VAccordionItem);
    accordionItems.forEach((accordionItem) => {
      expect(accordionItem.classes()).toEqual(["vuetiful-accordion-item"]);

      const accordionItemButton = accordionItem.find(".vuetiful-accordion-item-button");
      expect(accordionItemButton.classes()).toEqual([
        "bg-surface-200-700-token",
        "hover:variant-soft",
        "vuetiful-accordion-item-button",
        "w-full",
        "rounded-container-token",
      ]);

      const accordionItemTitle = accordionItem.find(".vuetiful-accordion-title");
      expect(accordionItemTitle.text()).toEqual(accordionItem.props().title);
    });
  });

  test("open", async () => {
    const wrapper = mount({
      template: /*html*/ `
        <v-accordion>
          <v-accordion-item title="Vuetiful" open>John Duck</v-accordion-item>
          <v-accordion-item title="Is">Janine Duck</v-accordion-item>
        </v-accordion>`,
      components: {
        "v-accordion": VAccordion,
        "v-accordion-item": VAccordionItem,
      },
    });

    const accordionItems = wrapper.findAllComponents(VAccordionItem);
    const accordionItemButtonOne = accordionItems[0].find(".vuetiful-accordion-item-button");
    const accordionItemButtonTwo = accordionItems[1].find(".vuetiful-accordion-item-button");

    await accordionItemButtonOne.trigger("click");

    expect(accordionItemButtonOne.classes()).toEqual([
      "bg-surface-200-700-token",
      "hover:variant-soft",
      "!rounded-bl-none",
      "!rounded-br-none",
      "vuetiful-accordion-item-button",
      "w-full",
      "rounded-container-token",
    ]);
    expect(accordionItemButtonTwo.classes()).toEqual([
      "bg-surface-200-700-token",
      "hover:variant-soft",
      "vuetiful-accordion-item-button",
      "w-full",
      "rounded-container-token",
    ]);

    const accordionItemPanelOne = accordionItems[0].find(".vuetiful-accordion-item-panel");

    expect(accordionItemPanelOne.classes()).toEqual([
      "vuetiful-accordion-item-panel",
      "p-4",
      "pt-0",
      "rounded-container-token",
      "bg-surface-200-700-token",
      "!rounded-tl-none",
      "!rounded-tr-none",
    ]);
  });
});
