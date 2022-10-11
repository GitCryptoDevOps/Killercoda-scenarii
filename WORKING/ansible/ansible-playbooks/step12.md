### Le transfert des fichiers

Pour copier un fichier :

```
- copy:
    src: /srv/myfiles/foo.conf
    dest: /etc/foo.conf
    owner: foo
    group: foo
    mode: 0644
```

Pour copier un fichier en spécifiant les permissions :

```
- copy:
    src: /srv/myfiles/foo.conf
    dest: /etc/foo.conf
    owner: foo
    group: foo
    mode: "u=rw,g=r,o=r"
```

Pour copier un fichier en modifiant les permissions :

```
- copy:
    src: /srv/myfiles/foo.conf
    dest: /etc/foo.conf
    owner: foo
    group: foo
    mode: "u+rw,g-wx,o-rwx"
```

Pour copier le fichier `my_file.txt` en faisant une sauvegarde de la version précédente :

```
- copy:
    src: my_file.txt
    dest: /home/my_file.txt
    owner: root
    group: root
    mode: 0644
    backup: yes
```

Pour copier un nouveau fichier `sudoers` après avoir procédé à la validation avec  visudo :

```
- copy:
    src: /mine/sudoers
    dest: /etc/sudoers
    validate: 'visudo -cf %s'
```
