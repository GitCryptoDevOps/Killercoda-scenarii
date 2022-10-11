Pour créer des boucles imbriquées, utiliser `with_nested` :

`cat with_nested.yml`{execute}

Exécuter ce playbook :

`ansible-playbook -i 'localhost,' -c local with_nested.yml`{execute}
