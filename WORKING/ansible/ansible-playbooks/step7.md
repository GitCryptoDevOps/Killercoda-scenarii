## Ciblage de l'infrastructure

Les hôtes sont habituellement définis dans le fichier d'inventaire `/etc/ansible/hosts`, qui liste les hôtes pouvant être ciblés par les playbooks :

`cp hosts /etc/ansible/hosts`{execute}

`cat /etc/ansible/hosts`{execute}

Pour cibler un groupe d'hôte (`web`) dans un playbook :

`cat playbook_group.yml`{execute}

Exécuter ce playbook sur l'ensemble des hôtes :

`ansible-playbook playbook.yml -i hosts`{execute}

Le ciblage des hôtes peut se faire sur un ou plusieurs groupes, sur un hôte et peut utiliser des jokers ("wild cards") :

- `hosts: all` : cible tous les hôtes du fichier d'inventaire;
- `hosts: hostname` : cible seuelment le nom d'hôte spécifié;
- `hosts: groupname` : cible tous les hôtes du groupe spécifié;
- `hosts: groupA,groupB` : cible tous les hôtes des groupe spécifié;
- `hosts: group1,host1` : cible les hôtes du groupe spécifié et l'hôte spécifié;
- `hosts: *.google.com` : cible les hôtes avec un joker.

La section `hosts` peut aussi contenir les groupes :

```
[web]
192.168.10.10

[production]
192.168.10.11
```

La section `hosts` peut aussi utiliser des variables pour cibler des hôtes :

- `hosts: $myhosts` : cible tous les hôtes spécifiés dans la variable `$myhosts`.
```

Pour donner une valeur à cette variable :

`ansible-playbook playbook.yml --extra-vars="groups=production"`{execute}
