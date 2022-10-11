# Les modules et les libraries

Pour appeler un module depuis la ligne de commande :

`ansible webservers -m service -a "name=httpd state=started"`{execute}

`ansible webservers -m ping`{execute}

`ansible webservers -m command -a "/sbin/reboot -t now"`{execute}

Pour appeler un module depuis une tâche de playbook :

`cat playbook_module.yml`{execute}
