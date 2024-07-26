import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

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
        exclude: ['src/lib/components/VBootstrap.vue', 'src/**/*.test.ts', '/src/lib/types/**', '**/index**'],
        thresholds: {
          lines: 99.69,
          functions: 97.1,
          branches: 99.21,
          statements: 99.69,
          autoUpdate: true,
        },
      },
    }
  })
)