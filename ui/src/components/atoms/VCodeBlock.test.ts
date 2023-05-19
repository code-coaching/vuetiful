import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { VCodeBlock } from ".";

test("VCodeBlock", () => {
  expect(VCodeBlock).toBeTruthy();
});

// TODO: add tests 
test("VCodeBlock using slot", () => {
  const wrapper = mount(VCodeBlock);

  expect(wrapper).toBeTruthy();
});