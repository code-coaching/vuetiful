import { Listbox } from "@headlessui/vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import VListboxButton from "./VListboxButton.vue";

describe("VListboxButton props", () => {
  test("defaults", () => {
    const wrapper = mount({
      template: /* html */ `
        <Listbox>
          <v-listbox-button data-test="v-listbox-button">John Duck</v-listbox-button>
        </Listbox>
      `,
      components: {
        "v-listbox-button": VListboxButton,
        Listbox: Listbox,
      },
    });

    const listboxButton = wrapper.find("[data-test='v-listbox-button']");
    expect(listboxButton.element.tagName).toBe("BUTTON");
  });

  test("custom 'as' prop", () => {
    const wrapper = mount({
      template: /* html */ `
        <Listbox>
          <v-listbox-button as="div" data-test="v-listbox-button">John Duck</v-listbox-button>
        </Listbox>
      `,
      components: {
        "v-listbox-button": VListboxButton,
        Listbox: Listbox,
      },
    });

    const listboxButton = wrapper.find("[data-test='v-listbox-button']");
    expect(listboxButton.element.tagName).toBe("DIV");
  });

  test("should hide icon", () => {
    const wrapper = mount({
      template: /* html */ `
        <Listbox>
          <v-listbox-button hide-icon data-test="v-listbox-button">John Duck</v-listbox-button>
        </Listbox>
      `,
      components: {
        "v-listbox-button": VListboxButton,
        Listbox: Listbox,
      },
    });

    const listboxButton = wrapper.find("[data-test='v-listbox-button']");
    expect(listboxButton.find("svg").exists()).toBe(false);
  });
});
