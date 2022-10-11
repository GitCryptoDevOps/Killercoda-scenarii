Let's image we found a false positive vulnerability. Let's suppress (i.e. ignore) the CVE-2016-7103 vulnerability in the `jquery-ui.js` file. For this, let's create a rule for this suppression:

`vi src/suppressions.xml`{{execute}}

```
<?xml version="1.0" encoding="UTF-8"?>
<suppressions xmlns="https://jeremylong.github.io/DependencyCheck/dependency-suppression.1.1.xsd">
   <suppress>
      <filePath>/src/jquery-ui.js</filePath>
      <cve>CVE-2016-7103</cve>
   </suppress>
</suppressions>
```{{copy}}

The `filePath` tag has the `DependencyPath` value in the report and the `cve` tag has the VCE value in the report.

Let's run again Dependency Check but with the suppressions rules as arguments:

`docker run --rm --name dependency-check -v $PWD/src:/src -v $PWD/report:/report -v dependency_check_data:/usr/share/dependency-check/data/ owasp/dependency-check:6.2.1 -o /report --scan /src --format ALL --project "My Project" --suppression /src/suppressions.xml`{{execute}}

Let's look at the report in CSV report:

`cat ./report/dependency-check-report.csv`{{execute}}

Great, we see that the vulnerability has disappeared.

## Update the CVE database

`docker run --rm --name dependency-check -v $PWD/src:/src -v $PWD/report:/report -v dependency_check_data:/usr/share/dependency-check/data/ owasp/dependency-check:6.2.1 --updateonly`{{execute}}
