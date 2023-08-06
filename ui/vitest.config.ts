import { defineConfig } from "vite";
import type { UserConfig } from "vitest/config";
import * as viteConfig from "./vite.config";

const vitestConfig: UserConfig = {
  test: {
    environment: "jsdom",
    coverage: {
      exclude: ["**/src/types/**"],
      lines: 98.47,
      functions: 89.01,
      branches: 99.35,
      statements: 98.47,
      thresholdAutoUpdate: true,
    },
  },
};

export default defineConfig({
  ...viteConfig,
  // @ts-expect-error
  test: vitestConfig.test,
});
