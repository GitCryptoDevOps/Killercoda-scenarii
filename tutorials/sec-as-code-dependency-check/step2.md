Let's display the help of the Dependency Check Docker image:

`docker run --rm owasp/dependency-check:6.2.1 -h`{{execute}}

Now, let's run Dependency Check on the jQuery UI library:

`docker run --rm --name dependency-check -v $PWD/src:/src -v $PWD/report:/report -v dependency_check_data:/usr/share/dependency-check/data/ owasp/dependency-check:6.2.1 -o /report --scan /src --format ALL --project "My Project"`{{execute}}

The `src` directory includes the dependency source code (input). The `report` directory includes the generated report (output). The `dependency_check_data` is a Docker volume used to cache the CVE database.

The report in CVS format can be found here:

`cat report/dependency-check-report.csv`{{execute}}

Other formats are supported:

`ls -l report/`{{execute}}

Several vulnerabilities have been found.
