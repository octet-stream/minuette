const test = require("ava")

const parseTime = require("../../lib/parse/parseTime")

test("Should just parse time in 24h format", t => {
  t.plan(1)

  const expected = [0, 0, 0]

  t.deepEqual(parseTime("00:00:00"), expected)
})

test("Should just parse a time in 12h format", t => {
  t.plan(1)

  const expected = [12, 58, 32, "am"]

  t.deepEqual(parseTime("12:58:32am"), expected)
})

test("Should allow space(s) between time and am/pm mark", t => {
  t.plan(1)

  const expected = [12, 58, 32, "am"]

  t.deepEqual(parseTime("12:58:32          am"), expected)
})

test("Should not parse incorrect time in both formats", t => {
  t.plan(6)

  // Incorrect HH unit
  t.is(parseTime("13:00:00am"), null)
  t.is(parseTime("34:00:00"), null)

  // Incorrect MM unit
  t.is(parseTime("01:60:00am"), null)
  t.is(parseTime("00:60:00"), null)

  // Incorrect SS unit
  t.is(parseTime("01:00:60am"), null)
  t.is(parseTime("00:00:60"), null)
})

test("Should allow to omit MM and SS units in both formats", t => {
  t.plan(4)

  t.deepEqual(parseTime("01:00am"), [1, 0, undefined, "am"])
  t.deepEqual(parseTime("00:00"), [0, 0, undefined])

  t.deepEqual(parseTime("01am"), [1, undefined, undefined, "am"])
  t.deepEqual(parseTime("00"), [0, undefined, undefined])
})

test("Should return null on call without any arguments", t => {
  t.plan(1)

  t.is(parseTime(), null)
})

test("Should throw TypeError when given value is not a string", t => {
  t.plan(3)

  const trap = () => parseTime(42)

  const err = t.throws(trap)

  t.true(err instanceof TypeError)
  t.is(err.message, "The given value must be a string.")
})
