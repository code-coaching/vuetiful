import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { VAvatar } from ".";

test("VAvatar", () => {
  expect(VAvatar).toBeTruthy();
});

describe("VAvatar props", () => {
  test("VAvatar defaults", () => {
    const wrapper = mount(VAvatar);

    expect(wrapper.classes()).toContain("avatar");
    expect(wrapper.classes()).toContain("w-16");
    expect(wrapper.classes()).toContain("rounded-token");

    const avatarText = wrapper.find(".avatar-text");
    expect(avatarText.exists()).toBe(true);
    expect(avatarText.text()).toBe("");
    expect(avatarText.classes()).toContain("dark:fill-on-surface-token");
    expect(avatarText.classes()).toContain("fill-base-token");
  });

  test("VAvatar initials", () => {
    const wrapper = mount(VAvatar, {
      props: {
        initials: "JD",
        class: "variant-filled",
      },
    });

    expect(wrapper.classes()).toContain("avatar");
    expect(wrapper.classes()).toContain("w-16");
    expect(wrapper.classes()).toContain("rounded-token");

    const avatarText = wrapper.find(".avatar-text");
    expect(avatarText.exists()).toBe(true);
    expect(avatarText.text()).toBe("JD");
    expect(avatarText.classes()).toContain("dark:fill-base-token");
    expect(avatarText.classes()).toContain("fill-on-surface-token");

    const avatarImage = wrapper.find(".avatar-image");
    expect(avatarImage.exists()).toBe(false);
  });

  test("VAvatar initials fill", () => {
    const wrapper = mount(VAvatar, {
      props: {
        initials: "JD",
        fill: "custom-fill-class",
      },
    });

    expect(wrapper.classes()).toContain("avatar");
    expect(wrapper.classes()).toContain("w-16");
    expect(wrapper.classes()).toContain("rounded-token");

    const avatarText = wrapper.find(".avatar-text");
    expect(avatarText.exists()).toBe(true);
    expect(avatarText.text()).toBe("JD");
    expect(avatarText.classes()).toContain("custom-fill-class");
  });

  test("VAvatar image", () => {
    const wrapper = mount(VAvatar, {
      props: {
        src: "https://via.placeholder.com/150",
      },
    });

    expect(wrapper.classes()).toContain("avatar");
    expect(wrapper.classes()).toContain("w-16");
    expect(wrapper.classes()).toContain("rounded-token");

    const avatarText = wrapper.find(".avatar-text");
    expect(avatarText.exists()).toBe(false);

    const avatarImage = wrapper.find(".avatar-image");
    expect(avatarImage.exists()).toBe(true);
    expect(avatarImage.attributes("src")).toBe("https://via.placeholder.com/150");
  });

  test("VAvatar image fallback", async () => {
    const wrapper = mount(VAvatar, {
      props: {
        src: "https://via.placeholder.com/150",
        fallback: "/image/john-duck.png",
      },
    });

    expect(wrapper.classes()).toContain("avatar");
    expect(wrapper.classes()).toContain("w-16");
    expect(wrapper.classes()).toContain("rounded-token");

    const avatarText = wrapper.find(".avatar-text");
    expect(avatarText.exists()).toBe(false);

    const avatarImage = wrapper.find(".avatar-image");
    avatarImage.trigger("error");
    await wrapper.vm.$nextTick();

    expect(avatarImage.exists()).toBe(true);
    expect(avatarImage.attributes("src")).toBe("/image/john-duck.png");
  });
});
