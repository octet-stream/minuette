# Minuette

A job scheduler with elegant syntax.

🚧 The project currently still in development.

[![devDependencies Status](https://david-dm.org/octet-stream/minuette/dev-status.svg)](https://david-dm.org/octet-stream/minuette?type=dev)
[![Build Status](https://travis-ci.org/octet-stream/minuette.svg?branch=master)](https://travis-ci.org/octet-stream/minuette)
[![Code Coverage](https://codecov.io/github/octet-stream/minuette/coverage.svg?branch=master)](https://codecov.io/github/octet-stream/minuette?branch=master)


## Installation

You can install minuetter using Yarn:

```
yarn add minuette
```

or NPM:

```
npm i minuette
```

## API

**Public**

### `constructor Minuette`

Creates a new instance of minuette. Can be called as a regular function

#### Instance methods

##### `.once(dateOrDay) -> {Minuette}`

  * **{string}** dateOrDay – timer destination date or day of week

##### `.each(dateOrDay) -> {Minuette}`

  * **{string}** dateOrDay – timer destination date or day of week

##### `.at(time) -> {Minuette}`

Sets a time to run action.

  * **{string}** time – destination time in 24 or 12-hour format

##### `.repeat() -> {Minuette}`

##### `.do(action, args, ctx) -> {Job}`

  * **{function}** action – function to execute
  * **{any[]?}** [args = []] – arguments to call function with
  * **{any?}** [ctx = null] – "this" context to set to the function

#### Usage

Minimal example of usage

```js
import minuette from "minuette"

// Will execute given functino each friday at 21 hour.
minuette().each("friday").at("9pm").do(() => console.log("Hello, world!"))
```
