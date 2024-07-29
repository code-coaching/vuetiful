import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      dir: 'src/lib/',
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        include: ['src/lib/'],
        exclude: [
          'src/lib/components/VBootstrap.vue',
          'src/lib/components/molecules/VDrawer.vue',
          'src/lib/components/molecules/VShell.vue',
          'src/**/*.test.ts',
          '/src/lib/types/**',
          '**/index**',
        ],
        thresholds: {
          lines: 99.94,
          functions: 98.41,
          branches: 99.06,
          statements: 99.94,
          autoUpdate: true,
        },
      },
    },
  }),
);