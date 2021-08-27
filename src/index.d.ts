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

import { ExecutionContext, ImplementationResult } from 'ava'

/**
 * Declares a parameterized ava test.
 *
 * @param test ava test interface (e.g. `test`, `test.serial`, `test.failing`,
 *   etc.)
 * @param title title of the parameterized test
 * @param testCases an array of test cases or an object mapping test case
 *   subtitle to test case
 * @param implementation test implementation that receives the ava `t` object
 *   for its first argument and a single test case for its second argument
 */
declare const parameterized: <TestCase, Context = unknown>(
  test: (title: string, implementation: Implementation<Context>) => void,
  title: string,
  testCases: TestCases<TestCase>,
  implementation: Implementation<TestCase, Context>,
) => void

/**
 * An array of test cases or an object mapping test case subtitle to test case.
 */
export type TestCases<TestCase> = Array<TestCase> | Record<keyof any, TestCase>

/**
 * A test implementation that receives the ava `t` object for its first argument
 * and a single test case for its second argument.
 */
export type Implementation<TestCase, Context = unknown> = (
  t: ExecutionContext<Context>,
  testCase: TestCase,
) => ImplementationResult

export default parameterized
