## Exécution en local avec Ansible

Pour exécuter une commande ad hoc sur un système local :

`ansible all -i "localhost," -c local -m shell -a 'echo Hello World'`{execute}

Pour exécuter cette même commande via un playbook Ansible :

`cat playbook_helloworld.yml`{execute}

Exécuter ce playbook :

`ansible-playbook -i 'localhost,' -c local playbook_helloworld.yml`{execute}
