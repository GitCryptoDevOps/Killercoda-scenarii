Créer une ressource PV :

`cat pv.yaml`{{execute}}

Créer le PV :

`kubectl apply -f pv.yaml`{{execute}}

kubectl get pv

kubectl describe pv


Créer une ressource StatefulSet :

`cat statefulset.yaml`{{execute}}

Créer le StatefulSet :

`kubectl apply -f statefulset.yaml`{{execute}}

kubectl get statefulset

`kubectl describe statefulset helloworld-statefulset`{{execute}}

kubectl get pvc

kubectl describe pvc volumes-data-helloworld-statefulset-0




Créer une ressource Service :

`cat service.yaml`{{execute}}

Créer le Service :

`kubectl apply -f service.yaml`{{execute}}

Afficher la liste des ressources créées :

`kubectl get sts,po,pvc,svc`{{execute}}

Récupérer le nom du premier pod créé :

`POD=$(kubectl get pod -o jsonpath="{.items[0].metadata.name}")`{{execute}}

`echo $POD`





Supprimer le StatefulSet :

`kubectl delete statefulset helloworld-statefulset`{{execute}}
