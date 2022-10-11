## La sous-commande init

La sous-commande `init` initialise une structure de rôle vide qui peut ensuite être uploadée sur `https://galaxy.ansible.com/` :

`ansible-galaxy init [options] role_name`

Cette commande supporte les options suivantes :
- `-f`, `--force` : écrase les rôles existants dans le répertoire;
- `-p INIT_PATH`, `--init-path=INIT_PATH` : spécifie le chemin d'accès où le squelette du nouveau rôle sera créé (par défaut dans le répertoire courant);
- `--offline` : n'interroge pas l'API Galaxy lors de la création du rôle.
