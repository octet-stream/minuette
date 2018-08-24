const isString = require("../util/isString")

const TIME_12H_FORMAT = new RegExp(
  "^(1[0-2]|0?[1-9])" + // Hours. Matches 01-12.
  "(?::([0-5]?[0-9]))?" + // Minutes. Matches 00-59. Optional
  "(?::([0-5]?[0-9]))?" + // Seconds. Matches 00-59. Optional
  " *([ap]m)$", // Matches am or pm marks. Allows optional leading whitespace
  "i"
)

const TIME_24H_FORMAT = new RegExp(
  "^(2[0-3]|[01]?[0-9])" + // Hours. Matches 01-12.
  "(?::([0-5]?[0-9]))?" + // Minutes. Matches 00-59. Optional
  "(?::([0-5]?[0-9]))?$", // Seconds. Matches 00-59. Optional
)

const isArray = Array.isArray

/**
 * Matches time units in 12 and 24 hours formats
 *
 * @param {string} value
 *
 * @return {string[] | null} – an array of matches time units or null
 *
 * @throws {TypeError} – ehen given value is not a string
 */
function parseTime(value) {
  if (!value) {
    return null
  }

  if (!isString(value)) {
    throw new TypeError("The given value must be a string.")
  }

  value = value.trim()

  for (const format of [TIME_12H_FORMAT, TIME_24H_FORMAT]) {
    const matched = format.exec(value)
    if (isArray(matched)) {
      return matched.slice(1)
    }
  }

  return null
}

module.exports = parseTime
