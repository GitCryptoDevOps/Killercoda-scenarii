# The first TDD loop

## Create a first test

Add a test to the `calculator.test.js` file:

```
const calculator = require ('./calculator');

test('Add numbers using the add method', () => {
  expect(calculator.add(5, 2)).toBe(7)
});
```{{copy}}

If there is no watcher, run tests:

`npm test`{{execute}}

Tests fail. It's red: the `add` function doesn't exist.

## Create an empty add function

Create the function in the `calculator.js` file:

```
function add(a, b) {
}

module.exports.add = add;
```{{copy}}

If there is no watcher, run tests:

`npm test`{{execute}}

Tests fail. It's red: the function doesn't return the expected value.

## Implement the add function

Update the `add` function in the `calculator.js` file:

```
function add(a, b) {
  return a + b;
}
```{{copy}}

If there is no watcher, run tests:

`npm test`{{execute}}

Tests pass. It's green.

## Refactor

The code is very simple. We see nothing to refactor.
