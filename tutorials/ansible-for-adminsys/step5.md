# Les modules réseau

## Le module Interfaces_file

Le module `Interfaces_file` permet de gérer le fichier `/etc/network/interfaces` :
- création,
- modification,
- suppression d'une configuration d'interface réseau.

Effectuons un changement sur une interface spécifique :

```
- name: Change mtu to 1500 for eth1 interface
      Interfaces_file:
         dest: /etc/network/interfaces
         iface: eth1
         option: mtu
         value: 1500
         backup: yes
         state: present
```

## Le module nmcli

Le module nmcli permet une gestion plus avancée du réseau en gérant diverses connexions et types de device : Ethernet, teams, bonds et VLAN.

## Le module ufw

Le module ufw permet de gérer le firewall UFW :
- gestion des ports,
- gestion ds protocoles,
- permissions de firewall IPS.

`ufw` doit être installé sur l'hôte distant.

Activons le port 5000 sur le protocole TCP :

```
- name: add port 5000 for iperf testing on all hosts
      ufw:
         rule: allow
         port: 5000
         proto: tcp
```

## Le module haproxy

Le module haproxy permet de gérer les serveurs HAProxy :
- activation,
- désactivation,
- drain,
- fixation de poids pour les serveurs utilisant les commandes socket.

Désactions les serveurs HAProxy :

```
- name: disable a haproxy backend host
      haproxy:
         state: disabled
         host: '{{ inventory_hostname }}'
         socket: /usr/loca/haproxy/haproxy.sock
         backend: www
         wait: yes
```

## Le module wakeonlan

Le module wakeonlan (Wake-on-LAN) permet d'allumer les hôtes qui sont actuellement éteints.

Ansible doit déjà avoir des faits collectés (collected facts) sur l'hôte eet doit stocker ses informations sur l'adreesse MAC.

Démarrons les hôtees éteints :

```
- name: start powered off hosts
  wakeonlan:
  mac: "{{ hostvars[inventory_hostname].ansible_default_ipv4.macaddress }}"
  port: 8
  delegate_to: localhost
```
