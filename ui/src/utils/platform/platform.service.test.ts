import { describe, expect, it, vi } from "vitest";
import { usePlatform } from "./platform.service";

const matchMediaMock = (matches: boolean) => vi.fn(() => ({ matches, onchange: vi.fn() }));

describe("usePlatform", () => {
  describe("isBrowser", () => {
    it("should return true when window is defined", () => {
      const { isBrowser } = usePlatform();
      expect(isBrowser).toBe(true);
    });

    it("should return false when window is not defined", () => {
      window = undefined as any;
      const { isBrowser } = usePlatform();
      expect(isBrowser).toBe(false);
    });
  });
});
