# Generate a report

Generate a HTML report:

`docker run --rm -v $PWD:/app -v $PWD/output:/reports devopstestlab/cucumber features --format html --out=reports/report.html`{{execute}}

`cat output/report.html`{{execute}}
