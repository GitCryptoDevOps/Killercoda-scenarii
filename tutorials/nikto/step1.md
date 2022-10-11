To get help:

`docker run --rm devopstestlab/nikto -h`{{execute}}

To scan a website:

`docker run --rm --network host -v $PWD/report:/report devopstestlab/nikto -h 0.0.0.0:80 -o /report/report.html`{{execute}}

A report has been generated:

`cat report/report.html`{{execute}}
