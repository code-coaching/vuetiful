# Vuetiful

Vuetiful is a Vue.js component library that is built with TailwindCSS. TailwindCSS is a dependency of Vuetiful, so you will need to install it as well. However, you can use Vuetiful without TailwindCSS if you want to.

This will install all dependencies in all packages and sites.

## Packages

`ui` - Vuetiful component library
`ui/lib` - This is what will be published to NPM
`ui/src` - This is a Vue 3 component library in which you can build components

## Sites

`docs` - Documentation site for Vuetiful, built with Nuxt. The documentation website is hosted on [https://vuetiful.dev](https://vuetiful.dev).

# Local development

## PNPM Monorepo

In the root of the monorepo.

```sh
pnpm install
```

## Development

### Install dependencies

```sh
pnpm dev
```

### UI Library

If you've added or changed anything in `packages/ui/lib`, you will need to build the library.

From within the package `packages/ui`

```sh
pnpm lib:build
```

To start the application to tinker with the components, from within the package `packages/ui`

```sh
pnpm dev
```

### Docs

The ui library is automatically linked to the latest build UI library.

From within `sites/docs`

```sh
pnpm dev
```
