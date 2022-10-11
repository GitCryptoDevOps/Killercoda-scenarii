## La sous-commande delete

La sous-commande `delete` supprime un rôle du registre `galaxy.ansible.com` :

`ansible-galaxy supprimer USER.ROLE`

Les options sont :
- `-c`, `--ignore-certs` : indique à Ansible Galaxy d'ignorer les erreurs de certificat TLS;
- `-s`, `--server` : remplace le serveur par défaut `https://galaxy.ansible.com`.
