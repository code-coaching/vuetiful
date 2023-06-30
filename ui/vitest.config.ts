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
      lines: 95.27,
      functions: 83.33,
      branches: 95.85,
      statements: 95.27,
      thresholdAutoUpdate: true,
    },
  },
};

export default defineConfig({
  ...viteConfig,
  // @ts-expect-error
  test: vitestConfig.test,
});
