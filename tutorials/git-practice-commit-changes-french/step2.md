# git diff

Pour comparer les différences entre le répertoire de travail et une version précédemment commitée (par défaut le commit `HEAD`), utiliser : `git diff`.

Pour comparer avec une autre version, il faut fournir le hash du commit : `git diff <COMMIT>`.

Pour comparer un seul fichier avec une autre version, spécifier le nom du fichier : `git diff myfile.txt`.

Pour utiliser un outil externe, utiliser la commande `git difftool`.

`git add myfile.txt`{{execute}}

`git diff`{{execute}}
