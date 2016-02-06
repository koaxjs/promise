
# promise

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Promise middleware. Included in Koax to give it promise support.

## Installation

    $ npm install @koax/promise

## Middleware

```js
function promise (action, next) {
  if (isPromise(action)) return action
  return next()
}
```

## License

MIT

[travis-image]: https://img.shields.io/travis/koaxjs/promise.svg?style=flat-square
[travis-url]: https://travis-ci.org/koaxjs/promise
[git-image]: https://img.shields.io/github/tag/koaxjs/promise.svg
[git-url]: https://github.com/koaxjs/promise
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@koax/promise.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@koax/promise
