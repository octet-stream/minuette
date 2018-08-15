const SECOND_EXPR = /(s|sec|second|seconds)/
const MINUTE_EXPR = /(m|min|minute|minutes)/
const HOUR_EXPR = /(h|hrs|hour|hours)/
const DAY_EXPR = /(d|day|days)/
const WEEK_EXPR = /(w|week|weeks)/
const MONTH_EXPR = /(m|month|months)/
const DAYS_EXP = new RegExp(
  "(mon|monday|tue|tuesday|wed|wednesday|thu|" +
  "thursday|fri|friday|sat|saturday|sun|sunday)"
)

function parseDateTime(string) {}

module.exports = parseDateTime
