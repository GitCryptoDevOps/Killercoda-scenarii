# Resolve conflict

Pour pouvez aussi résoudre un conflit plus simplement, vous pouvez choisir:
- la version locale avec la commande `git checkout --ours staging.txt`,
- la version distante avec la commande `git checkout --theirs staging.txt`.

Vous devez ensuite compléter la fusion avec :

`git add staging.txt`{{execute}}

`git commit --no-edit`{{execute}}

Pour revenir en arrière en cours de fusion, utiliser `git reset --hard HEAD`.

Pour utiliser le message de commit par défaut, utiliser `git commit --no-edit`.
