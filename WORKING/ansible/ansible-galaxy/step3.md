## La sous-commande install

La sous-commande `install` installe des rôles sur le serveur :

`ansible-galaxy install [options] [-r FILE | role_name(s)[,version] | tar_file(s)]`

La commande accepte les options :
- `username.role [, version]`: permet d'installer un rôle d'Ansible Galaxy en spécifiant le nom d'utilisateur;
- `-r`: permet d'installer un nombre quelconque de rôles fournis dans un fichier texte; ce fichier texte contient un rôle par ligne, formaté comme précédement indiqué;
- `tar_files` : permet de récupérer un rôle d'une autre source et de l'installer en faisant pointer Ansible Galaxy vers le fichier `tar.gz`;
- `-f`,` --force` : force l'écrasement d'un rôle existant sur le système;
- `-i`,` --ignore-errors` : ignore les erreurs et permet à Ansible Galaxy de passer au rôle spécifié suivant;
- `-n`,` --no-deps` : supprime les dépendances du contexte de la commande `ansible-galaxy` : aucune dépendance n'est installée avec le rôle spécifié;
- `-p ROLES_PATH`, `--roles-path=ROLES_PATH` : chemin d'accès au répertoire contenant les rôles; la valeur par défaut est `ROLES_PATH`, dont la valeur est spéficiée dans le fichier de configuration `/etc/ansible/roles/ansible.cfg`
- `-r ROLE_FILE`,` --role-file = ROLE_FILE`: fichier contenant une liste de rôles à importer; ne peut pas être utilisé si un nom de rôle ou un fichier `.tar.gz` a été spécifié;
