### Exemples de commandes

Pour exécuter une commande ad hoc sur un groupe d'un inventaire tout en limitant les exécutions en parallèe à 5 hôtes :

`ansible europe -a "whoami" -f 5`

Pour exécuter un playbook sur le groupe `europe` avec un compte spécifique :

`ansible europe -a "/usr/bin/foo" -u username --become [--ask-become-pass]`

Pour transfer un fichire local vers des hôtes distants :

`ansible europe -m copy -a "src=/opt/myfile dest=/opt/myfile"`

Pour exécuter un playbook sur un seul hôte ou une seule adresse IP :

`ansible-playbook -i "192.168.10.10," -c local hellodevopsworld.yml`

Pour exécuter un playbook sur un groupe d'un inventaire :

`ansible-playbook myplaybook.yml`
