import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { VAccordion } from "..";

describe("VAccordion", () => {
  test("defaults", async () => {
    const wrapper = mount({
      template: /*html*/ `<v-accordion></v-accordion>`,
      components: {
        "v-accordion": VAccordion,
      },
    });

    expect(wrapper.classes()).toEqual([
      "vuetiful-accordion",
      "flex",
      "w-full",
      "flex-col",
      "gap-1",
    ]);
  });

  test("unstyled", async () => {
    const wrapper = mount({
      template: /*html*/ `<v-accordion unstyled></v-accordion>`,
      components: {
        "v-accordion": VAccordion,
      },
    });

    expect(wrapper.classes()).toEqual(["vuetiful-accordion"]);
  })
});
