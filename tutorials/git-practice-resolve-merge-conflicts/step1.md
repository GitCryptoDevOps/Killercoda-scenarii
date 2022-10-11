# git merge

To download the changes into a separate branch that can be fetched and merged, use the `git fetch` command.

When merging, git attempts to combine the commits. If git detects a conflict, it returns an error and places the repository in a merge state.

To merge origin/master changes:

`git merge remotes/origin/master`{{execute}}

A conflict is detected.

`git pull` is a combination of `git fetch` and `git merge`.
