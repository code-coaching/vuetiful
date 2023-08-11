import { defineConfig } from 'vite';
import type { UserConfig } from 'vitest/config';
import * as viteConfig from './vite.config';

const vitestConfig: UserConfig = {
  test: {
    environment: 'jsdom',
    coverage: {
      exclude: ['**/src/types/**'],
      lines: 99.46,
      functions: 90,
      branches: 99.35,
      statements: 99.46,
      thresholdAutoUpdate: true,
    },
  },
};

export default defineConfig({
  ...viteConfig,
  // @ts-expect-error
  test: vitestConfig.test,
});
