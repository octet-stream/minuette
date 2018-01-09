/**
 * @api private
 */
const proxy = handlers => Target => new Proxy(Target, handlers)

module.exports = proxy
