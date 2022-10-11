Créer une ressource Deployment (`www`) utilisant les variables d'environnement définies dans `configMapKeyRef` dont les valeurs sont stockées dans une ConfigMap :
- `LOG_LEVEL` : sa valeur est lue depuis la clé `log_level` de la ConfigMap `app-config-env`,
- `CACHE` : sa valeur est lue depuis la clé `cache` de la ConfigMap `app-config-env`.

`cat nginx-with-proxy-deployment-env.yaml`{{execute}}

Lancer le déploiement :

`kubectl create -f nginx-with-proxy-deployment-env.yaml`{{execute}}

Récupérer le nom du premier pod créé :

`POD=$(kubectl get pod -o jsonpath="{.items[0].metadata.name}")`{{execute}}

`echo $POD`

Confirmer que les variables d'environnement `LOG_LEVEL` et `CACHE` sont définies dns le conteneur `proxy` du déploiement `www` :

`kubectl exec -it $POD --container www -- bash`{{execute}}

`echo $LOG_LEVEL`{{execute}}

`echo $CACHE`{{execute}}

Quitter le container :

`exit`{{execute}}
