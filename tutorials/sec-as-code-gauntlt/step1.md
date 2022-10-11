The attack files are described in Gherkin, whose syntax is:

```
Given <preconditions>

When <steps execution>

Then <expected results>
```

Applied to Gauntlt, this gives:

```
Feature: Description of the attack or audit

Background: Setting the context for all scenarios

Scenario: Logic of the attack in Given/When/Then format
  Given "tool" is installed
  When I launch a "tool" attack with:
    """
    <command line>
    """
  Then it should pass with/should contain/and should not contain:
    """
    <text>
    """
```

To get help:

`docker run --rm -it --entrypoint /bin/bash gauntlt -h`{{execute}}

Let's create a very simple test. Create a `simple.attack` file:

```
Feature: simple attack
  Scenario:
    When I launch a "simple" attack with:
      """
      ls -a
      """
    Then the output should contain:
      """
      .
      """
```{{copy}}

To run this attack:

`docker run -t --rm=true -v $(pwd):/working -w /working gauntlt xss.attack`{{execute}}

To launch all attacks, the syntax is simplified:

`docker run -t --rm=true -v $(pwd):/working -w /working gauntlt`{{execute}}

You can also easily view the steps used in the attacks:

`docker run -t --rm=true -v $(pwd):/working -w /working gauntlt --steps`{{execute}}

To obtain the list of defined attacks :

`docker run -t --rm=true -v $(pwd):/working -w /working gauntlt --list`{{execute}}
