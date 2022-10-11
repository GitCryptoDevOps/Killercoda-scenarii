## Réécrire l'historique

To change several commits into one, you need to perform what is called a "squash".

To create a new commit from the last 5 :
- run the following command:
`git rebase --interactive HEAD~5`{{execute}}

- on the first commit, leave `pick`: this is the commit that will overwrite the others,
- on the other commits, replace the word `pick` with `squash`: these commits will be overwritten,
- save the changes,
- in the window which opens showing the new state of the commits, modify the proposed changes if necessary,
- check that the commits have been modified:
`git log --oneline`{{execute}}
