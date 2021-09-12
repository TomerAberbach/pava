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

import { inspect } from 'util'

const parameterized = (test, title, testCases, implementation) => {
  for (const [subtitle, testCase] of normalizeTestCases(testCases)) {
    test(`${title} › ${subtitle}`, t => implementation(t, testCase))
  }
}

const normalizeTestCases = testCases => {
  if (Array.isArray(testCases)) {
    return testCases.map((testCase, index) => [
      `case ${index + 1}: ${inspect(testCase)}`,
      testCase,
    ])
  }

  if (testCases != null && typeof testCases === `object`) {
    return Object.entries(testCases)
  }

  throw new TypeError(
    `Expected an array or object of test cases, but got: ${testCases}`,
  )
}

export default parameterized
