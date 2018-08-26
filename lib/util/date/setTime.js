/**
 * Sets a new date and time using given units and base date
 *
 * @param {Date} date
 * @param {[number, number?, number?, string?]} units
 *
 * @return {Date}
 *
 * @private
 */
function setTime(date, [hours, minutes, seconds, period]) {
  // Normalize hours to 24-hour format
  if (period === "am" && hours === 12) {
    hours = 0
  } else if (period === "pm" && hours < 12) {
    hours += 12
  }

  if (minutes == null) {
    minutes = date.getMinutes()
  }

  if (seconds == null) {
    seconds = date.getSeconds()
  }

  return new Date(
    date.getFullYear(), date.getMonth(), date.getDay(),
    hours, minutes, seconds,
    date.getMilliseconds()
  )
}

module.exports = setTime
