# Arachni

Arachni (https://www.arachni-scanner.com/) allows to assess the security of web applications:
- XSS (with DOM variants),
- SQL injection,
- NoSQL injection,
- Code injection,
- File inclusion variants,
- etc...

To look for XSS (cross site scripting) using arachni against scanme.nmap.org, create a `xss.attack` file:

```
@slow
Feature: Look for cross site scripting (xss) using arachni against scanme.nmap.org

Scenario: Using arachni, look for cross site scripting and verify no issues are found
  Given "arachni" is installed
  And the following profile:
     | name                | value                         |
     | url                 | http://scanme.nmap.org        |
  When I launch an "arachni" attack with:
  """
  arachni --checks=xss --scope-directory-depth-limit=1 <url>
  """
  Then the output should contain "0 issues were detected."
```{{copy}}

To run this attack:

`docker run -t --rm=true -v $(pwd):/working -w /working gauntlt xss.attack`{{execute}}
