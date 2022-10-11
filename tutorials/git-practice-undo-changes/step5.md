# git revert

To reverse (i.e., undo) multiple commits at once, you can use `~`. For example, `HEAD~2` refers to two commits from the head (`HEAD`). `...` is used to designate an interval between two commits.

To reverse the commits between `HEAD` and `HEAD~2`:

`git revert HEAD...HEAD~2`{{execute}}

To get a quick overview of the commit history:

`git log --oneline`{{execute}}

To not open the editor :

`git revert HEAD...HEAD~2 --no-edit`{{execute}}
