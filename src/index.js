/**
 * Imports
 */

import isPromise from '@f/is-promise'

/**
 * promise
 */

function promise (action, next) {
  if (isPromise(action)) return action
  return next()
}

/**
 * Exports
 */

export default promise
