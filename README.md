# Turbo Polyfills [![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/turbo-polyfills.svg
[npm]: https://www.npmjs.org/package/turbo-polyfills

## Why ?

[Hotwired](https://hotwired.dev) uses a lot of relatively modern web standards. Some are packaged in [@stimulus/polyfills](https://www.npmjs.com/package/@stimulus/polyfills) but a lot are left out. In order to use [stimulus](https://stimulus.hotwired.dev)/[turbo](https://turbo.hotwired.dev) with browsers as old as IE11 you will need more then that. This package tries to help by bundling some of the polyfills. For a full IE 11 support you will need the following list :

* dom4
* core-js/stable
* @stimulus/polyfills
* turbo-polyfills
* whatwg-fetch
* yet-another-abortcontroller-polyfill


## Usage

```bash
yarn add -D turbo-polyfills
```
