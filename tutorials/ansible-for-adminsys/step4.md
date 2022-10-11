# Les modules de fichier

## Les modules file et acl

Le module `file` permet de gérer les fichiers et les répertoires :
- création,
- suppression,
- création de symlinks,
- permissions,
- propriétaire.

Le module acl (ACL - Access Control List) permet de gérer les permissions et le propriétaire de fichiers et de répertoires.

Exemple :

```
- name: create a file with some specific acl
      file:
         path: /usr/local/script.py
         state: touch
         owner: user1
         group: developers
         mode: 0755
     
    - name: change acl of a file
      acl:
         path: /usr/local/script.py
         entity: user2
         permission: w
         state: present
```

Voici quelques exemples :

Création d'un répertoire :

```
- name: Creates a directory
  file: path=/opt/helloWorld state=directory
```

Création d'un répertoire dont le propriétaire est le groupe baseballplayers :

```
- name: Creates a directory
  file: path=/opt/helloWorld state=directory
```

Création d'un répertoire dont le propriétaire est le groupe baseballplayers avec la permission 0775 :

```
- name: Creates directory
  file: path=/opt/helloWorld state=directory owner=baseballplayers group=baseballplayers mode=0775
```

Changement du propriétaire du fichier myconfiguration.conf en bob et changement de la permission en 0644 :

```
- name:
    file:
      path: /opt/myconfiguration.conf
      owner: bob
      group: admin
      mode: 0644
```

## Le module copy

Le module copy permet de transférer des fichiers vers l'hôte distant.

L'option backup permet de copier les fichiers de configuration, qui peuvent être restaurés en cas de problème.

```
- name: copy file from within a remote host
      copy:
         src: /usr/local/script.py
         dest: /home/user1/script.py
         remote_src: yes
         owner: user1
         group: developers
         mode: 0755
```

## Le module unarchive

Le module unarchive permet d'extraire une archive puis de transférer les fichiers à l'hôte distant.

`gtar` et `unzip` doivent être installés sur l'hôte distant.

```
- name: extract an archive into remote hosts
      unarchive:
         src: ~/archive.tar.gz
         dest: /usr/local/
         owner: user1
         group: developers
         mode: 0755
```

Exemples :
- Copie du fichier foo.conf :

```
- copy:
    src: /srv/myfiles/foo.conf
    dest: /etc/foo.conf
    owner: foo
    group: foo
    mode: 0644
```

- Copie du fichier foo.conf en utilisant un mode symbolique équivalent à 0644 :

```
- copy:
    src: /srv/myfiles/foo.conf
    dest: /etc/foo.conf
    owner: foo
    group: foo
    mode: "u=rw,g=r,o=r"
```

- Copie du fichier foo.conf ajoutant des permissions et en en retirant d'autres :

```
- copy:
    src: /srv/myfiles/foo.conf
    dest: /etc/foo.conf
    owner: foo
    group: foo
    mode: "u+rw,g-wx,o-rwx"
```

- Copie d'un nouveau fichier ntp.conf et sauvegarde de la version précédente :

```
- copy:
    src: /mine/ntp.conf
    dest: /etc/ntp.conf
    owner: root
    group: root
    mode: 0644
    backup: yes
```

- Copie d'un nouveau fichier sudoers après validation par visudo :

```
- copy:
    src: /mine/sudoers
    dest: /etc/sudoers
    validate: 'visudo -cf %s'
```

## Le module get_url

Le module get_url permet de télécharger un fichier depuis le Web via HTTP, HTTPS ou FTP.

```
- name: download an ansible archive to remote hosts
      get_url:
         url: https://github.com/ansible/ansible/archive
         /v2.6.1.tar.gz
         dest: /usr/local/ansible_v2.6.1.tar.gz
         mode: 0777
```

## Le module fetch

Le module fetch récupère les fichiers sur un hôte distant et les stocke en local, sur le maître Ansible.

Ce module est très utile pour la récupération de logs, de configurations ou pour obtenir la liste des applications.

Ce module fonctionne aussi sous Windows.

Il utilise un process de validation par checksum qui peut être désactivé pour optimiser les temps de transfert.

Rapatrions en local certains fichiers provenant de l'hôte distant :

```
- name: Collect user files from remote hosts
      fetch:
         src: /home/user1/.profile
         dest: /home/alibi/user1-profile-{{ 
          inventory_hostname }}
         flat: yes
```

## Le module lineinfile

Le module lineinfile recherche une ligne spécifiue dans un fichier et la remplace par une expression régulière prédéfinie.

```
- name: change a sudo user to no longer need password with config testing
      lineinfile:
         path: /etc/sudoers
         regexp: '^%sudo\s'
         line: '%sudo ALL=(ALL) NOPASSWD: ALL'
         state: present
         validate: '/usr/sbin/visudo -cf %s'
```

## Le module replace

Le module replace remplace toutes les instances d'un pattern spécifique dans un fichier.

```
- name: change all static ethernet config to use a higher mtu
      replace:
         path: /etc/network/interfaces
         regexp: '^mtu 1400$'
         line: 'mtu 9000'
         backup: yes
         validate: 'systemd reload networking'
 
     - name: change a static ethernet configuration
      replace:
         path: /etc/network/interfaces
         block: |
             iface eth1 inet dhcp
                   dns-nameserver 8.8.8.8
                   dns-nameserver 8.8.4.4
                   mtu 9000
         backup: yes
         validate: 'systemd reload networking'
```

## Le module blockinfile

Le module blockinfile insère, modifie ou supprime une ou plusieurs lignes de texte eentre deux marqueurs de ligne dans un fichier.
