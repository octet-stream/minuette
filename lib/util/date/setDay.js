const {DAY, WEEK} = require("./unit")

const days = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
}

function toAdd(current, day) {
  if (day > current) {
    return (day - current) * DAY
  }

  if (day < current) {
    return ((7 - current) + day) * DAY
  }

  return WEEK
}

/**
 * Sets a day of week based on given string
 *
 * @param {Date} date
 * @param {string} value
 *
 * @private
 */
function setDay(date, value) {
  const timestamp = date.getTime()
  const current = date.getDay() || 7 // Trying this because Sunday = 0 in JS
  const day = days[value]

  return new Date(timestamp + toAdd(current, day))
}

module.exports = setDay
