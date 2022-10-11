## Création d'un service de type ClusterIP

Avec le type de service `ClusterIP`, chaque requête reçue par le service est envoyée sur l'un des pods ayant le label spécifié.

Créer un fichier de ressource Pod avec le contenu :

`cat nginx-clusterip.yaml`{{execute}}

Lancer le Service de type ClusterIP :

`kubectl create -f nginx-clusterip.yaml`{{execute}}

Pour vérifier que le pod est bien accessible depuis un autre pod, lancer un pod utilisé déboguer :
- créer un fichier de ressource Pod avec le contenu :

`cat tester-pod.yaml`{{execute}}

- lancer le pod :

`kubectl create -f tester-pod.yaml`{{execute}}

La commande `sleep 10000` permet d'attendre 10 secondes.

Attendre que le pod soit créé :

`watch kubectl get pods`{{execute}}

Pour accéder au service `nginx-helloworld` depuis le pod `tester`, entrer dans le conteneur `tester` en mode interactif :

`kubectl exec -it tester sh`{{execute}}

Mettre à jour les packages et installer `curl` :

`apk update`{{execute}}

`apk add curl`{{execute}}

Confirmer que le service `nginx-clusterip` est accessible :

`curl nginx-clusterip`{{execute}}

Quitter le pod :

`exit`{{execute}}

La résolution DNS se fait via `nginx-helloworld`.

Afficher une vue d'ensemble du service `nginx-clusterip` :

`kubectl get svc/nginx-clusterip`{{execute}}

Afficher des détails sur le service `nginx-clusterip` :

`kubectl describe svc/nginx-clusterip`{{execute}}

Confirmer que la connexion est refusée (`Connection refused`) quand vous essayez de vous connecter au service hors du cluster :

`curl 0.0.0.0:31000`{{execute}}

Supprimer le service de type `ClusterIP` :

`kubectl delete svc nginx-clusterip`{{execute}}
