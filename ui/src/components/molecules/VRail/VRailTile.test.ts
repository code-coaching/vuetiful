import { mount } from "@vue/test-utils";
import { expect, test, describe } from "vitest";
import { VRadioGroup, VRailTile } from "@/index";


describe("VRailTile", () => {
  // TODO: add tests
  test("default slot", () => {
    const wrapper = mount({
      template: /*html*/`
        <v-radio-group>
          <v-rail-tile>John Duck</v-rail-tile>
        </v-radio-group>
      `,
      components: {
        "v-rail-tile": VRailTile,
        "v-radio-group": VRadioGroup,
      },
    });
  
    expect(wrapper).toBeTruthy();
  });

  test("label prop", () => {
    const wrapper = mount({
      template: /*html*/`
        <v-radio-group>
          <v-rail-tile label="John Duck label">
            John Duck
          </v-rail-tile>
        </v-radio-group>
      `,
      components: {
        "v-rail-tile": VRailTile,
        "v-radio-group": VRadioGroup,
      },
    });

    const label = wrapper.find('.vuetiful-rail-tile-label');
    expect(label.text()).toContain('John Duck label');
  })

  test("no default slot", () => {
    const wrapper = mount({
      template: /*html*/`
        <v-radio-group>
          <v-rail-tile label="John Duck label">
          </v-rail-tile>
        </v-radio-group>
      `,
      components: {
        "v-rail-tile": VRailTile,
        "v-radio-group": VRadioGroup,
      },
    });

    const icon = wrapper.find('.vuetiful-rail-tile-icon');
    expect(icon.exists()).toBeFalsy();
  })
})

