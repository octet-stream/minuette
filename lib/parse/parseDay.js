const isString = require("../util/isString")

const DAY_EXPR = new RegExp(
  "^(today|tomorrow|mon|monday|tue|tuesday|wed|wednesday|" +
  "thu|thursday|fri|friday|sat|saturday|sun|sunday)$", "i"
)

const parseDay = value => {
  if (!value) {
    return null
  }

  if (value && !isString(value)) {
    throw new TypeError("The given value must be a string.")
  }

  const day = DAY_EXPR.exec(value.trim())

  if (!day) {
    return null
  }

  switch (String(day[1]).toLowerCase()) {
    case "today":
      return "today"

    case "tomorrow":
      return "tomorrow"

    case "mon":
    case "monday":
      return "monday"

    case "tue":
    case "tuesday":
      return "tuesday"

    case "wed":
    case "wednesday":
      return "wednesday"

    case "thu":
    case "thursday":
      return "thursday"

    case "fri":
    case "friday":
      return "friday"

    case "sat":
    case "saturday":
      return "saturday"

    case "sun":
    case "sunday":
      return "sunday"

    default:
      return null
  }
}

module.exports = parseDay
