Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

La fonctionnalité de découverte de service (Service Discovery) est très importante quand des pods sont déplacés sur un cluster.

Le service `kube-dns` permet d'enregistrer et de rechercher une adresse IP pour les objets `Pod` et `Service`. Il utilise le FQDN (Fully Qualified Domain Name).

Vérifier que `kube-dns` fonctionne :

`kubectl get deploy kube-dns --namespace=kube-system`{{execute}}

Sur minikube, vérifier l'état de l'addon `kube-dns` :

```
minikube addons list |grep kube-dns
```

S'il est désactivé, l'activer :

```
minikube addons enable kube-dns
```
