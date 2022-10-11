# git revert

Pour annuler les commits, utiliser la commande `git revert`.

L'éditeur est lancé pour créer un message de commit pour chaque commit.

Un nouveau commit est créé pour créer l'effet inverse du commit annulé.

Si la commande `git push` n' pas encore été réalisée, vous pouvez supprimer le dernier commit avec la commande :

`git reset HEAD~1`{{execute}}

Il n'est pas recommandé de réécrire l'historique dans Git car d'autres développeurs pourraient avoir déjà fait des commits.

Pour ne pas ouvrir l'éditeur :

`git revert HEAD --no-edit`{{execute}}
