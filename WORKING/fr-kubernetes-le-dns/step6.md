Créer un service "sans tête" ("headless") (`--cluster-ip=None`) pour chacun des deux namespaces :

`kubectl expose deploy my-apache --namespace=domaine1 --name=my-apache-svc-hl --port=80 --type=ClusterIP --cluster-ip=None`{{execute}}

`kubectl expose deploy my-apache --namespace=domaine2 --name=my-apache-svc-hl --port=80 --type=ClusterIP --cluster-ip=None`{{execute}}

Confirmer qu'il n'ont aucune adresse IP :

`kubectl get svc my-apache-svc-hl --namespace=domaine1`{{execute}}

`kubectl get svc my-apache-svc-hl --namespace=domaine2`{{execute}}

Lancer un pod `busybox` :

`kubectl run -it busybox --restart=Never --image=busybox`{{execute}}

Interroger ces deux services :

`nslookup my-apache-svc-hl.domaine1.svc.cluster.local`{{execute}}

`nslookup my-apache-svc-hl.domaine2.svc.cluster.local`{{execute}}

Quitter le pod et le supprimer :

`exit`{{execute}}

`kubectl delete pod busybox`{{execute}}

Augmenter le nombre d'instances du pod :

`kubectl scale deploy my-apache --namespace=domaine1 --replicas=3`{{execute}}

Confirmer qu'il y a trois pods :

`kubectl get pods --namespace=domaine1 -o wide`{{execute}}

Lancer un pod basé sur `busybox` :

`kubectl run -it busybox --restart=Never --image=busybox`{{execute}}

Interroger le nom de service headless :

`nslookup my-apache-svc-hl.domaine1.svc.cluster.local`{{execute}}

Quitter le pod et le supprimer :

`exit`{{execute}}

`kubectl delete pod busybox`{{execute}}

L'entrée DNS `my-apache-svc-hl.domaine1.svc.cluster.local` renvoie trois adresses IP. Le client HTTP accède directement à l'une de ces trois adresses IP.

Le terme "sans tête" ("headless") vient du fait que le service "headless" n'effectue aucune répartition du trafic.
