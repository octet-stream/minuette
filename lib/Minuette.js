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

    bind(this, ["once", "each", "at", "do"])
  }

  once(date) {
    this.__params.runAt = new Date(Date.now() + ms(date))
    this.__params.repeat = false

    return this
  }

  /**
   * @params {string}
   */
  each(dateOrDay) {
    this.__params.runAt = ms(dateOrDay)
    this.__params.repeat = true

    return this
  }

  // at(time) {}

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
