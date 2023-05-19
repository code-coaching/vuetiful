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
      lines: 93.27,
      functions: 81.53,
      branches: 94.07,
      statements: 93.27,
      thresholdAutoUpdate: true,
    }
  },
};

export default defineConfig({
  ...viteConfig,
  // @ts-expect-error
  test: vitestConfig.test,
});
