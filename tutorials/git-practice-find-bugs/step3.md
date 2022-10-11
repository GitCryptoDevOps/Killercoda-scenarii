## git bisect

To search for a commit that has introduced regression, you can do a binary search with the `git bisect` command.

To start bisect mode:
`git bisect start`{{execute}}

To specify the first commit that has the problem:
`git bisect bad HEAD~1`{{execute}}

To specify the last commit that does not have the problem:
`git bisect good HEAD~5`{{execute}}

Git then performs a checkout of a commit included between the two specified commits:

- If the commit doesn't have the problem, type:
`git bisect good`{{execute}}

Git then performs a checkout of the commit in the middle of the two specified commits.

- If the commit still has the problem, type:

`git bisect bad`{{execute}}

Git displays the hash of the commit.
