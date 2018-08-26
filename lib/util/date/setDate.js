const months = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11
}

/**
 * @private
 */
function setDate(date, [day, month, year]) {
  month = month == null ? date.getMonth() : months[month]

  if (year == null) {
    year = date.getFullYear()
  }

  return new Date(
    year, month, day,
    date.getHours(), date.getMinutes(),
    date.getSeconds(), date.getMilliseconds()
  )
}

module.exports = setDate
