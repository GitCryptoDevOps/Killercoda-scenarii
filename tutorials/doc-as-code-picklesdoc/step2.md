The `.feature` files are stored in the `features` directory:

`ls -l features/`{{execute}}

Produce the documentation:

`docker run -v $PWD:/app -v $PWD/output:/output devopstestlab/picklesdoc --feature-directory=/app/features --output-directory=/output --link-results-file=/output/TestResult.xml --documentation-format=dhtml`{{execute}}

`cat output/Index.html`{{execute}}
