Créer un déploiement basé sur `nginx` :

`kubectl run www --image=nginx`{{execute}}

Exposer le déploiement via un service :

`kubectl expose deployment www --port=80 --target-port=80`{{execute}}

Créer un fichier de ressource Ingress :

`cat routing-by-domain-name.yaml`{{execute}}

Créer le pod :

`kubectl apply -f routing-by-domain-name.yaml`{{execute}}

Voici quelques explications :
- `apiVersion: extensions/v1beta1` : c'est une version béta qui est utilisée;
- `kind: Ingress` : c'est une ressource de type Ingress;
- `metadata:`, `name: www-domaine` : c'est le nom de la ressource;
- `rule:` : définit la règle;
- `host: www.example.com` : c'est le nom de domaine qui est redirigé vers le service `www`;
- `serviceName: www` : c'est le service vers lequel le nom de domaine est renvoyé.

Si vous aviez utilisé un vrai nom de domaine, dans un navigateur Web, vous auriez retrouvé la page Nginx à l'URL `http://www.mywebsite.com`.

Supprimer le déploiement :

`kubectl delete deployment www`{{execute}}

Supprimer le service :

`kubectl delete service www`{{execute}}
