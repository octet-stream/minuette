const ms = require("ms")

const Context = require("./Context")

const bind = require("./util/bind")
const proxy = require("./util/proxy")
const apply = require("./util/selfInvokingClass")

const assign = Object.assign

class Minuette {
  constructor() {
    this.__config = {}

    bind(this, ["once", "each", "do", "between"])
  }

  once(time) {
    this.__config.repeat = false
    this.__config.from = new Date(ms(time))

    return this
  }

  each(repeat, start = null) {
    this.__config.repeat = ms(repeat)
    this.__config.from = start

    return this
  }

  between(start, end) {}

  do(action, ...args) {
    return new Context(assign({}, this.__config, {action, args}))
  }
}

module.exports = proxy({apply})(Minuette)
