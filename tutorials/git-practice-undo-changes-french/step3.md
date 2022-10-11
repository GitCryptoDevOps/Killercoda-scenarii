# git reset hard

`git reset --hard` permet de combiner `git reset` et `git checkout` en une seule commande.

Les fichiers seront supprimés de la zone de transit. Le répertoire de travail retrouvera alors son l'état alors du dernier commit.

Pour supprimer les changements de la zone de transit et du répertoire de travail, utiliser `git reset`.

Pour revenir à l'état d'un commit, utiliser `git reset --hard <commit-hash>`.

`HEAD` désigne le dernier hash de commit de la branche.

`git reset --hard HEAD`{{execute}}
