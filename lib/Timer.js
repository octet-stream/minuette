const setDay = require("./util/date/setDay")

// const assign = Object.assign

// setTimeout doesn't support values more than int32
// See: https://stackoverflow.com/questions/3468607
// So, mark this value for the further usage.
const TIMEOUT_MAXVALUE = 2147483647

/**
 * Minuette timer Timer
 */
class Timer {
  constructor(params = {}) {
    let date = new Date()

    if (params.runAt.day) {
      date = setDay(date, params.runAt.day)
    }

    console.log(date.toString())

    this.__idle = date.getTime()
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

module.exports = Timer
