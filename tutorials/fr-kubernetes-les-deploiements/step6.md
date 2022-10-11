Cette méthode est dépréciée. Il n'est donc pas conseillé de l'utiliser. Elle sera supprimé ultérieurement.

Créer un déploiement `nginx` déployant l'image `devopstestlab/nginx-helloworld:latest` avec 3 réplicas :

`kubectl run nginx --image devopstestlab/nginx-helloworld:latest --replicas 3 --record=true`{{execute}}

Lister les objets Deployment, ReplicaSet et Pod :

`watch kubectl get deploy,rs,pod`{{execute}}

Une fois les objets créés, quitter en appuyer sur `Ctrl-C`.

Mettre à jour l'image avec la version `devopstestlab/nginx-helloworld:2` :

`kubectl set image deployment.extensions/nginx nginx=devopstestlab/nginx-helloworld:2`{{execute}}

Confirmer qu'un nouveau ReplicaSet est créé pour la nouvelle version et que les ressources sont bien supprimées puis recréées :

`watch kubectl get deploy,rs,pod`{{execute}}

Une fois les objets créés, quitter en appuyer sur `Ctrl-C`.

Afficher les différentes mises à jour et les commandes associées :

`kubectl rollout history deploy/nginx`{{execute}}

Vérifier l'état d'avancement :

`kubectl rollout status deploy/nginx`{{execute}}

S'il y a un problème durant un déploiement, Kubernetes revient en arrière ("rollback") automatiquement à la version précédente.

Il est cependant possible de revenir à une version précise :

`kubectl rollout history deploy/nginx`{{execute}}

`kubectl rollout undo deploy/nginx --to-revision=1`{{execute}}

`kubectl rollout history deploy/nginx`{{execute}}

Supprimer le déploiement :

`kubectl delete deployment nginx`{{execute}}

Confirmer que tous les objets ont bien été supprimés :

`watch kubectl get deploy,rs,pod`{{execute}}
