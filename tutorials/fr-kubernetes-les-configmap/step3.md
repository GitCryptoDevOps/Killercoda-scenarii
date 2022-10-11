Dans ce scénario, nous allons créer un serveur `nginx` écoutant sur le port 8000 et renvoyant les requêtes vers le port 80 d'un autre conteneur situé dans le même pod.

Ces conteneurs communiquent entre eux via l'interface `localhost`.

Créer un déploiement `www` intégrant :
- un serveur Nginx (`www`) délivrant un site Web affichant le message `Helloworld!`,
- un serveur Nginx (`proxy`) servant de proxy vers le serveur Web `www`,
- un ConfigMap fournissant le fichier de configuration au proxy `proxy`.

`cat nginx-with-proxy-deployment-volume.yaml`{{execute}}

`volumes:` définit le volume basé sur la ConfigMap `nginx-config`.

`volumeMounts` monte le volume `config` dans le conteneur sur le point de montage `mountPath: "/etc/nginx/"`.

Lancer le déploiement :

`kubectl create -f nginx-with-proxy-deployment-volume.yaml`{{execute}}

Attendre que le déploiement `www` est créé :

`watch kubectl get deployments`{{execute}}

Récupérer le nom du premier pod créé :

`POD=$(kubectl get pod -o jsonpath="{.items[0].metadata.name}")`{{execute}}

`echo $POD`

Afficher le contenu du fichier `nginx.conf` dans le conteneur proxy du déploiement `www` :

`kubectl exec -it $POD --container proxy -- bash`{{execute}}

Confirmer que le fichier `nginx.conf` est accessible :

`cat /etc/nginx/nginx.conf`{{execute}}

Quitter le conteneur :

`exit`{{execute}}

Confirmer que le conteneur `www` du pod peut accéder au serveur Web sur le port 80 :
- entrer dans le conteneur `www` :

`kubectl exec -it $POD --container www -- sh`{{execute}}

- mettre à jour les packages :

`apk update`{{execute}}

- installer la commande `curl` :

`apk add curl`{{execute}}

- confirmer que le serveur Web est accessible sur le port 80 :

`curl localhost`{{execute}}

Confirmer que le conteneur `proxy` transfère les requêtes arrivant sur le port 8000 au conteneur `www` :

`curl localhost:8000`{{execute}}

Quitter le conteneur :

`exit`{{execute}}

Supprimer le déploiement `www` :

`kubectl delete deployment www`{{execute}}
