Gauntlt ("Be Mean to Your Code") (http://gauntlt.org/) allows to execute security tests.

Gauntlt is based on the Cucumber BDD (Behavior-Driven Development) testing framework. It includes several attack tools:
- `sslyze`: verifies the SSL configuration,
- `nmap`: verifies the network configuration,
- `sqlmap`: tests for SQL injection vulnerabilities,
- `curl`: performs simple web application attacks,
- `arachni`, `dirb` and `garmr`: searches for common vulnerabilities,
- `Hartbleed`: checks for specific vulnerabilities.

Example attack files are provided in the git repository. You can also integrate any command line executable tool.
