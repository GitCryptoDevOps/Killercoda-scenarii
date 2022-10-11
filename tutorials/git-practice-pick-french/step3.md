# Continue cherry pick after conflict

Ajouter le fichier qui était en conflit :

`git add myfile2.txt`{{execute}}

Pour poursuivre le cherry pick, une fois les conflits résolus, utiliser :

`git cherry-pick --continue`{{execute}}

La résolution du cherry-pick génère un commit.

L'éditeur par défaut est lancé pour éditer le message de commit. En quittant, le cherry-pick est terminé.
