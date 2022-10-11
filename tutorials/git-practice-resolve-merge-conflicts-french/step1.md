# git merge

Pour télécharger les changements dans une branche séparée qui peut être extraite et fusionnée, utiliser la commande `git fetch`.

Lors de la fusion, git tente de combiner les commits. Si git détecte un conflit, il renvoie une erreur et place le dépôt en état de fusion.

Pour fusionner les changements de origin/master :

`git merge remotes/origin/master`{{execute}}

Un conflit est détecté.

`git pull` est une combinaison de `git fetch` et de `git merge`.
