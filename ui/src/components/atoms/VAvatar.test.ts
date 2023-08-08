import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { VAvatar } from ".";

describe("VAvatar", () => {
  test("defaults", () => {
    const wrapper = mount(VAvatar);

    expect(wrapper.classes()).toContain("vuetiful-avatar");
    expect(wrapper.classes()).toContain("w-16");
    expect(wrapper.classes()).toContain("rounded-token");

    const avatarText = wrapper.find(".vuetiful-avatar-text");
    expect(avatarText.exists()).toBe(true);
    expect(avatarText.text()).toBe("");
    expect(avatarText.classes()).toEqual(["vuetiful-avatar-text", "fill-white", "dark:fill-black"]);
  });

  test("custom variant", () => {
    const wrapper = mount(VAvatar, {
      props: {
        variant: "ghost",
      },
    });

    const avatarText = wrapper.find(".vuetiful-avatar-text");
    expect(avatarText.classes()).toEqual(["vuetiful-avatar-text", "fill-black", "dark:fill-white"]);
  });

  test("variant with hyphen", () => {
    const wrapper = mount(VAvatar, {
      props: {
        variant: "filled-primary",
      },
    });

    expect(wrapper.classes()).toContain("variant-filled-primary");
  })

  test("initials", () => {
    const wrapper = mount(VAvatar, {
      props: {
        initials: "JD",
        variant: "filled",
      },
    });

    expect(wrapper.classes()).toContain("vuetiful-avatar");
    expect(wrapper.classes()).toContain("w-16");
    expect(wrapper.classes()).toContain("rounded-token");

    const avatarText = wrapper.find(".vuetiful-avatar-text");
    expect(avatarText.exists()).toBe(true);
    expect(avatarText.text()).toBe("JD");
    expect(avatarText.classes()).toEqual(["vuetiful-avatar-text", "fill-white", "dark:fill-black"]);

    const avatarImage = wrapper.find(".vuetiful-avatar-image");
    expect(avatarImage.exists()).toBe(false);
  });

  test("initials fill", () => {
    const wrapper = mount(VAvatar, {
      props: {
        initials: "JD",
        fill: "custom-fill-class",
      },
    });

    expect(wrapper.classes()).toContain("vuetiful-avatar");
    expect(wrapper.classes()).toContain("w-16");
    expect(wrapper.classes()).toContain("rounded-token");

    const avatarText = wrapper.find(".vuetiful-avatar-text");
    expect(avatarText.exists()).toBe(true);
    expect(avatarText.text()).toBe("JD");
    expect(avatarText.classes()).toContain("custom-fill-class");
  });

  test("image", () => {
    const wrapper = mount(VAvatar, {
      props: {
        src: "https://via.placeholder.com/150",
      },
    });

    expect(wrapper.classes()).toContain("vuetiful-avatar");
    expect(wrapper.classes()).toContain("w-16");
    expect(wrapper.classes()).toContain("rounded-token");

    const avatarText = wrapper.find(".vuetiful-avatar-text");
    expect(avatarText.exists()).toBe(false);

    const avatarImage = wrapper.find(".vuetiful-avatar-image");
    expect(avatarImage.exists()).toBe(true);
    expect(avatarImage.attributes("src")).toBe("https://via.placeholder.com/150");
  });

  test("image fallback", async () => {
    const wrapper = mount(VAvatar, {
      props: {
        src: "https://via.placeholder.com/150",
        fallback: "/image/john-duck.png",
      },
    });

    expect(wrapper.classes()).toContain("vuetiful-avatar");
    expect(wrapper.classes()).toContain("w-16");
    expect(wrapper.classes()).toContain("rounded-token");

    const avatarText = wrapper.find(".vuetiful-avatar-text");
    expect(avatarText.exists()).toBe(false);

    const avatarImage = wrapper.find(".vuetiful-avatar-image");
    avatarImage.trigger("error");
    await wrapper.vm.$nextTick();

    expect(avatarImage.exists()).toBe(true);
    expect(avatarImage.attributes("src")).toBe("/image/john-duck.png");
  });

  test("size xs", () => {
    const wrapper = mount(VAvatar, {
      props: {
        size: "xs",
      },
    });

    const avatar = wrapper.find("[data-test='avatar']");
    expect(avatar.attributes("class")).toContain("w-8");
  });

  test("size sm", () => {
    const wrapper = mount(VAvatar, {
      props: {
        size: "sm",
      },
    });

    const avatar = wrapper.find("[data-test='avatar']");
    expect(avatar.attributes("class")).toContain("w-12");
  });

  test("size md", () => {
    const wrapper = mount(VAvatar, {
      props: {
        size: "md",
      },
    });

    const avatar = wrapper.find("[data-test='avatar']");
    expect(avatar.attributes("class")).toContain("w-16");
  });

  test("size lg", () => {
    const wrapper = mount(VAvatar, {
      props: {
        size: "lg",
      },
    });

    const avatar = wrapper.find("[data-test='avatar']");
    expect(avatar.attributes("class")).toContain("w-20");
  });

  test("size xl", () => {
    const wrapper = mount(VAvatar, {
      props: {
        size: "xl",
      },
    });

    const avatar = wrapper.find("[data-test='avatar']");
    expect(avatar.attributes("class")).toContain("w-24");
  });
});
