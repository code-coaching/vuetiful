import { mount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";
import { VButton } from ".";

test("VButton", () => {
  expect(VButton).toBeTruthy();
});

test("VButton using slot", () => {
  const vButtonElement = mount(VButton, {
    slots: {
      default: "John Duck",
    },
  });

  expect(vButtonElement.text()).toContain("John Duck");
});

describe("VButton props", () => {
  describe("given icon is true", () => {
    test("should have btn-icon class, not have btn class", () => {
      const vButtonElement = mount(VButton, {
        props: {
          icon: true,
        },
      });
      expect(vButtonElement.classes()).toContain("btn-icon");
      expect(vButtonElement.classes()).not.toContain("btn");
    });
  });
  describe("given icon is false", () => {
    test("should have btn class, not have btn-icon class", () => {
      const vButtonElement = mount(VButton, {
        props: {
          icon: false,
        },
      });
      expect(vButtonElement.classes()).not.toContain("btn-icon");
      expect(vButtonElement.classes()).toContain("btn");
    });
  });
});

describe("VButton events", () => {
  describe("given click event", () => {
    test("should preventDefault and emit click event", async () => {
      const vButtonElement = mount(VButton);
      const clickEvent = { preventDefault: () => {} };
      const preventDefaultSpy = vi.spyOn(clickEvent, "preventDefault");
      vButtonElement.trigger("click", clickEvent);
      await vButtonElement.vm.$nextTick();
      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(vButtonElement.emitted("click")).toBeTruthy();
    });
  });
});

describe("VButton a11y", () => {
  describe("a11y role", () => {
    test("should have role button", () => {
      const vButtonElement = mount(VButton);
      expect(vButtonElement.attributes("role")).toBe("button");
    });
  });
  describe("a11y tabindex", () => {
    test("should have tabindex 0", () => {
      const vButtonElement = mount(VButton);
      expect(vButtonElement.attributes("tabindex")).toBe("0");
    });
  });
  describe("given keydown event", () => {
    describe("given key is Enter", () => {
      test("should preventDefault and emit click event", async () => {
        const vButtonElement = mount(VButton);
        const keydownEvent = { key: "Enter", preventDefault: () => {} };
        const preventDefaultSpy = vi.spyOn(keydownEvent, "preventDefault");
        vButtonElement.trigger("keydown", keydownEvent);
        await vButtonElement.vm.$nextTick();
        expect(preventDefaultSpy).toHaveBeenCalled();
        expect(vButtonElement.emitted("click")).toBeTruthy();
      });
    });

    describe("given key is Space", () => {
      test("should preventDefault and not emit click event", async () => {
        const vButtonElement = mount(VButton);
        const keydownEvent = { key: " ", preventDefault: () => {} };
        const preventDefaultSpy = vi.spyOn(keydownEvent, "preventDefault");
        vButtonElement.trigger("keydown", keydownEvent);
        await vButtonElement.vm.$nextTick();
        expect(preventDefaultSpy).toHaveBeenCalled();
        expect(vButtonElement.emitted("click")).toBeFalsy();
      });
    });

    describe("given key is not Enter or Space", () => {
      test("should not preventDefault and not emit click event", async () => {
        const vButtonElement = mount(VButton);
        const keydownEvent = { key: "a", preventDefault: () => {} };
        const preventDefaultSpy = vi.spyOn(keydownEvent, "preventDefault");
        vButtonElement.trigger("keydown", keydownEvent);
        await vButtonElement.vm.$nextTick();
        expect(preventDefaultSpy).not.toHaveBeenCalled();
        expect(vButtonElement.emitted("click")).toBeFalsy();
      });
    });
  });

  describe("given keyup event", () => {
    describe("given key is Space", () => {
      test("should preventDefault and emit click event", async () => {
        const vButtonElement = mount(VButton);
        const keyupEvent = { key: " ", preventDefault: () => {} };
        const preventDefaultSpy = vi.spyOn(keyupEvent, "preventDefault");
        vButtonElement.trigger("keyup", keyupEvent);
        await vButtonElement.vm.$nextTick();
        expect(preventDefaultSpy).toHaveBeenCalled();
        expect(vButtonElement.emitted("click")).toBeTruthy();
      });
    });
  });
});
