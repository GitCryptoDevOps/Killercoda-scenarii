Relancer le déploiement tout en enregistrant les changements effectués dans chaque révision (`--record=true`) :

`kubectl create --record=true -f nginx-deployment.yaml`{{execute}}

Vérifier que les pods ont été créés :

`watch kubectl get pods`{{execute}}

Une fois les pods créés, quitter en appuyant sur `Ctrl-C`.

Mettre à jour l'image du conteneur :

`kubectl set image deployment/nginx nginx-container=devopstestlab/nginx-helloworld:3`{{execute}}

Spécifier la raison de la mise à jour avec une annotation :

`kubectl annotate deployment/nginx kubernetes.io/change-cause='Upgrade to devopstestlab/nginx-helloworld:3'`{{execute}}

Mettre à nouveau à jour l'image du conteneur :

`kubectl set image deployment/nginx nginx-container=devopstestlab/nginx-helloworld:4`{{execute}}

Spécifier la raison de la mise à jour avec une annotation :

`kubectl annotate deployment/nginx kubernetes.io/change-cause='Upgrade to devopstestlab/nginx-helloworld:4'`{{execute}}

Confirmer qu'un nouveau ReplicaSet a été créé pour chaque version de l'application :

`watch kubectl get rs`{{execute}}

Une fois les réplicas créés pour la nouvelle version, appuyer sur `Ctrl-C`.

Afficher les différentes mises à jour et les commandes associées :

`kubectl rollout history deploy/nginx`{{execute}}

Supprimer le déploiement :

`kubectl delete deployment nginx`{{execute}}

Confirmer que tous les objets ont bien été supprimés :

`watch kubectl get deploy,rs,pod`{{execute}}
