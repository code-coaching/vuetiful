import { describe, expect, it, vi } from "vitest";
import * as components from "./components";
import plugin, * as index from "./index";

describe("src", () => {
  Object.entries(index).forEach(([key, value]) => {
    it(`${key} is defined`, () => {
      expect(value).toBeDefined();
    });
  });

  describe("given install is called", () => {
    it("should register all components", () => {
      const app = {
        component: vi.fn(),
      };

      plugin.install(app);

      for (const key in components) {
        // @ts-expect-error
        expect(app.component).toHaveBeenCalledWith(key, components[key]);
      }
    });
  });
});
