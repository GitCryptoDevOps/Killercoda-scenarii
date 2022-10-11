# git status

Initialisons le dépôt git :

`git init`{{execute}}
`echo "ok1" > myfile.txt`{{execute}}
`git add myfile.txt`{{execute}}
`git commit myfile.txt -m "Creation myfile.txt"`{{execute}}
`echo "ok2" > myfile.txt`{{execute}}

La situation est que nous modifié le fichier `myfile.txt` alors que la version précédente a été intégrée dans la staging area (zone de transit).

Pour visualiser les changements dans le répertoire de travail et la zone de transit par rapport au dépôt, utiliser :

`git status`{{execute}}
