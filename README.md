# Broccoli & Co.

This project is powered by

[Chakra UI](https://chakra-ui.com/): a simple, modular and accessible component library.

[Snowpack](https://www.snowpack.dev/): a lightning-fast frontend build tool, designed for the modern web.

[TypeScript](https://www.typescriptlang.org/): typed javascript at any scale.

## Development

`npm run start`: run the site locally

## Testing

`npm run test`: run all the tests

Tests are run by [Jest](https://jestjs.io/), along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) to test UI code.

## Build

`npm run build`: build

The default building config does not support IE11, but it can be via plugin `@snowpack/plugin-webpack`.
