import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import VRadioGroup from "./VRadioGroup.vue";
import VRadioDescription from "./VRadioDescription.vue";

test("VRadioDescription using slot", () => {
  const wrapper = mount({
    template: `
      <v-radio-group>
        <v-radio-description>John Duck</v-radio-description>
      </v-radio-group>
    `,
    components: {
      "v-radio-description": VRadioDescription,
      "v-radio-group": VRadioGroup,
    },
  });

  expect(wrapper.text()).toContain("John Duck");
});

describe("VRadioDescription props", () => {
  test("default 'as' prop", () => {
    const wrapper = mount({
      template: `
        <v-radio-group>
          <v-radio-label data-test="label">John Duck</v-radio-label>
        </v-radio-group>
      `,
      components: {
        "v-radio-label": VRadioDescription,
        "v-radio-group": VRadioGroup,
      },
    });

    const label = wrapper.find("[data-test='label']");
    expect(label.element).toBeInstanceOf(HTMLParagraphElement);
  });
  test("custom 'as' prop", () => {
    const wrapper = mount({
      template: `
        <v-radio-group>
          <v-radio-label as="div" data-test="label">John Duck</v-radio-label>
        </v-radio-group>
      `,
      components: {
        "v-radio-label": VRadioDescription,
        "v-radio-group": VRadioGroup,
      },
    });

    const label = wrapper.find("[data-test='label']");
    expect(label.element).toBeInstanceOf(HTMLDivElement);
  });
});
