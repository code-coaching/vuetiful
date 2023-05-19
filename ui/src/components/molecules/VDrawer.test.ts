import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { VDrawer } from ".";

test("VDrawer", () => {
  expect(VDrawer).toBeTruthy();
});

// TODO: add tests 
test("VDrawer using slot", () => {
  const wrapper = mount(VDrawer);

  expect(wrapper).toBeTruthy();
});