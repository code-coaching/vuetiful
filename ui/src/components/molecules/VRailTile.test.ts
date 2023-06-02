import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { VRailTile } from ".";

test("VRailTile", () => {
  expect(VRailTile).toBeTruthy();
});

// TODO: add tests
test("VRailTile using slot", () => {
  const wrapper = mount(VRailTile);

  expect(wrapper).toBeTruthy();
});
