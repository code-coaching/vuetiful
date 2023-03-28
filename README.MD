# Vuetiful

Vuetiful is a Vue.js component library that is built with TailwindCSS. TailwindCSS is a dependency of Vuetiful, so you will need to install it as well. However, you can use Vuetiful without TailwindCSS if you want to.

## docs

The docs directory contains the documentation website for Vuetiful. It is built with Quasar SSR + Vuetiful. The documentation website is hosted on [https://vuetiful.dev](https://vuetiful.dev).

## ui

The ui directory contains the source code for the Vuetiful library.

# Local development

In both the ui and docs directory, you can run the following command:

```bash
npm install
```

## ui

To consume the Vuetiful library in the docs website locally, you need to build the library first. To do this, run the following command in the ui directory:

```bash
npm run build
```

Now that the library is built, set up an npm link to the library. To do this, run the following command in the ui directory:

```bash
npm link
```

## docs

To consume the Vuetiful library in the docs website locally, you need to link the library first. To do this, run the following command in the docs directory:

```bash
npm link @code-coaching/vuetiful
```

Now that the library is linked, you can start the docs website. To do this, run the following command in the docs directory:

```bash
npm run dev
```

Or if you want to run the docs website in SSR mode (as is the case in production), run the following command in the docs directory:

```bash
npm run dev:ssr
```
