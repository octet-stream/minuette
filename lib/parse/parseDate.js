const isLeap = require("../util/date/isGregorianLeapYear")
const isString = require("../util/isString")

const isArray = Array.isArray

// 28-29: Feb
// 30: Apr, Jun, Sep, Nov
// 31: Jan, Mar, May, Jul, Aug, Oct, Dec
const DATES_31_EXPR = new RegExp(
  "^(0?[1-9]|[1-2][0-9]|3[0-1])" +
  "(?: +(jan|january|mar|march|may|july?|" +
  "aug|august|oct|october|dec|december))?" +
  "(?: +([2-9][0-9]{3}))?$",
  "i"
)

const DATES_30_EXPR = new RegExp(
  "^(0?[1-9]|[1-2][0-9]|30)" +
  "(?: +(apr|april|june?|sep|september|nov|november))?" +
  "(?: +([2-9][0-9]{3}))?$",
  "i"
)

const DATES_FEB_EXPR = new RegExp(
  "^(0?[1-9]|[1-2][0-9])" +
  "(?: +(feb|february))?" +
  "(?: +([2-9][0-9]{3}))?$", "i"
)

function exec(value) {
  for (const rule of [DATES_FEB_EXPR, DATES_30_EXPR, DATES_31_EXPR]) {
    const matches = rule.exec(value)
    if (isArray(matches)) {
      return matches
    }
  }

  return null
}

function getMonthName(month) {
  switch (month) {
    case "jan":
    case "january":
      return "january"

    case "feb":
    case "february":
      return "february"

    case "mar":
    case "march":
      return "march"

    case "apr":
    case "april":
      return "april"

    case "jun":
    case "june":
      return "june"

    case "jul":
    case "july":
      return "july"

    case "aug":
    case "august":
      return "august"

    case "sep":
    case "september":
      return "september"

    case "oct":
    case "october":
      return "october"

    case "nov":
    case "november":
      return "november"

    case "dec":
    case "december":
      return "december"

    default:
      return "may"
  }
}

const getYear = year => year == null ? new Date().getFullYear() : year

/**
 * Parse date
 *
 * @param {string} value
 *
 * @return {Array<string | number | undefined> | null}
 *
 * @private
 */
function parseDate(value) {
  if (!value) {
    return null
  }

  if (!isString(value)) {
    throw new TypeError("The given value must be a string.")
  }

  const matches = exec(value.trim())

  if (!isArray(matches)) {
    return null
  }

  let [day, month, year] = matches.slice(1)

  month = month ? getMonthName(month.toLowerCase()) : month

  if (year) {
    year = Number(year)
  }

  day = Number(day)

  // Make sure if february have correct day value for leap year
  if (month === "february" && !isLeap(getYear(year)) && day > 28) {
    throw new RangeError("February have only 28 days in non-leap year.")
  }

  return [day, month, year]
}

module.exports = parseDate
