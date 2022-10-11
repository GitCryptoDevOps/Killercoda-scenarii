## Git Fetch

`git pull` combine les commandes `git fetch` et `git merge`.

Pour télécharger les changements du dépôt distant, utiliser :

`git fetch`{{execute}}

Ces changements sont conservés dans la branche (`remotes/<REMOTE_NAME>/<REMOTE_BRANCH_NAME>`).

Il est alors possible de revoir les changements sans modifier votre branche courante :
`git checkout remotes/origin/master`{{execute}}

Pour fusionner les changements téléchargés dans master, utiliser `git merge remotes/<REMOTE_NAME>/<REMOTE_BRANCH_NAME> master`.


Pour afficher la liste des branches distantes ;
`git branch -r`{{execute}}
