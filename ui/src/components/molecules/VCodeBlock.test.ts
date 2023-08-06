import { mount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";
import { VCodeBlock } from "../..";

const clipboardMock = {
  writeText: vi.fn(),
};

Object.defineProperty(window.navigator, "clipboard", {
  value: clipboardMock,
  writable: true,
});

describe("VCodeBlock", () => {
  test("copy button copies code to clipboard", async () => {
    const mockClipboardDirective = {
      mounted(el: HTMLElement, binding: any) {
        el.addEventListener("click", () => {
          el.dataset.copied = binding.value;
        });
      },
    };

    const wrapper = mount(VCodeBlock, {
      props: {
        code: "John Duck",
      },
      global: {
        directives: {
          clipboard: mockClipboardDirective,
        },
      },
    });

    await wrapper.find(".vuetiful-code-block-button").trigger("click");

    expect(clipboardMock.writeText).toHaveBeenCalledWith("John Duck");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    expect(wrapper.emitted("copy")).toBeTruthy();
  });

  test("renders the component with default props", () => {
    const wrapper = mount(VCodeBlock);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain("Copy");
    expect(wrapper.find(".vuetiful-code-block-language").text()).toBe("plaintext");
    expect(wrapper.find(".vuetiful-code-block-code").classes()).toContain("language-plaintext");
  });

  test("renders the component with custom props", () => {
    const customProps = {
      language: "javascript",
      code: "const x = 10;",
      buttonText: "Copy Code",
      buttonCopiedText: "Copied!",
      classButton: "custom-button-class",
      classLanguage: "custom-language-class",
      classCode: "custom-code-class",
      preventOverflow: true,
    };

    const wrapper = mount(VCodeBlock, {
      props: customProps,
    });

    expect(wrapper.find(".vuetiful-code-block-button").text()).toContain("Copy Code");
    expect(wrapper.find(".vuetiful-code-block-language").text()).toBe("javascript");
    expect(wrapper.find(".vuetiful-code-block-code").classes()).toContain("language-javascript");
    expect(wrapper.find(".vuetiful-code-block-pre").classes()).toContain("whitespace-pre-wrap");
  });

  test("renders the component with custom props", () => {
    const customProps = {
      language: "js",
      code: "const x = 10;",
      buttonText: "Copy Code",
      buttonCopiedText: "Copied!",
      classButton: "custom-button-class",
      classLanguage: "custom-language-class",
      classCode: "custom-code-class",
      preventOverflow: true,
    };

    const wrapper = mount(VCodeBlock, { props: customProps });

    expect(wrapper.find(".vuetiful-code-block-button").text()).toContain("Copy Code");
    expect(wrapper.find(".vuetiful-code-block-language").text()).toBe("javascript");
    expect(wrapper.find(".vuetiful-code-block-code").classes()).toContain("language-js");
    expect(wrapper.find(".vuetiful-code-block-pre").classes()).toContain("whitespace-pre-wrap");
  });

  test("renders the component with custom props", () => {
    const customProps = {
      language: "ts",
      code: "const x = 10;",
      buttonText: "Copy Code",
      buttonCopiedText: "Copied!",
      classButton: "custom-button-class",
      classLanguage: "custom-language-class",
      classCode: "custom-code-class",
      preventOverflow: true,
    };

    const wrapper = mount(VCodeBlock, { props: customProps });

    expect(wrapper.find(".vuetiful-code-block-button").text()).toContain("Copy Code");
    expect(wrapper.find(".vuetiful-code-block-language").text()).toBe("typescript");
    expect(wrapper.find(".vuetiful-code-block-code").classes()).toContain("language-ts");
    expect(wrapper.find(".vuetiful-code-block-pre").classes()).toContain("whitespace-pre-wrap");
  });

  test("renders the component with custom props", () => {
    const customProps = {
      language: "sh",
      code: "const x = 10;",
      buttonText: "Copy Code",
      buttonCopiedText: "Copied!",
      classButton: "custom-button-class",
      classLanguage: "custom-language-class",
      classCode: "custom-code-class",
      preventOverflow: true,
    };

    const wrapper = mount(VCodeBlock, { props: customProps });

    expect(wrapper.find(".vuetiful-code-block-button").text()).toContain("Copy Code");
    expect(wrapper.find(".vuetiful-code-block-language").text()).toBe("console");
    expect(wrapper.find(".vuetiful-code-block-code").classes()).toContain("language-sh");
    expect(wrapper.find(".vuetiful-code-block-pre").classes()).toContain("whitespace-pre-wrap");
  });
});
