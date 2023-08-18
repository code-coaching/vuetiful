import { defineConfig } from 'vite';
import type { UserConfig } from 'vitest/config';
import * as viteConfig from './vite.config';

const vitestConfig: UserConfig = {
  test: {
    environment: 'jsdom',
    coverage: {
      // colors.service.ts is a direct copy from skeleton - might refactor and test later
      exclude: ['**/src/types/**', '**/index**', '**/**.test.ts', '**/colors.service.ts'],
      lines: 99.39,
      functions: 96.82,
      branches: 98.64,
      statements: 99.39,
      thresholdAutoUpdate: true,
    },
  },
};

export default defineConfig({
  ...viteConfig,
  // @ts-expect-error
  test: vitestConfig.test,
});
