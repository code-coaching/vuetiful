import { afterEach, describe, expect, test, vi } from "vitest";

describe("useSettings", () => {
  afterEach(() => {
    vi.resetModules();
  });
  describe("updateSettings", () => {
    test("should update settings", async () => {
      const { useSettings } = await import("./settings.service");
      const { updateSettings, settings } = useSettings();

      expect(settings.global.unstyled).toBe(false);
      updateSettings({ global: { unstyled: true } });
      expect(settings.global.unstyled).toBe(true);
    });
  });
});
