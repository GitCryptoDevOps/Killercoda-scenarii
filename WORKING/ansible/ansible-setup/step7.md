## L'interface en ligne de commande d'Ansible

Pour afficher la liste des arguments possibles :

`ansible --help`{execute}

Pour afficher la version de l'installation d'Ansible :

`ansible --version`{execute}

Pour vérifier la syntaxe du playbook et réaliser un test d'exécution :

`ansible foo.yml --check`

Pour afficher ce à quoi ressemblerait l'exécution des changements :

`ansible -i 192.x.x.x, x.x.x.x`

Pour spécifier un inventaire :

`ansible -inventory-file 192.x.x.x, x.x.x.x`

Pour afficher la liste des hôtes ciblés par l'exécution :

`ansible -list-hosts`

Pour condenser toutes les sorties de log sur une ligne :

`ansible –-one-line`

Pour envoyer dans une fichier la sortie au lieu de l'afficher dans la console :

`ansible –-output <filename>`

Pour vérifier la syntaxe :

`ansible –-syntax-check`

Pour écraser le timeout en secondes (10 secondes par défaut) :

`ansible –timeout=X`

Pour utiliser un login d'utilisateur distant au lieu des clés SSH partagées :

`ansible -u | --user =USERNAME`

Pour ajouter plus de détails dans la sortie de l'exécution :

`ansible –verbose`
