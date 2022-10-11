Kubernetes attribut un nom de domaine au pod.

Déployer un pod sur chacun de ces domaines :

`kubectl run my-apache --image=httpd --namespace domaine1`{{execute}}

`kubectl run my-apache --image=httpd --namespace domaine2`{{execute}}

Récupérer l'adresse IP de ces pods :

`kubectl get pods -o wide --namespace=domaine1`{{execute}}

`kubectl get pods -o wide --namespace=domaine2`{{execute}}

Le DNS formé est sous la forme `<ADRESSE_IP>.<NOM_DOMAINE>.pod.cluster.local`, où `<ADRESSE_IP>` a des `-` au lieu des `.`.

### Vérification que la résolution de nom fonctionne

Vérifier que la résolution de nom fonctionne :
- lancer le pod `busybox` :

`kubectl run -it busybox --restart=Never --image=busybox`{{execute}}

- résoudre le FQDN du premier pod créé dans le namespace `domaine1` :

`nslookup 172-17-0-4.chap8-domain1.pod.cluster.local`{{execute}}

- faire de même avec le pod créé dans le namespace `domaine2` :

`nslookup 172-17-0-5.chap8-domain2.pod.cluster.local`{{execute}}

Quitter le pod `busybox` et le supprimer :

`exit`{{execute}}

`kubectl delete pod busybox`{{execute}}
