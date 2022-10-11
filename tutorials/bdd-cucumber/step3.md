# Initialization

Initialize the files:

`docker run --rm -v $PWD:/app devopstestlab/cucumber --init`{{execute}}

## Create features

Let's create a `features` directory:

`mkdir features`{{execute}}

Enter in this directory:

`mkdir features/step_definitions`{{execute}}

Create a `features/addition.feature` file with the content:

```
Feature: Adding
  Scenario: Add two numbers
    Given the input "2+2"
    When the calculator is run
    Then the output should be "4"
```{{copy}}

Some explanations:
- `Feature`: line needs to start at the first column.
- `Scenario`: line needs to start with two spaces’ right indentation with regard to the Feature: starting column.
- `Given`, `When`, `Then`: The step declarations of the Scenario need to start with two spaces’ right indentation with regard to the Scenario: starting column.

Run tests:

`docker run --rm -v $PWD:/app devopstestlab/cucumber features`{{execute}}

Cucumber searched the `.feature` files. It tells us there is 1 scenario and it's not defined. This scenario has 3 steps which are not defined.

Cucumber outputs snippets we can use to define the steps. So, let's copy/paste the provided snippets (shown below) in the `features/step_definitions/calculator_steps.rb` file:

```
Given("the input {string}") do |string|
  pending # Write code here that turns the phrase above into concrete actions
end
When("the calculator is run") do
  pending # Write code here that turns the phrase above into concrete actions
end
Then("the output should be {string}") do |string|
  pending # Write code here that turns the phrase above into concrete actions
end
```{{copy}}

Run tests:

`docker run --rm -v $PWD:/app devopstestlab/cucumber features`{{execute}}

Now Cucumber complains because steps are not yet implemented. So, now we have to implement them.
