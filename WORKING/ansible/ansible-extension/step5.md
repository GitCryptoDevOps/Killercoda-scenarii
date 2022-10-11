## Mise en place de l'environnement de développement des plugins Ansible

Les plugins d'action doivent se trouver dans le sous-répertoire `./<type de plugin>_plugins` au niveau du répertoire du playbook :

```
foo.yml
action_plugins/
action_plugin/mymodule.py
```

Pour modifier le chemin de stockage de ces plugins, spécifiez ces chemins d'accès dans le fichier de configuration : ???

```
#action_plugins = /usr/share/ansible/plugins/action
#callback_plugins = /usr/share/ansible/plugins/callback
#connection_plugins = /usr/share/ansible/plugins/connection
#lookup_plugins = /usr/share/ansible/plugins/lookup
#vars_plugins = /usr/share/ansible/plugins/vars
#filter_plugins = /usr/share/ansible/plugins/filter
#test_plugins = /usr/share/ansible/plugins/test
```
