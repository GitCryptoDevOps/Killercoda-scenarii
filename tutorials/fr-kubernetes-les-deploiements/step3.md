Lancer un déploiement :

`kubectl create -f nginx-deployment.yaml`{{execute}}

Afficher les objets `Deployment`, `ReplicaSet` et `Pod` :

`watch kubectl get deploy,rs,po`{{execute}}

Une fois le déploiement créé, appuyer sur `Ctrl-C`.

Modifier l'image Docker du déploiement :

`kubectl set image deploy/nginx nginx-container=devopstestlab/nginx-helloworld:2`{{execute}}

Confirmer que les objets `Deployment`, `ReplicaSet` et `Pod` ont été recréés :

`watch kubectl get deploy,rs,po`{{execute}}

Une fois les objets mis à jour, appuyer sur `Ctrl-C`.

Supprimer le déploiement :

`kubectl delete deployment nginx`{{execute}}

Confirmer que tous les objets ont bien été supprimés :

`watch kubectl get deploy,rs,pod`{{execute}}
