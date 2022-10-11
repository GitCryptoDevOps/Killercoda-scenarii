## Les tâches

Les playbooks représentent des ensemble de tâches.

Chaque tâche a un nom et des paramètres pour définir comment les actions vont être exécutées :

```
tasks:
  - name: Can we use Ansible to Install Apache2 web server
    apt: pkg=apache2 state=installed update_cache=true
```

Les tâches peuevnt effectuer de nombreuses actions sur les systèmes locaux ou distants : installation d'un package, copie de fichiers, démarrage de services, etc ...

```
tasks:
  - name: <some description>     
    <NOM_ACTION>: PARAM1=foo PARAM2=foo PARAM3=foo
```

Par example :

```
tasks:
  - name: Can we use Ansible to Install nginx web server
    apt: pkg=nginx state=installed update_cache=true
```
