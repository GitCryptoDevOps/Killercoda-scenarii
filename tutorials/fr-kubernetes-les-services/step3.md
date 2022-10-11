## Création d'un service de type NodePort

Avec le service de type `NodePort`, le service est exposé sur chaque node du cluster.

Créer un fichier de ressource Service de type `NodePort` qui :
- expose le port 80 (`port`) les conteneurs des pods dont le label est `app: nginx-helloworld`,
- à l'intérieur du node sur le port `80` (`targetPort`),
- à l'extérieur du cluster sur le port `31000` (`nodePort`).

`cat nginx-nodeport.yaml`{{execute}}

Lancer le Service de type NodePort :

`kubectl create -f nginx-nodeport.yaml`{{execute}}

Confirmer que le service `nginx-helloworld-service` a bien été créé :

`kubectl get svc`{{execute}}

Confirmer que le service est exposé hors du cluster :
- dans un navigateur Web, vérifier que le service est accessible à l'adresse IP du service sur le port 31000,
- ou utiliser la commande `curl` :

`curl 0.0.0.0:31000`{{execute}}

Supprimer le service de type `NodePort` :

`kubectl delete svc nginx-nodeport`{{execute}}
