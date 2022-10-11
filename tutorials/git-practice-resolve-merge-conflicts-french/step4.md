# Non-Fast Forward

La situation d'une fusion non rapide (non-fast forward) correspond par exemple au scénario suivant :
- A fait un `git pull` des dernières modifications de B.
- B fait un `git commit` des changements dans son référentiel local.
- A fait un `git commit`des modifications non conflictuelles dans son référentiel local.
- A fait un `git pull`des dernières modifications de B.

Git est alors incapable de transmettre les changements de B à A parce que A a aussi fait des changements.

Git fait alors une fusion automatique et un commit avec un message sous la forme `Merge branch '' of `. Cela permet d'identifier clairement les points de synchronisation entre les dépôts. L'inconvénient est que cela complique la log de git.

Pour extraire les changements du dépôt distant et utiliser le message de commit par défaut :

`git pull --no-edit origin master`{{execute}}

Pour afficher les commits :

`git log --all --decorate --oneline`{{execute}}
