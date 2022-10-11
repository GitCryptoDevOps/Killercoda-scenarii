Execute the tests:

```
docker run -v $PWD/report:/report -v $PWD:/app \
	-e REPORT_FILE=result.xml \
	-e CYPRESS_videosFolder=/report \
	-e CYPRESS_screenshotsFolder=/report \
	devopstestlab/cypress-bdd-runner run_cypress
```{{execute}}

The result is in JUnit format:

`cat report/result.xml`{{execute}}
