## Réécrire l'historique

Pour modifier plusieurs commits en un seul, vous devez réaliser ce qu'on appelle un "squash".

Pour créer un nouveau commit à partir des 5 derniers :
- lancer la commande suivante :
`git rebase --interactive HEAD~5`{{execute}}

- sur le premier commit, laisser `pick` : c'est le commit qui va écraser les autres,
- sur les autres commits, remplacer le mot `pick` par `squash` : ces commits vont être écrasés.
- sauvegarder les modifications,
- dans la fenêtre qui s'ouvre et affichant le nouvel état des commits, modifier les changements proposés si besoin.
- vérifier que les commits ont bien été modifiés :
`git log --oneline`{{execute}}
