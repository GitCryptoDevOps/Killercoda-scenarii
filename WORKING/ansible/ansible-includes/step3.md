Pour inclure un fichier au niveau du playbook, utiliser `include`.

Par exemple, pour inclure le contenu du fichier `playbook_include.yml` :

`cat playbook.yml`{execute}

Pour passer un paramètre avec l'include :

`cat playbook_with_var.yml`{execute}

Et pour l'utiliser dans le playbook inclus :

`cat playbook_included_with_var.yml`{execute}
