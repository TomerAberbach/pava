/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import test from 'ava'
import { testProp, fc } from 'ava-fast-check'
import parameterized from '../src/index.js'

testProp(
  `throws on not array or object of test cases`,
  [
    fc.constantFrom(
      test,
      test.serial,
      test.failing,
      test.only,
      test.skip,
      test.todo,
    ),
    fc
      .anything()
      .filter(
        value =>
          value != null && typeof value !== `object` && !Array.isArray(value),
      ),
  ],
  (t, test, value) => {
    t.throws(
      () => {
        // eslint-disable-next-line no-empty-function
        parameterized(test, `test`, value, () => {})
      },
      {
        instanceOf: Error,
        message: `Expected an array or object of test cases, but got: ${value}`,
      },
    )
  },
)

parameterized(
  test,
  `array of test cases`,
  [`a`, `b`, `c`, `d`],
  (t, letter) => {
    t.is(typeof letter, `string`)
  },
)

parameterized(
  test,
  `object of test cases`,
  { a: `1`, b: `2`, c: `3` },
  (t, letter) => {
    t.is(typeof letter, `string`)
  },
)

parameterized(
  test.serial,
  `different test interface`,
  { a: `1`, b: `2`, c: `3` },
  (t, letter) => {
    t.is(typeof letter, `string`)
  },
)
