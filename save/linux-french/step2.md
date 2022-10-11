# 

Récupérer l'adresse IP de l'hôte 1 :

```
HOST1=$(hostname -I |awk '{ print $1 }')
echo $HOST1
```

Récupérer l'adresse IP de l'hôte 2 :

```
HOST2=$(cat /etc/hosts |grep host02|awk '{ print $1 }')
echo $HOST1
```

## Gestion des adresses dans les interfaces

Confirmer que l'adresse IP de l'hôte 2 n'est pas associée à l'interface `docker0` :

`ifconfig docker0`{{execute}}

Ajouter l'adresse IP de l'hôte 2 à l'interface `docker0` :

`ip address add $HOST2/24 dev docker0`{{execute}}

Lors du prochain boot, ce changement sera perdu.

Retirer l'adresse IP de l'hôte 2 de l'interface `docker0` :

`ip address del $HOST2/24 dev docker0`{{execute}}

## Contrôle de l'interface

Confirmer que l'interface `docker0` est visible :

`ifconfig`{{execute}}

Eteindre l'interface `docker0` :

`ip link set docker0 down`{{execute}}

Confirmer que l'interface n'est plus listée :

`ifconfig`{{execute}}

Rallumer une interface :

`ip link set docker0 up`{{execute}}

Confirmer que l'interface `docker0` est réapparue :

`ifconfig`{{execute}}

## Gestion de la table de routage

Ajouter une nouvelle route à la table de routage disant que pour envoyer du traffic à l'hôte 1, il faut passer par l'hôte 2, qui fonctionne comme une gateway, sur l'interface ens3 :

```
ip route add $HOST1/12 via $HOST2 dev ens3
```

Vérifier la table de routage :

`ip route`{{execute}}

Pour visualiser le traffic routé :

- sur le premier hôte, démarrer un ping :

`ping 172.17.0.113`{{execute}}

- sur le second hôte, afficher la traffic routé sur l'interface `ens3` :

`tcpdump -i ens3`{{execute HOST2}}

Des requêtes ICMP (générées par `ping`) sont affichées.
