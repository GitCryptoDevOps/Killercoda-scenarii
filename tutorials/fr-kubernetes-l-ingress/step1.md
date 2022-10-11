Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Pour exposer un service tournant dans un cluster à Internet, Kubernetes propose deux solutions :
- Ingress : c'est un ensemble de règles autorisant la connection aux services du cluster depuis Internet;
- Service de type NodePort : c'est un Load Balancer externe qui permet de répartir le traffic parmi plusieurs nodes; il nécessite cependant 'utilisation d'un fournisseur de Cloud comme AWS, GCE ou Azure.

Ingress nécessite le déploiement d'un contrôleur sous la forme d'un conteneur Docker.

Ce contrôleur (exemple : GCE, nginx, Traefik, HAProxy) peut remplir plusieurs rôles :
  - routage HTTP pour les hôtes virtuels basés sur le nom;
  - terminaison TLS;
  - Load Balancing.

Sur Minikube, Ingress est un add-on qui doit être activé :

```
minikube addons enable ingress
```
