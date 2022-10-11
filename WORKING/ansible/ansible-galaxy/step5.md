## La sous-commande import

La sous-commande `import` permet d'importer un rôle depuis GitHub dans la bibliothèque `galaxy.ansible.com` :

`importation ansible-galaxy [options] github_user github_repo`

Les options sont :
- `-c`, `--ignore-certs` : indique à Ansible Galaxy d'ignorer les certificats SSL;
- `-s`, `--server` : remplace le serveur par défaut `https://galaxy.ansible.com`;
- `--branch` : spécifie une branche à importer dans Ansible Galaxy; par défaut, c'est la branche trouvée dans `meta/main.yml` qui est utilisée.