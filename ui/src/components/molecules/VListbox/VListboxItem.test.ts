import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { ref } from "vue";
import VListbox from "./VListbox.vue";
import VListboxItem from "./VListboxItem.vue";

describe("VListboxItem props", () => {
  test("defaults", async () => {
    const listboxValue = ref("John");
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
        "v-listbox": VListbox,
        "v-listbox-item": VListboxItem,
      },
    });

    const listbox = wrapper.find("[data-test='listbox']");
    await listbox.find("button").trigger("click");

    const listboxItems = listbox.findAll("[data-test='listbox-item']");
    const selectedItem = listboxItems[0];
    const normalItem = listboxItems[1];
    expect(selectedItem.classes()).toEqual([
      "vuetiful-listbox-item",
      "px-4",
      "py-1",
      "text-base",
      "rounded-token",
      "variant-filled",
      "cursor-pointer",
    ]);
    expect(normalItem.classes()).toEqual([
      "vuetiful-listbox-item",
      "px-4",
      "py-1",
      "text-base",
      "rounded-token",
      "hover:variant-ghost",
      "cursor-pointer",
    ]);
  });
});
