Créer un déploiement basé sur `nginx` :

`kubectl run www --image=nginx`{{execute}}

Exposer le déploiement via un service :

`kubectl expose deployment www --port=80 --target-port=80`{{execute}}

Créer un fichier de ressource Ingress :

`cat routing-by-path.yaml`{{execute}}

Créer l'objet Ingress :

`kubectl apply -f routing-by-path.yaml`{{execute}}

Voici quelques explications :
- `annotations:`, `ingress.kubernetes.io/rewrite-target: /` : c'est l'annotation utilisée pour la ré-écriture des requêtes;
- `host: example.com`, `path: /www` : c'est le path complet (`example.com/www`) dont les requêtes sont forwardées vers le service `www2`;
- `serviceName: www2` : c'est le service vers lequel les requêtes sont transférées.

Si vous aviez utilisé un vrai nom de domaine, dans un navigateur Web, vous auriez retrouvé la page Nginx à l'URL `http://www.mywebsite.com/www`.

Supprimer le déploiement :

`kubectl delete deployment www`{{execute}}

Supprimer le service :

`kubectl delete service www`{{execute}}
