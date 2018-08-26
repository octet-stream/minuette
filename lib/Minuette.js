const Timer = require("./Timer")

const parseTime = require("./parse/parseTime")
const parseDay = require("./parse/parseDay")

const bind = require("./util/bind")
const proxy = require("./util/proxy")
const apply = require("./util/selfInvokingClass")

const assign = Object.assign

/**
 * Exposes interface to describe date and time where Timer should be started.
 * Also gives a method to attach a function to execute at time.
 *
 * @public
 */
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

  /**
   * @return {Minuette}
   */
  repeat() {
    this.__params.repeat = true

    return this
  }

  /**
   * @return {Minuette}
   */
  once(dateOrDay) {
    this.__params.runAt.day = parseDay(dateOrDay)
    this.__params.repeat = false

    return this
  }

  /**
   * Sets a date to start
   *
   * @param {string} dateOrDay
   *
   * @return {Minuette}
   */
  each(dateOrDay) {
    this.__params.runAt.day = parseDay(dateOrDay)
    this.__params.repeat = true

    return this
  }

  /**
   * Sets a time to start.
   *
   * @param {string} time – time in 12 or 24 hours formats
   *
   * @return {Minuette}
   */
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
   * @return {minuette.Timer}
   */
  do(action, args = [], ctx = null) {
    return new Timer(assign({}, this.__params, {action, args, ctx})).run()
  }
}

module.exports = proxy({apply})(Minuette)
