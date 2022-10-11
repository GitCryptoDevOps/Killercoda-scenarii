Créer le namespace `development` :

`kubectl create namespace development`{{execute}}

Créer un pod dans le namespace `development` :

`kubectl create --namespace development -f nginx-pod.yaml`{{execute}}

Lister les déploiements dans le namespace `development` :

`kubectl get pods --namespace development`{{execute}}

Supprimer le pod `nginx-pod` :

`kubectl delete pod nginx-pod --namespace development`{{execute}}

Supprimer le namespace `development` :

`kubectl delete namespace development`{{execute}}
