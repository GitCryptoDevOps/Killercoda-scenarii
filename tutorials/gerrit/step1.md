Geri is a Git-based code review tool.

As developers might feel nervous committing changes to the infrastructure, it’s important to propose a system to review and approve changes made to a codebase by other developers.

Gerrit is a Java application and can be downloaded as a Java WAR.

But you can use Docker: https://hub.docker.com/r/openfrontier/gerrit/

Initialize and start Gerrit:

`docker run -d -p 8080:8080 -p `29418:29418 openfrontier/gerrit`{{execute}}

Open your browser to `http://<docker host url>:8080`.

## The git-review package

git-review is a helper application for Git to communicate with Gerrit. It adds a new command, git-review, that is used instead of git push to push changes to the Gerrit Git server.

To install it:

`pip install git-review`{{execute}}

To launch:

`git-review`{{execute}}

Squashing:
- Consider a case where you made a number of changes and later changed your mind and removed them.
    - It is not useful information for someone else that you made a set of edits and then removed them.
- Another case is when you have a set of commits that are easier to understand if they are a single commit.

Adding commits together in this way is called squashing in the Git documentation.

Rebasing:
- Another case that complicates history is when you merge from the upstream central repository several times, and merge commits are added to the history.
    - In this case, we want to simplify the changes by first removing our local changes, then fetching and applying changes from the upstream repository, and then finally reapplying our local changes.

The changes should be clean, preferably one commit.

This isn't something that is particular to Gerrit; it's easier for a reviewer to understand your changes if they are packaged nicely.

The review will be based on this commit.
- Have the latest changes from the Git/Gerrit server side.
- Rebase our changes on top of the server-side changes:

`git pull --rebase origin master`{{execute}}

- Polish our local commits by squashing them:

`git rebase -i origin/master`{{execute}}

- We can now approve the change.
- It is merged to the master branch.

Observations:
- Gerrit allows fine-grained access to sensitive codebases: changes can go in after being reviewed by authorized personnel.
- Sometimes, sensitive passwords are checked in to code.
