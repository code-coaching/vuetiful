import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { ref } from "vue";
import VListbox from "./VListbox.vue";

test("VListboxLabel using slot", () => {
  const wrapper = mount({
    template: `
      <v-listbox></v-listbox>
    `,
    components: {
      "v-listbox": VListbox,
    },
  });

  expect(wrapper.text()).toBe("Select an option");
});

test("VListboxLabel custom label", () => {
  const wrapper = mount({
    template: `
      <v-listbox label-text="John Duck"></v-listbox>
    `,
    components: {
      "v-listbox": VListbox,
    },
  });

  const label = wrapper.find("label");
  expect(label.text()).toBe("John Duck");
});
