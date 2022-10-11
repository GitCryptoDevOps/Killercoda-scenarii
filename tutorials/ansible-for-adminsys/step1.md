Ansible permet de gérer un hôte Linux, aussi bien au niveau du système d'exploitation que des applications. C'est un excellent outil pour les AdminSys.

# Les modules système

## Le module user

Le module user permet de gérer les utilisateurs.

Créons un utilisateur système install :

```
---
- name: Linux Module running
  hosts: servers
  become: yes
  gather_facts: false
  tasks:
    - name: create a system user to be used by Ansible
      user:
        name: install
        state: present
        shell: /bin/bash
        group: sudo
        system: yes
        hidden: yes
        ssh_key_file: .ssh/id_rsa
        expires: -1
```{{copy}}

Pour supprimer un utilisateur, remplacez `state: present` par `state: absent`{{copy}}.

Pour désactiver un utilisateur, remplacez `shell: /bin/bash` par `shell: /bin/nologin`{{copy}}.

Dans un environnement cluster, on peut vouloir partager le même UID avec plusieurs utilisateurs des systèmes. Si c'est le cas, les modules suivants peuvent être utiles :

- `home` : Affiche le répertoire d'accueil de l'utilisateur,
- `ssh_public_key` : Sort dans un fichier la clé,
- `uid` : Affiche l'UID du nouvel utilisateur créé.

Exemples :

- Création de l'utilisateur dortiz :

```
---
- hosts: all

  tasks:
    - name: Add David Ortiz User to the System
      user: 
        name: dortiz
        comment: "David Ortiz has entered the building"
```

Création de l'utilisateur jdaemon et ajout au grouope baseballplayers :

```
---
- hosts: all

  tasks:  
    - name: Add Johnny Daemon User to the System
      user: 
        name: jdaemon
        comment: "Johnny Daemon has entered the building"
        groups: baseballplayers
```

## Le module group

Le module group permet de créer, modifier et supprimer un groupe. Il repose sur l'utilisation des commandes groupadd, groupdel et groupmod.

Créons un groupe clustergroup :

```
- name: create a new group
      group:
        name: clustergroup
        state: present
        gid: 1040
```

## Le module hostname

Le module hostname permet de changer le nom d'hôte.

```
- name: change hostname
      hostname:
        name: "{{ inventory_hostname }}"
```{{copy}}

Changeons les noms d'hôte en donnant celui dans le fichier inventory :

```
cat <<EOF> hosts
[servers]
server0  ansible_host=192.168.10.10     
server1  ansible_host=192.168.10.11    
server2  ansible_host=192.168.10.12
EOF
```{{copy}}

Vérifions que tout s'est bien passé :

`ansible -m shell -a hostname servers`{{copy}}

## Le module sysctl

Le module sysctl permet de gérer les attributs sysctl.

Transformons le serveur en gateway :

```
- name: enable IP forwarding on IP version 4
      sysctl:
         name: net.ipv4.ip_forward
         value: 1
        sysctrl_set: yes
        state: present
       reload: yes
```

`reload` permet d'exécuter `sysctl -p` après le changement.

## Le module service

Le module service permet de démarrer, arrêter, recharger, redémarrer et activer un service lors du boot.

Lançons et activons le service ntp :

```
- name: start and enable ntp service
      service:
          name: ntp
          state: started
          enabled: yes
```

Exemples :
- Démarrage du service httpd s'il ne tourne pas :

```
- service:
    name: httpd
    state: started
```

- arrêt du service httpd s'il tourne :

```
- service:
    name: httpd
    state: stopped
```

- redémarrage du service httpd :

```
- service:
    name: httpd
    state: restarted
```

- rechargement du service httpd :

```
- service:
    name: httpd
    state: reloaded
```

- activation du service httpd sans toucher l'état d'exécution :

```
- service:
    name: httpd
    enabled: yes
```

- redémarrage du service foo, basé sur le process en cours d'exécution /usr/bin/foo :

```
- service:
    name: foo
    pattern: /usr/bin/foo
    state: started
```

- redémarrage du service network pour l'interface eth0 :

```
- service:
    name: network
    state: restarted
    args: eth0
```

## Le module systemd

Le module systemd permet de gérer les services d'une manièrer plus avancée :

```
- name: start and enable ntp service using systemd
      systemd:
        name: ntp
        state: started
        enabled: yes
        masked: no
        daemon_reload: yes
      register: systemd
 
    - debug:
        var: systemd.status.Description
```

## Le module kernel_blacklist

Le module kernel_blacklist permet de gérer la blacklist des modules et drivers du kerneel. Ces derniers sont exclus de l'initialisation du système.

Blacklistons un driver :?????????????

```
- name: addling nouveau nvidia driver to the kernel    
      blaklist
      kernel_blacklist:
         name: nouveau
         state: present
```

## Le module cron

Le module cron permet de créet et supprimere des entrées crontab.

Créons un job qui s'assurer qu'un répertoire a les bonnes permissions :

```
- name: setup a cron job
      cron:
         name: "shared folder permission enforcer"
         hour: 0
         minute: 0
         day: *
         job: "chmod -R 777 /media/shared"
         state: present
```

Créons un job pour s'assurrer que la variable d'environnement PATH a toujours la même valeur :

```
- name: link the cron PATH variable with a new binaries location
  cron:
    name: PATH
    env: yes
    value: /usr/local/app/bin
```

## Le module authorized_key

Le module authorized_key permet de gérer les clés SSH autorisées des utilisateurs.

Ajoutons une clé SSH autorisée :

```
- name: add a new authorise SSH key to the user 
     install
      authorized_key:
          user: install
          state: present
          key: "{{ lookup('file', '/home/install /.ssh/id_rsa.pub') }}"
```

## Le module git

Le module git permet d'utiliser un repository Git. L'utilitaire rgit doit être installé sur l'hôte distant.

Clonons le repository d'Ansible :

```
- name: clone Ansible from github
      git:
        repo: https://github.com/ansible/ansible.git
        dest: /usr/local/ansible
        clone: yes
        update: yes
```

## Le module selinux

Le module selinux permet de gérer le mode et la politiue SELinux, disponible sur Red Hat.

Ce module peut nécessite un reboot après l'application de la tâche. De plus, la library Python libselinux-python doit être installée sur l'hôte distant.

Rendons permissif SELinux :

```
- name: change SELinux to permissive
      selinux:
        policy: targeted
        state: permissive
```
