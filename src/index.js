import { inspect } from 'util'

const parameterized = (test, title, testCases, implementation) => {
  for (const [subtitle, testCase] of normalizeTestCases(testCases)) {
    test(`${title} - ${subtitle}`, t => implementation(t, testCase))
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
