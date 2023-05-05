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
      lines: 89.78,
      functions: 96,
      branches: 100,
      statements: 89.78,
      thresholdAutoUpdate: true,
    }
  },
};

export default defineConfig({
  ...viteConfig,
  // @ts-expect-error
  test: vitestConfig.test,
});
