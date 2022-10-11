# git reset hard

`git reset --hard` allows you to combine `git reset` and `git checkout` into one command.

The files will be removed from the staging area. The working directory will then be restored to the state it was in when the last commit was made.

To remove the changes from the staging area and working directory, use `git reset`.

To return to the state of a commit, use `git reset --hard <commit-hash>`.

`HEAD` refers to the last commit hash of the branch.

`git reset --hard HEAD`{{execute}}
