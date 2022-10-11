# Les modules d'exécution de commande à distance

Ces modules permettent d'exécuter une commande à distance.

## Le module raw

Le module raw permet d'exécuter une commande à distance via SSH. Il ne supporte ni les pipelines ni les handlers. Il supporte par contre Linux et Windows avec PowerShell.

La fonctionnalité fact gathering doit être désactivée.

L'option become, qui permet de choisir l'utilisateur qui exécute la tâche, ne fonctionne pas avec le module raw. Il est nécessaire de préfixer les commandes qui nécessitent la permission root de sudo.

Créons un fichier sur l'hôte distant :

```
- name: run a simple command
      raw: echo "this was written by a raw Ansible module!!" >> ~/raw.txt
```

## Le module command

Le module command permet, tout comme le module raw, d'exécuter des tâches à distance mais permet de retourner des valeurs qui peuvent être utilisées par les autres tâches. Par contre, ce module ne supporte pas :
- les variables d'environnement spéciales (exemple : $PATH),
- les pipelines,
- la redireection.

Récupérons la sortie :

```
- name: run a simple command
      command: cat ~/raw.txt
      register: rawtxt
 
    - debug: var=rawtxt.stdout
```

## Le module shell

Le module shell, tout comme raw et command, d'exécuter une commande à distance. Il permet cependant :
- de spécifier le répertoire de travail,
- le bash utilisé pour exécuter les commandes (par défaut, le shell /bin/sh est utilisé).

Exemple :

```
- name: run a simple shell script
      shell: ./shell_script.sh >> ~/shell.txt
      args:
          chdir: /usr/local/
          creates: ~/shell.txt
          executable: /bin/csh
```

## Le module script

Le module script permet d'exécuter un script (shell, Python, Perl, Ruby) stocké localement sur un hôte distant. C'est Ansible qui s'occupe de transférer ce script.

Exemple

```
- name: execute a script on a remote host
      script: ./shell_script.py –some-argumets "42"
      args:
          creates: ~/shell.txt
          executable: python
```

## Le module expect

Le module expect permet d'exécuter des scripts interactifs.

`python` et `pexpect` doivent être installés sur l'hôte distant.

Changeons le mot de passe de l'utilisateur :

```
- name: change user1 password
      expect:
        command: passwd user1
        responses:
          (?i)password: "Ju5tAn07herP@55w0rd":
```
