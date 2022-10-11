# The first TDD loop

## Create a first test

Add a second test to the `calculator.test.js` file:

```
test('Subtract numbers using the subtract method', () => {
  expect(calculator.subtract(10, 2)).toBe(8)
});
```{{copy}}

If there is no watcher, run tests:

`npm test`{{execute}}

Tests fail. It's red: the `substact` function doesn't exist.

## Create an empty substract function

Create the function in the `calculator.js` file:

```
function subtract(a, b) {
}

module.exports.subtract = subtract;
```{{copy}}

If there is no watcher, run tests:

`npm test`{{execute}}

Tests fail. It's red: the `substract` function doesn't return the expected value.

## Implement the subtract function

Update the `subtract` function in the `calculator.js` file:

```
function subtract(a, b) {
  return a - b;
}
```{{copy}}

If there is no watcher, run tests:

`npm test`{{execute}}

Tests pass. It's green.

## Refactor

We can refactor the `calculator.js` file. We can group the export lines as below:

```
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports.add = add;
module.exports.subtract = subtract;
```{{copy}}

If there is no watcher, run tests:

`npm test`{{execute}}

Tests still pass. It's green.
