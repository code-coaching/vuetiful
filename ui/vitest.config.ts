import { defineConfig } from "vite";
import type { UserConfig } from "vitest/config";
import * as viteConfig from "./vite.config";

const vitestConfig: UserConfig = {
  test: {
    environment: "jsdom",
    coverage: {
      exclude: ["**/src/types/**"],
      lines: 98.46,
      functions: 88.04,
      branches: 99.34,
      statements: 98.46,
      thresholdAutoUpdate: true,
    },
  },
};

export default defineConfig({
  ...viteConfig,
  // @ts-expect-error
  test: vitestConfig.test,
});
