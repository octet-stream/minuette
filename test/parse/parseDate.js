const test = require("ava")

const parseDate = require("../../lib/parse/parseDate")

test("Should correctly parse any group of months", t => {
  t.plan(3)

  const feb = parseDate("11 Feb 2018")
  const days30 = parseDate("14 Mar 2019")
  const days31 = parseDate("25 Jun 2020")

  t.deepEqual(feb, [11, "february", 2018])
  t.deepEqual(days30, [14, "march", 2019])
  t.deepEqual(days31, [25, "june", 2020])
})

test("Should parse every month", t => {
  t.plan(1)

  const expected = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ]

  const actual = expected.map(m => parseDate(`11 ${m}`)).map(([, m]) => m)

  t.deepEqual(actual, expected)
})

test("Should return null on executing without any arguments", t => {
  t.plan(1)

  t.is(parseDate(), null)
})

test("Should return null on inforrect value (when nothing was matched)", t => {
  t.plan(1)

  t.is(parseDate("42 Jan 2020"), null)
})

test(
  "Should throw a RangeError when days of february more then 28 " +
  "in non-leap year",
  t => {
    t.plan(3)

    const trap = () => parseDate("29 february 2018")

    const err = t.throws(trap)

    t.true(err instanceof RangeError)
    t.is(err.message, "February have only 28 days in non-leap year.")
  }
)

test("Should throw a TypeError when given value is not a string", t => {
  t.plan(3)

  const trap = () => parseDate([42])

  const err = t.throws(trap)

  t.true(err instanceof TypeError)
  t.is(err.message, "The given value must be a string.")
})
