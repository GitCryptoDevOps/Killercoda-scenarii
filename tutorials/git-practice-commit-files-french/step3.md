# git add

Git a trois zones :
- un répertoire de travail,
- une zone de transit (staging area),
- le dépôt lui-même.

Avant d'ajouter des fichiers à un dépôt Git, il faut les ajouter à la zone de transit.

Pour ajouter certains fichiers depuis le répertoire de travail vers la zone de transit : `git add <FILENAME|DIRECTORY_NAME>`.

Il est recommandé de réaliser des commits ciblés, petits et fréquents.

Si un fichier qui se trouve déjà dans la staging area est modifié, vous devez ajouter à nouveau ce fichier à la staging area pour prendre en compte ces changements.

Ajouter le fichier `index.html` au staging area :

`git add myfile.txt`{{execute}}

Afficher l'état du répertoire de travail et de la zone de transit :

`git status`{{execute}}
