## Git branch

Branches are created based on another branch (generally master). 

To creates a branch based on an existing branch, use `git branch <NEW_BRANCH> <FROM_BRANCH>`.

To switch to a branch, `git checkout <NEW_BRANCH>`.

Create a new branch `my_branch`:

`git branch my_branch master`{{execute}}

Then checkout the new branch:

`git checkout my_branch`{{execute}}

Instead of these two commands, you could use `git checkout -b <NEW_BRANCH>`. It creates and checkouts the new branch.
