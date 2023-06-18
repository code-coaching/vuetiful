import { defineConfig } from "vite";
import type { UserConfig } from "vitest/config";
import * as viteConfig from "./vite.config";

interface VitestConfig extends UserConfig {
  test: {
    environment: "happy-dom" | "jsdom";
  };
}
const vitestConfig: UserConfig = {
  test: {
    environment: "jsdom",
    coverage: {
      lines: 94.66,
      functions: 82.08,
      branches: 95,
      statements: 94.66,
      thresholdAutoUpdate: true,
    },
  },
};

export default defineConfig({
  ...viteConfig,
  // @ts-expect-error
  test: vitestConfig.test,
});
