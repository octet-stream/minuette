/**
 * Check if given year is a leap
 *
 * @params {number} year
 *
 * @return {boolean}
 */
const isGregorianLeapYear = year => (
  ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
)

module.exports = isGregorianLeapYear
