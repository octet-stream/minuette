const test = require("ava")

const parse = require("../../lib/parse/parseDay")

test("Should return null when no arguments given", t => {
  t.plan(1)

  t.is(parse(), null)
})

test("Should return null when no days matched", t => {
  t.plan(1)

  t.is(parse("notaday"), null)
})

test("Should parse the whole days by their full names", t => {
  t.plan(1)

  const expected = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ]

  const actual = expected.map(parse)

  t.deepEqual(actual, expected)
})

test("Should parse the whole days by their short names", t => {
  t.plan(1)

  const expected = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ]

  const shortNames = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

  const actual = shortNames.map(parse)

  t.deepEqual(actual, expected)
})

test("Should parse an extra shortcuts", t => {
  t.plan(1)

  const expected = ["today", "tomorrow"]

  const actual = expected.map(parse)

  t.deepEqual(actual, expected)
})
