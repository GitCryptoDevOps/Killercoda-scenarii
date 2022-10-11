# Extension d'Ansible

Les modules sont particulièrement pratiques dans les cas suivants :
- L'utilisation d'une API est difficile.
- Ansible ne propose pas une fonctionnalité nécessaire.
- Le playbook a besoin de communiquer avec un logiciel n'ayant pas de module Ansible disponible.

Le chemin par défaut de la library peut être spécifié :
- au niveau du fichier de configuration `/etc/ansible/ansible.cfg` : `library = /usr/share/ansible`;
- au niveau de la ligne de commande en utilisant l'option `--module-path`;
- au niveau des variables d'environnement :

```
export ANSIBLE_LIBRARY=/srv/modules/custom_modules:/srv/modules/vendor_modules
```

Il est recommandé de stocker les modules dans le sous-répertoire `./library`.

Pour installer le linter pour Ansible :

`pip install git+https://github.com/sivel/ansible-testing.git#egg=ansible_testing`{execute}

Pour vérifier qu'il est bien installé :

`ansible-validate-modules`{execute}
