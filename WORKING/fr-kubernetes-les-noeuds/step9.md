Pour accéder au serveur d'API de Kubernetes, il y a deux principalement deux méthodes :
- passer un proxy,
- lancer des requêtes directes.

### Accéder au serveur d'API Kubernetes via un proxy

Créer un proxy de l'API sur votre environnement local :

`kubectl proxy --port=8080`{{execute}}

Dans un autre terminal, interroger l'API :

`curl http://localhost:8080/api/v1`{{execute}}

### Accéder au serveur d'API Kubernetes via un accès direct

Interroger l'API :

`kubectl get --raw /api/v1`{{execute}}

Pour explorer :
- les versions supportés de l'API :

`kubectl api-versions`{{execute}}

- les ressources supportées de l'API :

`kubectl api-resources`{{execute}}
