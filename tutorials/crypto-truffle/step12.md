# Running tests on Pull Requests

Modify the pipeline:
- In the Settings tab:
  - BRANCH OR TAG THAT TRIGGERS THE PIPELINE: Pull requests by wildcard, refs/pull/*
  - Click on Save settings

In github.com:
- change a file
- In Pull requests, click on Create pull request

In buddy, in the pipelines page, enter in the pipeline.

In github.com, you see "All checks have passed".

In github.com, in the Settings tab:
- Branches | Apply rule to = master | check Require status checks to pass before merging | check buddy/pipeline/Run Unit Test On PR | check Include administrators
- Click on Create
