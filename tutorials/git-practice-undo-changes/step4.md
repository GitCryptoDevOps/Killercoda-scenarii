# git revert

To undo the commits, use the `git revert` command.

The editor is run to create a commit message for each commit.

A new commit is created to create the reverse effect of the undone commit.

If the `git push` command hasn't been done yet, you can delete the last commit with the command :

`git reset HEAD~1`{{execute}}

It's not recommended that you rewrite the history in Git because other developers may have already made commits.

To avoid opening the editor :

`git revert HEAD --no-edit`{{execute}}
