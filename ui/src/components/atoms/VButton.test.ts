import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { VButton } from ".";

test("VButton using prop", async () => {
  expect(VButton).toBeTruthy();

  const vButtonElement = mount(VButton, {
    props: {
      msg: "John Duck",
    },
  });

  expect(vButtonElement.text()).toContain("John Duck");
});

test("VButton using slot", async () => {
  expect(VButton).toBeTruthy();

  const vButtonElement = mount(VButton, {
    slots: {
      default: "John Duck",
    },
  });

  expect(vButtonElement.text()).toContain("John Duck");
});
