import test, { ExecutionContext } from 'ava'
import { expectType } from 'tsd'
import parameterized from '../src'

parameterized(test, `wow`, [`a`], (t, a) => {
  expectType<ExecutionContext>(t)
  expectType<string>(a)
})
