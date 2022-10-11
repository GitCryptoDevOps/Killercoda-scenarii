## git log

Pour afficher les messages de commit :
`git log`{{execute}}

Pour utiliser un format court, utiliser l'argument `--oneline` :
`git log --oneline`{{execute}}

Pour afficher les changements, utiliser l'argument `-p` :
`git log -p`{{execute}}

Pour n'afficher que les 5 commits depuis HEAD, utiliser l'argument `-n` :
`git log -n 5`{{execute}}

Pour filtrer sur une période de temps, utiliser l'argument `--until` :
`git log --until="1 day ago"`{{execute}}

Pour filtrer les commits contenant un mot-clé dans le message de commit, utiliser l'argument `--grep` :
`git log --grep="Bug"`{{execute}}

Pour exclure les commits de merge, utiliser l'argument `-m` :
`git log -m`{{execute}}
