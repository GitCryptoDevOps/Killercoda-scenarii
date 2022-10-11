# git reset

Si vous avez ajouté des fichiers à la zone de transit mais que vous voulez annuler cette opération, utiliser la commande `git reset`.

Les fichiers seront déplacés de la zone de transit vers le répertoire de travail.

Pour réinitialiser tous les fichiers, utiliser `.`.

Pour ne réinitialiser que certains fichiers, utiliser une liste de fichiers séparés par un espace.

Pour déplacer les changements de la zone de transit vers le répertoire de travail :

`git reset HEAD .`{{execute}}
