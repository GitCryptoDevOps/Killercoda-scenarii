Le service "normal" est le type de service par défaut. Il dispose d'une adresse IP. Il fonctionne comme un proxy :
- le traffic arrive au service normal,
- ce service répartit le traffic au pod.

Créer un service normal :

`kubectl expose deploy my-apache --namespace=domaine1 --name=my-apache-svc --port=80 --type=ClusterIP`{{execute}}

`kubectl expose deploy my-apache --namespace=domaine2 --name=my-apache-svc --port=80 --type=ClusterIP`{{execute}}

Récupérer l'adresse IP de ces services :

`kubectl get svc my-apache-svc --namespace=domaine1`{{execute}}

`kubectl get svc my-apache-svc --namespace=domaine2`{{execute}}

Confirmer que les deux pods sont accessibles depuis un pod basé sur l'image `busybox` :

`kubectl run -it busybox --restart=Never --image=busybox`{{execute}}

`nslookup my-apache-svc.domaine1.svc.cluster.local`{{execute}}

`nslookup my-apache-svc.domaine2.svc.cluster.local`{{execute}}

Appeler le serveur Web de ces deux pods :

`wget -q -O - my-apache-svc.domaine1.svc.cluster.local`{{execute}}

`wget -q -O - my-apache-svc.domaine2.svc.cluster.local`{{execute}}

Quiter le pod `busybox` et le supprimer :

`exit`{{execute}}

`kubectl delete pod busybox`{{execute}}
