## Modification de messages de commit

To modify the last commit message only, use :
`git commit --amend`{{execute}}

To change an older commit message, however, you must rewrite the commit message history interactively using `git rebase -interactive`. To include the first commit as well, use the `--root` argument.
- enable interactive rebase mode:

`git rebase --interactive --root`{{execute}}

- replace the word `pick` with `reword` on the line whose commit message you want to change,
- in the window that opens, edit the commit message,
- verify that the commit message has been updated:
`git log --oneline`{{execute}}
