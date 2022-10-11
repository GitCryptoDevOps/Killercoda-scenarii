## Diviser un commit

To split a commit:
- enable interactive rebase mode by specifying the commit:

`git rebase --interactive HEAD~2`{{execute}}

- replace the word `pick` with `edit`,
- reset the state to the previous commit:
`git reset HEAD^`{{execute}}

- make the commits as you want them:
`git add myfile1.txt`{{execute}}
`git commit -m "My file 1"`{{execute}}
`git add myfile2.txt`{{execute}}
`git commit -m "My file 2"`{{execute}}

- continue rebasing and update the repository:
`git rebase --continue`{{execute}}

- check for changes:
`git log --oneline`{{execute}}
