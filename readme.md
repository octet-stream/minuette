# Minuette

A job scheduler with elegant syntax.

🚧 Project currently is still in development. Documentation and more features will be delivered soon!

[![devDependencies Status](https://david-dm.org/octet-stream/minuette/dev-status.svg)](https://david-dm.org/octet-stream/minuette?type=dev)
[![Build Status](https://travis-ci.org/octet-stream/minuette.svg?branch=master)](https://travis-ci.org/octet-stream/minuette)
[![Code Coverage](https://codecov.io/github/octet-stream/minuette/coverage.svg?branch=master)](https://codecov.io/github/octet-stream/minuette?branch=master)


## Installation

You can install minuette using Yarn:

```
yarn add minuette
```

or NPM:

```
npm i minuette
```

## API

**Public**

### `constructor Minuette()`

Creates a new instance of minuette. Can be called as a regular function.
Note that minuette sets date and time relative to your system date/time parameters.

#### Instance methods

##### `.once(dateOrDay) -> {Minuette}`

Sets a Job destination date using given day of week or date.

  * **{string}** dateOrDay – timer destination date or day of week

##### `.at(time) -> {Minuette}`

Sets a time to run action.

  * **{string}** time – destination time in 24 or 12-hour format

##### `.do(action, args, ctx) -> {Job}`

  * **{function}** action – function to execute
  * **{any[]?}** [args = []] – arguments to call function with
  * **{any?}** [ctx = null] – "this" context to set to the function

#### Usage

Minimal example of usage:

```js
import minuette from "minuette"

// Will execute given functinon at next nearest friday at 21 hour.
minuette().once("friday").at("9pm").do(() => console.log("Hello, world!"))
```

An example with absolute date:

```js
import minuette from "minuette"

// Will execute given action at next 31 Oct, in 23:00
minuette().once("31 Oct").at("23:00").do(() => console.log("Boooo!"))
```

You can optionally omit setting of a date or time. In this case, minuette will
use current date or time.

For example:

```js
import minuette from "minuette"

// Will execute this action in same day as `new Date()`
minuette().at("10pm").do(() => console.log("This message appers in 22 hour"))
```

## Roadmap

- [x] Parsers for days of week, date and time (both for 12h and 24h formats);
- [x] `.once()`, `.at()` and `.do()` methods for proof-of-concept implementation;
- [x] Minimal implementation for Job that supports big idle intervals for setTimeout;
- [ ] `.repeat()` and `.each()` methods + supports of executing actions many times
- [ ] Documentation (in progress)
- [ ] Method `.in()` that will support alternative time or date setting relative to `Date.now()`
- [ ] Additional public API for Job: Methods .pause(), .resume(), .stop() and .reset()
