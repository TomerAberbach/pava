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
