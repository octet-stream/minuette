const assign = Object.assign

const defaults = {
  start: null,
  end: null,
  repeat: false
}

/**
 * Scheduler context class
 */
class Context {
  constructor(options = {}) {
    options = assign({}, options, defaults)

    this.__timerRef = null
  }

  __timer() {}

  cancel() {
    clearInterval(this.__timer)
  }
}

module.exports = Context
