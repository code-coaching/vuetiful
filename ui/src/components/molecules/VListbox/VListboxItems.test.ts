import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import VListbox from "./VListbox.vue";
import VListboxItem from "./VListboxItem.vue";

test("VListboxItems defaults", async () => {
  const wrapper = mount({
    template: /*html*/ `
      <v-listbox>
        <v-listbox-item value="John">John Duck</v-listbox-item>
      </v-listbox>
    `,
    components: {
      "v-listbox": VListbox,
      "v-listbox-item": VListboxItem,
    },
  });

  const listbox = wrapper.find("[data-test='listbox']");
  await listbox.find("button").trigger("click");

  const listboxItems = listbox.find("[data-test='listbox-items']");
  expect(listboxItems.classes()).toContain("flex-col");
});

test("VListboxItems horizontal", async () => {
  const wrapper = mount({
    template: /*html*/ `
      <v-listbox horizontal>
        <v-listbox-item value="John">John Duck</v-listbox-item>
      </v-listbox>
    `,
    components: {
      "v-listbox": VListbox,
      "v-listbox-item": VListboxItem,
    },
  });

  const listbox = wrapper.find("[data-test='listbox']");
  await listbox.find("button").trigger("click");

  const listboxItems = listbox.find("[data-test='listbox-items']");
  expect(listboxItems.classes()).not.toContain("flex-col");
});
