Let's use a JUnit file:

`cat test.xml`{{execute}}

This file can be easily created manually.

Now, let's create a report based on the JUnit files stored in the current directoy:

`docker run --rm -v $PWD:/results devopstestlab/junit-viewer > output/results.html`{{execute}}

Let's check the results file has been created:

`ls -l output/results.html`{{execute}}

Click on the `results.html` tab to show the results.
