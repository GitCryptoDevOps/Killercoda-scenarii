## Exécution à distance avec Ansible

`cat playbook_helloworld.yml`{execute}

Identifier l'adresse IP ou le nom d'hôte de la machine cible et exécuter le playbook :

`ansible-playbook -i "192.168.10.10," -c local hellodevopsworld.yml`{execute}

Par défaut, Ansible exécute les opérations en parallèle. Pour limiter le nombre d'exécutions en parallèle, utiliser l'argument `--limit`.
