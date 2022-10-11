# Continue cherry pick after conflict

Add the file that was in conflict:

`git add myfile2.txt`{{execute}}

To continue the cherry pick, once the conflicts are resolved, use :

`git cherry-pick --continue`{{execute}}

Resolving the cherry-pick generates a commit.

The default editor is launched to edit the commit message. On exit, the cherry-pick is terminated.
