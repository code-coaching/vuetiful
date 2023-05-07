import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import VSwitch from "./VSwitch.vue";
import { ref } from "vue";

describe("VSwitch slots", () => {
  test("should not add screen reader text by default", () => {
    const wrapper = mount(VSwitch);

    const srOnly = wrapper.find(".sr-only");
    expect(srOnly.exists()).toBe(false);
  });
  test("should add screen reader text if default slot is present", () => {
    const wrapper = mount(VSwitch, {
      slots: {
        default: "John Duck",
      },
    });

    const srOnly = wrapper.find(".sr-only");
    expect(srOnly.text()).toContain("John Duck");
  });
});

describe("VSwitch props", () => {
  test("defaults", () => {
    const wrapper = mount(VSwitch);

    expect(wrapper.props()).toEqual({
      modelValue: false,
      disabled: false,
      size: "md",
      switchClass: "variant-filled",
      thumbClass: "bg-surface-100-800-token",
      as: "button",
      name: "",
    });
  });

  test("size xs", () => {
    const wrapper = mount(VSwitch, {
      props: {
        size: "xs",
      },
    });

    const track = wrapper.find(".slide-toggle-track");
    expect(track.attributes("class")).toContain("w-8 h-4");
  });

  test("size sm", () => {
    const wrapper = mount(VSwitch, {
      props: {
        size: "sm",
      },
    });

    const track = wrapper.find(".slide-toggle-track");
    expect(track.attributes("class")).toContain("w-12 h-6");
  });

  test("size md", () => {
    const wrapper = mount(VSwitch, {
      props: {
        size: "md",
      },
    });

    const track = wrapper.find(".slide-toggle-track");
    expect(track.attributes("class")).toContain("w-16 h-8");
  });

  test("size lg", () => {
    const wrapper = mount(VSwitch, {
      props: {
        size: "lg",
      },
    });

    const track = wrapper.find(".slide-toggle-track");
    expect(track.attributes("class")).toContain("w-20 h-10");
  });

  test("size xl", () => {
    const wrapper = mount(VSwitch, {
      props: {
        size: "xl",
      },
    });

    const track = wrapper.find(".slide-toggle-track");
    expect(track.attributes("class")).toContain("w-24 h-12");
  });

  test("size custom", () => {
    const wrapper = mount(VSwitch, {
      props: {
        size: "custom",
      },
    });

    const track = wrapper.find(".slide-toggle-track");
    expect(track.attributes("class")).toContain("custom");
  });



});

describe("VSwitch events", () => {
  test("update:modelValue", async () => {
    const wrapper = mount(VSwitch, {
      props: {
        modelValue: false,
      }
    });

    await wrapper.setProps({ modelValue: true});
    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
  })
})
