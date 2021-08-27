<h1 align="center">
  pava
</h1>

<div align="center">
  <a href="https://npmjs.org/package/pava">
    <img src="https://badgen.now.sh/npm/v/pava" alt="version" />
  </a>
  <a href="https://github.com/TomerAberbach/pava/actions">
    <img src="https://github.com/TomerAberbach/pava/workflows/CI/badge.svg" alt="CI" />
  </a>
  <a href="https://bundlephobia.com/result?p=pava">
    <img src="https://badgen.net/bundlephobia/minzip/pava" alt="minzip size" />
  </a>
</div>

<div align="center">
  Parameterized tests for <a href="https://github.com/avajs/ava">ava</a>!
</div>

## Install

```sh
$ npm i pava
```

## Usage

```js
import test from 'ava'
import parameterized from 'pava'
import { mySerialize, myDeserialize } from './my-code.js'

// Writing your test like this...
parameterized(
  test,
  `integer serializing and deserializing`,
  {
    zero: 0,
    negative: -4,
    positive: 5,
    large: 100000,
  },
  (t, integer) => {
    t.is(myDeserialize(mySerialize(integer)), integer)
  },
)

// Is the same as writing it like this!
test(`integer serializing and deserializing - zero`, t => {
  t.is(myDeserialize(mySerialize(0)), 0)
})
test(`integer serializing and deserializing - negative`, t => {
  t.is(myDeserialize(mySerialize(-4)), -4)
})
test(`integer serializing and deserializing - positive`, t => {
  t.is(myDeserialize(mySerialize(5)), 5)
})
test(`integer serializing and deserializing - large`, t => {
  t.is(myDeserialize(mySerialize(100000)), 100000)
})

// And writing your test like this...
parameterized(
  test,
  `integer serializing and deserializing`,
  [0, -4, 5, 100000],
  (t, integer) => {
    t.is(myDeserialize(mySerialize(integer)), integer)
  },
)

// Is the same as writing it like this!
// Note: the titles aren't as nice for large test case objects
test(`integer serializing and deserializing - 0`, t => {
  t.is(myDeserialize(mySerialize(0)), 0)
})
test(`integer serializing and deserializing - -4`, t => {
  t.is(myDeserialize(mySerialize(-4)), -4)
})
test(`integer serializing and deserializing - 5`, t => {
  t.is(myDeserialize(mySerialize(5)), 5)
})
test(`integer serializing and deserializing - 100000`, t => {
  t.is(myDeserialize(mySerialize(100000)), 100000)
})

// You can also use any ava test interface!
parameterized(test.serial /* ... */)
parameterized(test.failing /* ... */)
parameterized(test.only /* ... */)
parameterized(test.skip /* ... */)
parameterized(test.todo /* ... */)
// etc.
```

See the
[type definitions](https://github.com/TomerAberbach/pava/blob/main/src/index.d.ts)
for more documentation.

## Contributing

Stars are always welcome!

For bugs and feature requests,
[please create an issue](https://github.com/TomerAberbach/pava/issues/new).

For pull requests, please read the
[contributing guidelines](https://github.com/TomerAberbach/pava/blob/main/contributing.md).

## License

[Apache 2.0](https://github.com/TomerAberbach/pava/blob/main/license)

This is not an official Google product.
