const EventEmitter = require("events")

const assign = Object.assign

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

    this.__tick = this.__createTimer(assign({}, options, defaults))
  }

  __createTimer() {}

  // __executeAction(action, args) {}

  cancel() {
    clearInterval(this.__tick)
  }
}

module.exports = Context
