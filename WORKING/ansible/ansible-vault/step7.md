## Utilisation d'Ansible Vault avec les rôles

Stocker les données sensibles dans un fichier YAML :

`cat sensitive_data.yml`{execute}

Encrypter ces données :

`ansible-vault encrypt sensitive_data.yml`{execute}

Créer un rôle :

`cat main.yml`{execute}

Créer un playbook :

`cat playbook.yml`{execute}

Exécuter ce playbook :

`ansible-playbook -i 'localhost,' -c local playbook.yml --ask-vault-pass`{execute}
