import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { VChip } from ".";

test("VChip", () => {
  expect(VChip).toBeTruthy();
});

test("VChip using slot", () => {
  const wrapper = mount(VChip, {
    slots: {
      default: "John Duck",
    },
  });

  expect(wrapper.text()).toContain("John Duck");
  expect(wrapper.classes()).toContain("chip");
});