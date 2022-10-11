# Non-Fast Forward

The situation of a non-fast forward merge corresponds for example to the following scenario:
- A does a `git pull` of B's latest changes.
- B does a `git commit` of the changes in its local repository.
- A does a `git commit` of the non-conflicting changes in its local repository.
- A does a `git pull` of B's latest changes.

Git is then unable to forward B's changes to A because A has also made changes.

Git then does an automatic merge and commit with a message in the form of `Merge branch '' of `. This makes it easy to identify synchronization points between repositories. The downside is that it complicates git's logging.

To pull changes from the remote repository and use the default commit message :

`git pull --no-edit origin master`{{execute}}

To view the commits:

`git log --all --decorate --oneline`{{execute}}
