Pour interagir avec le Pod, nous présentons deux méthodes :
- le lancement d'une commande (`nginx -v`) dans un pod (`nginx-helloworld`) :

`kubectl exec nginx-helloworld -- nginx -v`{{execute T1}}

- le lancement d'un shell interactif (`/bin/bash` et `-t -i`) dans un pod (`nginx-helloworld`) :

`kubectl exec -t -i nginx-helloworld -- /bin/sh`{{execute T1}}

Pour quitter le pod :

`exit`{{execute T1}}

Vérifier que le conteneur Nginx ne répond pas :

`curl localhost:8080`{{execute T2}}

Pour aider le développement et le debugging, il est pratique de transférer le port du pod (`80`) vers un port spécifique de la machine hôte (`8080`) :

`kubectl port-forward nginx-helloworld 8080:80`{{execute T1}}

Vérifier que le conteneur Nginx répond :

`curl localhost:8080`{{execute T2}}
