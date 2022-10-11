# sqlmap

sqlmap (https://sqlmap.org/) runs penetration tests to detect and exploit SQL injection flaws.

Create a `sqlmap.attack` file:

```
@slow
Feature: Run sqlmap against a target

Scenario: Identify SQL injection vulnerabilities
  Given "sqlmap" is installed
  And the following profile:
    | name       | value                                           |
    | target_url | http://localhost:9292/sql-injection?number_id=1 |
  When I launch a "sqlmap" attack with:
    """
    python <sqlmap_path> -u <target_url> --dbms sqlite --batch -v 0 --tables
    """
  Then the output should contain:
    """
    sqlmap identified the following injection points
    """
  And the output should contain:
    """
    [2 tables]
    +-----------------+
    | numbers         |
    | sqlite_sequence |
    +-----------------+
    """
```{{copy}}

To run this attack:

`docker run -t --rm=true -v $(pwd):/working -w /working gauntlt sqlmap.attack`{{execute}}
