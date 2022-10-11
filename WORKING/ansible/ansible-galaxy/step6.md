## La sous-commande info

La sous-commande `info` afficher des informations sur un rôle.

`ansible-galaxy info [options] role_name[, version]`

Cette commande supporte les options suivantes :
- `-p ROLES_PATH`, `--roles-path=ROLES_PATH` : chemin d'accès au répertoire contenant les rôles; la valeur par défaut est `ROLES_PATH`, dont la valeur est spéficiée dans le fichier de configuration `/etc/ansible/roles/ansible.cfg`
- `-c`, `--ignore-certs` : ignores les erreurs de cerficiat TLS;
- `-s`, `--server` : spécifie un autre serveur que `https://galaxy.ansible.com`.
