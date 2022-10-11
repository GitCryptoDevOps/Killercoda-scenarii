## Les expressions, les filtres et les variables

La syntaxe de base d'un filtre Jinja ou d'une variable est : `{{ var | operation expression }}`

Par exemple, pour affecter une valeur à une variable :

`cat playbook_expressions.yml`{execute}

Exécuter ce playbok :

`ansible-playbook -i "localhost," -c local playbook_expressions.yml`{execute}
