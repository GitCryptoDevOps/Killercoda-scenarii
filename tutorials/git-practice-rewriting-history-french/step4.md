## Diviser un commit

Pour diviser un commit :
- activer le mode rebase interactif en spécifiant le commit :

`git rebase --interactive HEAD~2`{{execute}}

- remplacer le mot `pick` en `edit`,
- réinitialiser l'état au commit précédent :
`git reset HEAD^`{{execute}}

- effectuer les commits tels que vous les voulez :
`git add myfile1.txt`{{execute}}
`git commit -m "My file 1"`{{execute}}
`git add myfile2.txt`{{execute}}
`git commit -m "My file 2"`{{execute}}

- continuer le rebase et mettre à jour le dépôt :
`git rebase --continue`{{execute}}

- vérifier les changements :
`git log --oneline`{{execute}}
