## L'inventaire Ansible

Le fichier d'inventaire par défaut d'Ansible est `/etc/ansible/hosts`.

Voici un exemple d'inventaire contenant plusieurs groupes d'éléments d'inventaires :

`cat hosts`{execute}

Il est possible d'ajouter un hôte qui ne figure dans aucun groupe.

Pour cibler un groupe d'hôte :

`ansible playbookfoo.yml -l 'groupname'`{execute}
