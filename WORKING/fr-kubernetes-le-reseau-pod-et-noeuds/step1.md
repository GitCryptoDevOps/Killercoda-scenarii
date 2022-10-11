Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Les pods sont accessibles sur un réseau Pod spécifique.

Les pods peuvent communiquer directement avec un autre pod et sont tous dans le même namespace réseau.

Le CNI (Container Network Interface) fournit un framework dans lequel les modules réseau peuvent être utilisés pour établir la communication selon les différents besoins.

Si aucune limitation n'est implémentée, tous les pods peuvent communiquer avec les autres pods sans limitation.

Les Network Policies permettent d'implémenter des restrictions sur le traffic direct entre les pods.

L'utilisation des Network Policies n'est possible que si le plugin réseau utilisé offre le support nécessaire.

`kubectl get pods -o wide |grep busy`{{execute}}

`kubectl exec busybox22 ip a s`{{execute}}

`kubectl exec busybox22 ping XX.XX.XX.XX`{{execute}}
