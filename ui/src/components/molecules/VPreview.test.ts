import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { VPreview } from ".";

test("VPreview", () => {
  expect(VPreview).toBeTruthy();
});

describe("VPreview", () => {
  test("defaults", () => {
    const wrapper = mount(VPreview);

    expect(wrapper.props()).toEqual({
      background: "neutral",
      hideSwatches: false,
      regionFooter: "",
      regionHeader: "",
      regionPreview: "",
      regionSource: "",
      regionViewport: "",
      hideMobileToggle: false,
    });
  });

  describe("given code radio item is selected", () => {
    test("renders source code", async () => {
      const wrapper = mount(VPreview, {
        props: {
          regionSource: "source",
        },
      });

      expect(wrapper.find("[data-test='previewer-source']").exists()).toBe(false);
      expect(wrapper.find("[data-test='previewer-preview']").exists()).toBe(true);

      const radioItemCode = wrapper.find("[data-test='radio-item-code']");
      await radioItemCode.trigger("click");

      expect(wrapper.find("[data-test='previewer-source']").exists()).toBe(true);
      expect(wrapper.find("[data-test='previewer-preview']").exists()).toBe(false);
    });
  });

  describe("given the swatch button is clicked", () => {
    test("renders swatches", async () => {
      const wrapper = mount(VPreview);

      expect(wrapper.find("[data-test='swatches']").exists()).toBe(false);

      const swatchButton = wrapper.find("[data-test='swatch-button']");
      await swatchButton.trigger("click");

      expect(wrapper.find("[data-test='swatches']").exists()).toBe(true);
    });
  });

  describe("given the mobile toggle button is clicked", () => {
    test("renders mobile preview", async () => {
      const wrapper = mount(VPreview);

      const before = wrapper.find("[data-test='previewer-preview']");
      expect(before.classes()).not.toContain("mobile-screen");
      expect(before.classes()).toContain("w-full");

      const radioItemMobile = wrapper.find("[data-test='radio-item-mobile']");
      await radioItemMobile.trigger("click");

      const after = wrapper.find("[data-test='previewer-preview']");
      expect(after.classes()).toContain("mobile-screen");
      expect(after.classes()).not.toContain("w-full");
    });
  });
});
