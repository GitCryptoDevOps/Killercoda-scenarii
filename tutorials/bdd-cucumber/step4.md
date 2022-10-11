# Implement the first step

Implement the first step in the `features/step_definitions/calculator_steps.rb` file: `Given("the input {string}") do |string|`. The code becomes:

```
Given("the input {string}") do |string|
  puts "*#{string}*"
end
```{{copy}}

Some explanations:
- `{string}` is an argument used in the `Given` method in the step definition.
- `puts` affiche le contenu de la chaîne.

Run tests:

`docker run --rm -v $PWD:/app devopstestlab/cucumber features`{{execute}}

Tests pass.???

Now, let's save the value in a variable. The step 1 is now:

```
Given("the input {string}") do |input|
  @input = input
end
```{{copy}}

Some explanations:
- The input `{string}` is renamed to `input`.
- The value is saved in the instance variable `@input`.

Run tests:

`docker run --rm -v $PWD:/app devopstestlab/cucumber features`{{execute}}
