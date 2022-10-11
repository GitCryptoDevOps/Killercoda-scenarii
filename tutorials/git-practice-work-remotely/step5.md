## Git Fetch

`git pull` combines the `git fetch` and `git merge` commands.

To download changes from the remote repository, use :

`git fetch`{{execute}}

These changes are stored in the branch (`remotes/<REMOTE_NAME>/<REMOTE_BRANCH_NAME>`).

It is then possible to review the changes without modifying your current branch:
`git checkout remotes/origin/master`{{execute}}

To merge the uploaded changes into master, use `git merge remotes/<REMOTE_NAME>/<REMOTE_BRANCH_NAME> master`.

To display the list of remote branches;
`git branch -r`{{execute}}
