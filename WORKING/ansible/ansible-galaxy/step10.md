## La sous-commande remove

La sous-commande `remove` permte de retirer un ou plusieurs rôles :

`ansible-galaxy remove role1 role2 ...`

Cette commande accepte l'option suivante :
- `-p ROLES_PATH`, `--roles-path=ROLES_PATH` : chemin d'accès au répertoire contenant les rôles; la valeur par défaut est `ROLES_PATH`, dont la valeur est spéficiée dans le fichier de configuration `/etc/ansible/roles/ansible.cfg`
