## La sous-commande search

La sous-commande `search` permet de rechercher des rôles sur le serveur Ansible Galaxy :

`ansible-galaxy search [options] [motclé1 motclé2]`

Cette commande supporte les options suivantes :
- `--galaxy-tags` : filtre la recherche à partir de tags; les tags sont spécifiés sous forme de liste de tags séparés par une virgule;
- `--platforms` : filtre les rôles en fonction des plateformes prises en charge; les plateformes sont spécifiées sous la forme d'une liste de plateformes séparées par une virgule;
- `--author` : filtre les auteurs sur la base du nom d'utilisateur spécifié;
- `-c`, `--ignore-certs` : ignore les erreurs de certificat TLS;
- `-s`, `--server` : change l'URL du serveur d'Ansible Galaxy.
