Créer l'arborescence :

- hosts
- playbook.yml
- roles/dbserver/tasks/main.yml
- roles/webserver/files/index.php
- roles/webserver/tasks/main.yml

Créer les fichiers :

- `playbook.yml`
- `cp db_tasks.yml roles/dbserver/tasks/main.yml`
- `cp webserver.yml roles/webserver/tasks/main.yml`
