## Mise en place de l'authentification entre le serveur de contrôle et les hôtes

C'est une bonne pratique d'utiliser les clés SSH pour se connecter à un hôte distant.

La clé SSH publique doit se trouver dans les clés autorisées sur ces systèmes cibles.

Si le partage de clé SSH n'est pas possible, Ansible peut demander le mot de passe en utilisant l'argument `--ask-become-pass`.

Créer un inventaire des systèmes dans le fichier `/etc/ansible/hosts` pour stocker les systèmes distants :

`cat /etc/ansible/hosts`{execute}

Pour s'authentifier par clé SSH :

`ssh-agent bash`{execute}

`ssh-add ~/.ssh/id_rsa`{execute}

Faire un ping à tous les systèmes déclarés dans le fichier d'inventaire :

`ansible all -m ping`{execute}
