# git rebase

To avoid generating multiple merge commit messages, you can use `git rebase` instead of `git merge`.

`git rebase` unwinds the changes made and replays the changes in the branch, applying the changes as if they were all on the same branch. The advantage is that it makes the history clearer. The disadvantage is that the hash ids are modified. Commits that have been made public should therefore not be rebased.
