## Modification de messages de commit

Pour modifier le dernier message de commit seulement, utiliser :
`git commit --amend`{{execute}}

Par contre, pour modifier un message de commit plus ancien, vous devez ré-écrire l'historique des messages de commit de manière interactive en utilisant `git rebase -interactive`. Pour inclure également le premier commit, utiliser l'argument `--root`.
- activer le mode rebase interactif :

`git rebase --interactive --root`{{execute}}

- remplacer le mot `pick` par `reword` sur la ligne dont vous voulez modifier le message de commit.
- dans la fenêtre qui s'ouvre, modifier le message de commit.
- vérifier que le message de commit a bien été mis à jour :
`git log --oneline`{{execute}}
