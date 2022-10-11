# git status

Une fois un répertoire dans le référentiel, on parle de répertoire de travail. Ce dernier contient la dernière version téléchargée du dépôt ainsi que les modifications à valider. Lorsque vous modifiez des fichiers, les modifications sont effectuées dans ce répertoire.

Pour afficher la liste des fichiers qui ont changé entre votre répertoire de travail et ce qui se trouve sur le dépôt, utiliser la commande :

`git status`{{execute}}

Cette commande affiche ce qu'on appelle l'état de l'arbre de travail.

Par défaut, les fichiers sont dits "non suivis".

`echo "Hello" > myfile.txt`{{execute}}

`git status`{{execute}}
