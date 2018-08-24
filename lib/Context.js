const setDay = require("./util/date/setDay")

// const assign = Object.assign

// setTimeout doesn't support values more than int32
// See: https://stackoverflow.com/questions/3468607
// So, mark this value for the further usage.
const TIMEOUT_MAXVALUE = 2147483647

/**
 * Minuette timer context
 */
class Context {
  constructor(params = {}) {
    const date = new Date()

    this.__idle = setDay(date, params.runAt.day).getTime()
    this.__tick = null
  }

  __createTimer() {}

  // __executeAction(action, args) {}

  get states() {
    return this.__states
  }

  cancel() {
    clearInterval(this.__tick)
  }
}

module.exports = Context
