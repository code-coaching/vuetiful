import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { VRail } from ".";

test("VRail", () => {
  expect(VRail).toBeTruthy();
});

// TODO: add tests 
test("VRail using slot", () => {
  const wrapper = mount(VRail);

  expect(wrapper).toBeTruthy();
});