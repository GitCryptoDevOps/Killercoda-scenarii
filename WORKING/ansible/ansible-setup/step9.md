## Configuration

Le fichier de configuration principal est `/etc/ansible/ansible.cfg`.

Il contient des valeurs par défaut commentées :

```
#inventory = /etc/ansible/hosts
#library = /usr/share/my_modules/
#module_utils = /usr/share/my_module_utils/
#remote_tmp = ~/.ansible/tmp
#local_tmp = ~/.ansible/tmp
#forks = 5
#poll_interval = 15
#sudo_user = root
#ask_sudo_pass = True
#ask_pass = True
#transport = smart
#remote_port = 22
#module_lang = C
#module_set_locale = False
```

Pour désactiver la vérification des clés d'hôte : `#host_key_checking = False`

Cela peut être utile pour les nouveaux hôtes.

Pour spécifier l'utilisateur à utiliser par défaut : `#remote_user = root`

Pour désactiver la log : `#no_log = False`
