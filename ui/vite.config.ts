const path = require('path');
const { defineConfig } = require('vite');
import vue from '@vitejs/plugin-vue';

module.exports = defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@code-coaching/vuetiful',
      formats: ['es', 'umd'],
      fileName: (format) => {
        if (format === 'es') return `vuetiful.es.mjs`;
        return `vuetiful.${format}.js`;
      },
    },
    rollupOptions: {
      // external modules won't be bundled into your library
      external: ['vue'],
      output: {
        // disable warning on src/index.ts using both default and named export
        exports: 'named',
        /*
         * Provide global variables to use in the UMD build
         * for externalized deps (not useful if 'umd' is not in lib.formats)
         */
        globals: {
          vue: 'Vue',
        },
      },
    },
    emptyOutDir: false, // to retain the types folder generated by tsc
  },
});
