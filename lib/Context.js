const EventEmitter = require("events")

const assign = Object.assign
const freeze = Object.freeze

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
