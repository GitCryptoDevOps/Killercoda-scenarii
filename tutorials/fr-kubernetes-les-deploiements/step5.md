Créer un fichier de ressource `Deployment` :

`cat rollingback.yaml`{{execute}}

Créer le déploiement :

`kubectl create -f rollingback.yaml`{{execute}}

`kubectl rollback history deployment`{{execute}}

`kubectl edit deployments.apps rolling-nginx`{{execute}}

=> changer `image: nginx:1.18` en `image: nginx:1.19`

`kubectl get all`{{execute}}

`kubectl describe deployments.apps rolling-nginx`{{execute}}

`kubectl rollout history deployments rolling-nginx --revision=2`{{execute}}

`kubectl rollout history deployments rolling-nginx --revision=1`{{execute}}

`kubectl rollout undo deployment rolling-nginx --to-revision=1`{{execute}}

`kubectl get all`{{execute}}
