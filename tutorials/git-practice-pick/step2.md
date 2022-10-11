# Resolve cherry pick conflict

The cherry pick can cause conflicts.

To abort and revert, use the `git cherry-pick --abort` command.

To perform a cherry-pick on the `mybranch2` branch:

`git cherry-pick mybranch2~1`{{execute}}

`git status`{{execute}}

`git diff`{{execute}}

`git checkout --theirs myfile1.txt`{{execute}}
