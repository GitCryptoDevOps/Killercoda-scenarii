# View conflict

Lors d'un conflit, les différences entre la version locale et la version distante sont affichées dans le format de la commande `git diff`, qui correspond au format de la commande Linux "diff".

Les changements locaux se trouvent entre `<<<<<<< HEAD` et `=======`.

Les changements distants se trouvent entre `=======` et `>>>>>>>`.

Pour résoudre le conflit, vous devez modifier les fichiers pour qu'ils arrivent à l'état final souhaité.

Pour utiliser un outil externe, utiliser la commande `git mergetool`.
