Pour créer une boucle sur un dictionnaire de couples clé-valeur, utiliser `with_dict` :

`cat with_dict.yml`{execute}

Exécuter ce playbook :

`ansible-playbook -i 'localhost,' -c local with_dict.yml`{execute}
