Les sections `vars` et `vars_files` peuvent être incluses dans un playbook.

Les variables peuvent être spécifiées :
- dans la section `vars`,

`cat playbook_vars.yml`{execute}

- dans la section `vars_files`,

`cat playbook_vars_files.yml`{execute}

- dans la ligne de commande, en utilisant l'argument `ExtraVars`.

Chaque élément de donnée recupéré durant cette phase correspond à un fait (`fact`).

Pour créer et utiliser une simple variable `$myvar` et l'utiliser dans un playbook :

`cat playbook_var.yml`{execute}

Pour implementer les variables au niveau des tâches :

`cat playbook_var_task.yml`{execute}

Si le nombre d'informations augmente, il peut devenir pertinent d'utiliser un fichier `vars`.

Le fichier `vars` peut être inclus :
- dans une section `vars_file`,
- dans une tâche.

Créer un fichier contenant les variables :

`cat vars`{execute}

Pour utiliser les données de ce fichier dans un playbook :

- la technique de base est :

`cat playbook_using_vars_file.yml`{execute}

- une autre technique consiste à élargie le scope d'un fichier `vars` à une tâche :

`cat playbook_using_vars_file_scope.yml`{execute}

Pour exploiter le fichier `vars` :

`cat playbook_using_vars_file_use.yml`{execute}

Exécuter ce playbook :

`ansible-playbook site.yml -e "env_vars=dev" -c local`{execute}
