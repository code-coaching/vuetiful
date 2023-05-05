import { describe, expect, it, vi } from "vitest";

/**
 * No clue why, but when this test is added to theme.service.test.ts, it fails.
 * Running it in isolation works fine.
 */

describe("given there is no existing theme style tag", () => {
  it("should create a new theme style tag", async () => {
    const { useTheme } = await import("./theme.service");
    const { loadTheme } = useTheme();

    const removeObject = { remove: () => {} };
    const removeSpy = vi.spyOn(removeObject, "remove");
    vi.spyOn(window.document, "getElementById").mockReturnValueOnce(removeObject as any);

    loadTheme("vuetiful");

    const link = document.querySelector("#theme") as HTMLLinkElement;
    // @ts-ignore
    link.onload();

    expect(removeSpy).toHaveBeenCalled();
  });
});
