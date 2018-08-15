const EventEmitter = require("events")

const assign = Object.assign
const freeze = Object.freeze

// setTimeout doesn't support values more than int32
// See: https://stackoverflow.com/questions/3468607
// So, mark this value for the further usage.
const TIMEOUT_MAXVALUE = 2147483647

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const WEEK = 7

const defaults = {
  start: null,
  end: null,
  repeat: false
}

/**
 * Minuette timer context
 */
class Context extends EventEmitter {
  constructor(options = {}) {
    super()

    this.__states = freeze({
      idle: Symbol("idle"),
      running: Symbol("running"),
      paused: Symbol("paused")
    })

    this.__state = this.__states.idle

    this.__tick = this.__createTimer(assign({}, options, defaults))
  }

  __createTimer() {}

  // __executeAction(action, args) {}

  get state() {
    return 0
  }

  get states() {
    return this.__states
  }

  cancel() {
    clearInterval(this.__tick)
  }
}

module.exports = Context
