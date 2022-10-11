Créer l'arborescence :

- `hosts`
- `playbook.yml`
- `roles/dbserver/tasks/main.yml`
- `roles/webserver/files/index.php`
- `roles/webserver/tasks/main.yml`

Créer ces fichiers:

`cat playbook.yml`{execute}

`cp db_tasks.yml roles/dbserver/tasks/main.yml`{execute}

`cp webserver.yml roles/webserver/tasks/main.yml`{execute}
