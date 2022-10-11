# Resolve conflict

To resolve a conflict more simply, you can choose:
- the local version with the command `git checkout --ours staging.txt`,
- the remote version with the command `git checkout --theirs staging.txt`.

You then complete the merge with, run the commands :

`git add staging.txt`{{execute}}

`git commit --no-edit`{{execute}}

To roll back the merge, use `git reset --hard HEAD`.

To use the default commit message, use `git commit --no-edit`.
