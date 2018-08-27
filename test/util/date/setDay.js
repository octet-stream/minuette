const test = require("ava")

const {WEEK, DAY} = require("../../../lib/util/date/unit")

const setDay = require("../../../lib/util/date/setDay")

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
]

test("Shuold just return different Date instance", t => {
  t.plan(1)

  const now = new Date()

  const then = setDay(now, now.getDay())

  t.not(then, now)
})

test("Should return the same day on next week", t => {
  t.plan(1)

  const now = new Date()

  const then = setDay(now, now.getDay())

  t.is(then.getTime() - WEEK, now.getTime())
})

test("Should set a day before today, but on next week ", t => {
  t.plan(1)

  const now = new Date()
  const day = new Date(now.getTime() - DAY).getDay()

  const actual = setDay(now, days[day])

  t.is(actual.getTime() - (WEEK - DAY), now.getTime())
})

test("Should return the next day", t => {
  t.plan(1)

  const now = new Date()
  const day = new Date(now.getTime() + DAY).getDay()

  const tomorrow = setDay(now, days[day])

  t.is(tomorrow.getTime() - DAY, now.getTime())
})

test("Should correctly handle sunday", t => {
  t.plan(1)

  const actual = setDay(new Date(2018, 7, 26), "sunday")

  t.is(actual.getDay(), 0)
})
