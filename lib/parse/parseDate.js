const isLeap = require("../util/date/isGregorianLeapYear")
const isString = require("../util/isString")

const isArray = Array.isArray

// 28-29: Feb
// 30: Apr, Jun, Sep, Nov
// 31: Jan, Mar, May, Jul, Aug, Oct, Dec
const DATES_EXPR = new RegExp(
  "^(0?[1-9]|[1-2][0-9]|3[0-1])" +
  "$", "i"
)

/**
 * Parse date
 *
 * @param {string} value
 *
 * @return {Array<string | undefined> | null}
 */
function parseDate(value) {
  if (!value) {
    return null
  }

  if (!isString(value)) {
    throw new TypeError("The given value must be a string.")
  }

  const matches = DATES_EXPR.exec(value)

  if (!isArray(matches)) {
    return null
  }

  const [day, ref, year] = matches.slice(1)
  const month = ref.toLowerCase()

  if (isLeap(year) && month === "february") {
    return true
  }

  return [Number(day), month, Number(year)]
}

module.exports = parseDate
