/**
 * @api private
 */
const bind = (ctx, methods) => methods.forEach(method => ctx[method].bind(ctx))

module.exports = bind
