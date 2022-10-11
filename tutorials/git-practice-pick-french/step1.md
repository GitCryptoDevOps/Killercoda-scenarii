# Cherry pick

`git init`{{execute}}
`git branch -a`{{execute}}
`git checkout -b mybranch1`{{execute}}
`touch myfile.txt`{{execute}}
`touch myfile.txt`{{execute}}


Situation : La branche `mybranch1` contient deux fichiers.

Pour fusionner un seul commit, utiliser la commande `git cherry-pick <HASH_ID|REF>`.

`HEAD` spécifie le haut de la branche courante.

`<BRANCH_NAME>~<NB>` fait référence au `NB` derniers commits de la branche `BRANCH_NAME`.
