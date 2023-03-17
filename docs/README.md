# Vuetiful Docs (docs)

Documentation for Vuetiful UI Toolkit

## Install the dependencies

```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
npm run dev
```

### Lint the files

```bash
npm run lint
```

### Format the files

```bash
npm run format
```

### Build the app for production

```bash
npm run build
```

Preview the build

```bash
npm run preview
```

### Gotchas

This is a Quasar project running with SSR. To make this work with the ui library, you need to add the following to the `quasar.config.js` file:

````js
{
  // ...
  build: {
    // ...
        extendViteConf(viteConf) {
          viteConf.resolve = {
            ...viteConf.resolve,
            dedupe: ['vue'],
          };
        },
    // ...
  }
  // ...
}
      ```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
````
