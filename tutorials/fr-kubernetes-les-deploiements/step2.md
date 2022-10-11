Diminuer le nombre de réplicas de 3 à 2 :

`kubectl run --generator=run-pod/v1 nginx --image=nginx-helloworld --replicas=2`{{execute}}

Afficher la liste des pods :

`watch kubectl get pods`{{execute}}

Une fois que le pod est créé, quitter en appuyant sur `Ctrl-C`.

Supprimer le pod :

`kubectl delete pod nginx`{{execute}}
