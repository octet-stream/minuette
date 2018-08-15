const ms = require("ms")

const Context = require("./Context")

const bind = require("./util/bind")
const proxy = require("./util/proxy")
const apply = require("./util/selfInvokingClass")

const assign = Object.assign

class Minuette {
  constructor() {
    this.__config = {
      repeat: false,
      start: null,
      end: null
    }

    bind(this, ["once", "each", "do", "at", "between"])
  }

  once(time) {
    this.__config.repeat = false
    this.__config.start = new Date(Date.now() + ms(time))

    return this
  }

  each(repeat, start = null) {
    this.__config.repeat = ms(repeat)
    this.__config.start = ms(start)

    return this
  }

  between(start, end) {
    this.__config.start = ms(start)
    this.__config.end = ms(end)

    return this
  }

  at(time) {
    this.__start = ms(time)
  }

  /**
   * @param {function} action – a function to execute
   * @param {any[]} args - arguments to call function with
   * @param {any} ctx
   *
   * @return {minuette.Context}
   */
  do(action, args = [], ctx = null) {
    return new Context(assign({}, this.__config, {action, args, ctx}))
  }
}

module.exports = proxy({apply})(Minuette)
