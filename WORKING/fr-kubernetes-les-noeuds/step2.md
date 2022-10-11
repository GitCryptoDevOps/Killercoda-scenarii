- Avant de rebooter, s'assurer qu'aun nouveau pod ne sera démarré sur le node :

`kubectl cordon $NODENAME`{{execute}}

- Evincer ou arrêter les pods tournant actuellement sur le noeud :

`kubectl drain`{{execute}}

- Rebooter
- Grâce à l'auto-enregistrement (self-registration), un noeud s'enregistrement automatiquement

Pour le self-registration, kubelet lit son fichier de configuration dans `/var/lib/kubelet/config.yaml` et utilise les credentials dans `/etc/kubernetes/kubelet.conf`.

`sudo vim /etc/kubernetes/kubelet.conf`{{execute}}

`suvo vim /var/lib/kubelet/config.yaml`{{execute}}
