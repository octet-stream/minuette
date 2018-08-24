const Context = require("./Context")

const parseTime = require("./parse/parseTime")
const parseDay = require("./parse/parseDay")

const bind = require("./util/bind")
const proxy = require("./util/proxy")
const apply = require("./util/selfInvokingClass")

const assign = Object.assign

class Minuette {
  constructor() {
    this.__params = {
      repeat: false,
      runAt: {
        date: undefined,
        day: undefined,
        time: undefined
      }
    }

    bind(this, ["once", "each", "at", "do"])
  }

  repeat() {
    this.__params.repeat = true

    return this
  }

  once(date) {
    // this.__params.runAt = date
    // this.__params.repeat = false

    return this
  }

  after(dateOrDay) {
    return this
  }

  /**
   * @params {string}
   */
  each(dateOrDay) {
    this.__params.runAt.day = parseDay(dateOrDay)
    this.__params.repeat = true

    return this
  }

  at(time) {
    const matches = parseTime(time)

    if (!matches) {
      return this
    }

    const [hour, minute, second, mark] = matches

    this.__params.runAt.time = {hour, minute, second, mark}

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
