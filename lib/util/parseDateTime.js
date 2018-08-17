const SECOND_EXPR = /(s|sec|seconds?)/
const MINUTE_EXPR = /(m|min|minutes?)/
const HOUR_EXPR = /(h|hrs|hours?)/
const DAY_EXPR = /(d|days?)/
const WEEK_EXPR = /(w|weeks?)/
const MONTH_EXPR = /(m|months?)/
const DAY_EXP = new RegExp(
  "^(today|tomorrow|mon|monday|tue|tuesday|wed|wednesday|thu|" +
  "thursday|fri|friday|sat|saturday|sun|sunday)$"
)

function parseDateTime(string) {}

module.exports = parseDateTime
