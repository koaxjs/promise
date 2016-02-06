/**
 * Imports
 */

import test from 'tape'
import promise from '../src'

/**
 * Tests
 */

test('should return promise if promise', (t) => {
  let p = Promise.resolve(true)
  t.equal(promise(p), p)
  t.end()
})

test('should call next if not', (t) => {
  t.plan(1)
  promise(true, t.pass)
})
