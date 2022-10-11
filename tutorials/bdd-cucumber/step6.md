# Implement the Third Step

In the `features/step_definitions/calculator_steps.rb` file, let's implement the step 3

```
Then("the output should be {string}") do |expected_output|
  raise 'Expectation Not Met' unless @output == expected_output
end
```{{copy}}

We check that the `@output` instance variable value is the `expected_output` value specified as arugment.

Run tests:

`docker run --rm -v $PWD:/app devopstestlab/cucumber features`{{execute}}
