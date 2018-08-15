const ms = require("ms")

const Context = require("./Context")

const bind = require("./util/bind")
const proxy = require("./util/proxy")
const apply = require("./util/selfInvokingClass")

const assign = Object.assign

class Minuette {
  constructor() {
    this.__params = {
      repeat: false,
      runAt: null
    }

    bind(this, ["once", "each", "do"])
  }

  once(dateTime) {
    this.__params.runAt = new Date(Date.now() + ms(dateTime))
    this.__params.repeat = false

    return this
  }

  each(start) {
    this.__params.runAt = ms(start)
    this.__params.repeat = true

    return this
  }

  /**
   * @param {function} action – a function to execute
   * @param {any[]} args - arguments to call function with
   * @param {any} ctx
   *
   * @return {minuette.Context}
   */
  do(action, args = [], ctx = null) {
    return new Context(assign({}, this.__params, {action, args, ctx}))
  }
}

module.exports = proxy({apply})(Minuette)
