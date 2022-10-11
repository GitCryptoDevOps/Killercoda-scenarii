# Visualisation des containers Docker avec Portainer

Portainer est une interface Web permettant de gérer des hôtes Docker et des clusters en mode swarm.

Cet Open Source (https://portainer.io) est écrit en Go.

Lançons Portainer :

`docker volume create portainer_data`{{execute}}

`docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer`{{execute}}

Dans un navigateur Web, accédons à Portainer à l'adresse http://0.0.0.0:9000.

`docker service create --name portainer --publish 9000:9000 --constraint 'node.role == manager' --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock portainer/portainer -H unix:///var/run/docker.sock`{{execute}}

Au premier accès, vous devez choisir un mot de passe pour l'administrateur.

Cliquez sur Local - Manage the local Docker environment.

En mode swarm, la liste des noeuds est affichée.

La vue Services affiche les services en exécution.

Portainer pet de créer des containers et des services.

La vue Volumes and Containers ne montre que les ressources sur le noeud où Portainer tourne.
