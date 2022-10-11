# Résolution d'un cas spécifique

Afficher la liste des pods avec les labels :

`kubectl get pods --show-labels`{{execute}}

Afficher toutes les ressources ayant le label `app=mynginx` :

`kubectl get all --selector app=mynginx`{{execute}}

Récupérer le nom du Pod basé sur `nginx` :

`POD=$(kubectl get pods |grep nginx |awk '{ print $1}')`{{execute}}

`echo $POD`{{execute}}

Confirmer que ce label se trouve dans la description du Pod :

`kubectl describe pod $POD`{{execute}}



Afficher la liste des pods dans le namespace `kube-system` :

`kubectl get pods -n kube-system -o wide`{{execute}}

`kubectl -n kube-system delete pod weave-net-*`{{execute}}

`kubectl get pods -n kube-system -o wide`{{execute}}

`kubectl get pods`{{execute}}

`kubectl delete pod nginx-XXXXX`{{execute}}

`kubectl get pods`{{execute}}

`kubectl describe pod mynginx-*`{{execute}}
