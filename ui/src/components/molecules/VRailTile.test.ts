import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { VRailTile } from ".";
import { VRadioGroup } from "../atoms";

test("VRailTile", () => {
  expect(VRailTile).toBeTruthy();
});

// TODO: add tests
test("VRailTile using slot", () => {
  const wrapper = mount({
    template: `
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
