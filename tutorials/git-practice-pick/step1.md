# Cherry pick

`git init`{{execute}}
`git branch -a`{{execute}}
`git checkout -b mybranch1`{{execute}}
`touch myfile.txt`{{execute}}
`touch myfile.txt`{{execute}}

Situation: The `mybranch1` branch contains two files.

To merge a single commit, use the `git cherry-pick <HASH_ID|REF>` command.

`HEAD` specifies the top of the current branch.

`<BRANCH_NAME>~<NB>` refers to the `NB` last commits of the `BRANCH_NAME` branch.
