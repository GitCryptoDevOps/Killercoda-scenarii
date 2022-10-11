# Using Gauntlt in CI/CD pipelines

Gauntlt can be used in CI/CD pipelines. For example:
- in CI, by running security Smoke Tests: these are quick and simple tests,
- in the CD, by automating attack simulations.

If tests fail, the team must then immediately correct the problems detected.

When security tests fail, it is important to review the results and make adjustments if necessary to avoid too many false positives.

Annotations can be used to indicate whether a test is fast or slow. If the test is slow, use a `@slow` annotation at the beginning of the file. Without this annotation, the test is considered fast.

In the CI, you should only run fast tests:

```
gauntlt --tags ~@slow
```

In the CD, you should only run the slow tests:

```
gauntlt --tags @slow
```
