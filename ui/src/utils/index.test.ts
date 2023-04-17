// test that all exports are defined
import * as utils from "./index";
import { describe, it, expect } from "vitest";

describe("utils", () => {
  Object.entries(utils).forEach(([key, value]) => {
    it(`${key} is defined`, () => {
      expect(value).toBeDefined();
    });
  });
});
