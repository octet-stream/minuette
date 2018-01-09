const ms = require("ms")

const Context = require("./Context")

const proxy = require("./util/proxy")
const apply = require("./util/selfInvokingClass")

const assign = Object.assign

class Minuette {
  constructor() {
    this.__config = {}
  }

  once(time) {}

  each(time) {
    this.__config.repeat = ms(time)

    return this
  }

  between(start, end) {}

  do(act, ...args) {
    return new Context(assign({}, this.__config, {act}))
  }
}

module.exports = proxy({apply})(Munuette)
