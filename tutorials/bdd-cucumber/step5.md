# Implement the Second Step

In the `features/step_definitions/calculator_steps.rb` file, let's write the implementation in the second step:

```
When("the calculator is run") do
  @output = `ruby features/calculator.rb '#{@input}'`
  raise 'Calculator Failed To Run!' unless $?.success?
end
```{{copy}}

Some explanations:
- `{@input}` get the value of the variable `@input`.
- ``` calls the command `ruby features/calculator.rb '#{@input}'`.
- `@output = ` saves the result in the instance variable `output`.
- `$?` is a global variable containing the exist status of the command,
- `success?` returns `true` if successfull; `false` if not,
- `raise` raises an exception if the conditions after `unless` is `false`.

Run tests:

`docker run --rm -v $PWD:/app devopstestlab/cucumber features`{{execute}}

Tests fail because the calculator.rb file doesn't exist.

So, let's create an empty `features/calculator.rb` file:

`touch features/calculator.rb`{{execute}}

Run tests:

`docker run --rm -v $PWD:/app devopstestlab/cucumber features`{{execute}}
