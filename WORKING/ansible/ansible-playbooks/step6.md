## Les hôtes et l'inventaire

Par défaut, le fichier d'inventaire est `/etc/ansible/hosts`.

Pour spécifier un autre fichier d'inventaire, utiliser l'argument `-i` de la commande `ansible-playbook` :

`ansible-playbook -i hosts playbook.yml`{execute}

Pour spécifier plusieurs hôtes lors de l'exécution du playbook :

`ansible-playbook -i www.example.com,playbook.yml`{execute}
