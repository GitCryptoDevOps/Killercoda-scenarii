# git ignore

Créons tout d'abord un fichier de log que nous voulons ignorer:

`touch myfile.log`{{execute}}

`git status`{{execute}}

Pour ignorer certains fichiers, vous devez créer un fichier `.gitignore` à la racine du dépôt contenant la liste des fichiers à ignorer. Vous pouvez utiliser des caractères génériques (`*`). Ces fichiers ne seront donc ignorés par la commande `git add`.

Pour ajouter un fichier `.gitignore` au dépôt :

`echo '*.tmp' > .gitignore`{{execute}}

`echo '*.log' >> .gitignore`{{execute}}

`git add .gitignore`{{execute}}

`git commit -m "Add .gitignore file"`{{execute}}

`git status`{{execute}}
