# Les modules de stockage

## File system management module

Le module `filesystem` permet de gérer le système de fichier.

Un disque doit déjà exister sur l'hôte.

Formatons un disque :

```
- name: create a filesystem from a newly added disk
      filesystem:
         fstype: ext4
         dev: /dev/sdc1
```

## Le module lvg

Le module lvg permet de gérer les groupes dans un environnement virtualisé. ?????

## Le module lvol

Le module lvol permet de gérer les volumes. ????

## Le module mount

Le module mount permet de monter et démonter un volume sur le hôte. Il gère le fichier /etc/fstab.

Il nécessite l'installation d'un client NFS et SMB.

```
- name: mount the recently added volume to the system
      mount:
         path: /media/disk1
         fstype: ext4
         boot: yes
         state: mounted
         src: /dev/sdc1
```

Retirons une partition :

```
- name: remove a no longer needed partition
      mount:
         device: /dev/sdc
         number: 1
         state: absent
```

## Le module gluster_volume

Le module gluster_volume permet de gérer les volumes GlusterFS sur un cluster d'hôtes :
- ajout,
- suppression,
- démarrage,
- arrêt,
- optimisation de volumes.

Créons un nouveau volume :

```
- name: create a new GlusterFS volume
      gluster_volume:
         status: present
         name: gluster1
         bricks: /bridkes/brik1/g1
         rebalance: yes
         cluster:
            - 192.168.10.10
            - 192.168.10.11
            - 192.168.10.12
         run_once: true
```
