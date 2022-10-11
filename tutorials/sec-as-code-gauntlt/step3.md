# SSLyze

SSLyze (https://github.com/nabla-c0d3/sslyze) allows to analyze the SSL/TLS configuration of a server in order to detect issues:
- bad certificate,
- weak cipher suites,
- Heartbleed,
- ROBOT,
- TLS 1.3 support, etc...

To test with SSLyze, create a `sslyze.attack` file:

```
Feature: Run sslyze against a target

Background:
  Given "sslyze" is installed
  And the following profile:
    | name     | value      |
    | hostname | google.com |

Scenario: Ensure no anonymous certificates
  When I launch an "sslyze" attack with:
    """
    python <sslyze_path> <hostname>:443
    """
  Then the output should not contain:
    """
    Anon
    """
```{{copy}}

To run this attack:

`docker run -t --rm=true -v $(pwd):/working -w /working gauntlt sslyze.attack`{{execute}}
