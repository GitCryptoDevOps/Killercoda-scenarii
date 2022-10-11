Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Les conteneurs `init` permet de préparer un conteneur tournant dans un pod, par exemple pour attendre qu'un service soit disponible. Le conteneur principal n'est exécuté qu'une fois la préparation terminée.

Créer un fichier de ressource de déploiement :
- d'un conteneur `init` qui écrit un message dans le fichier `/ic/this`,
- d'un conteneur principal qui lit ce fichier.

`cat deploy.yaml`{{execute}}

Créer le déploiement :

`kubectl apply -f deploy.yaml`{{execute}}

Confirmer que le conteneur principal est créé :

`kubectl get deploy,po`{{execute}}

Récupérer le nom du premier pod créé :

`POD=$(kubectl get pod -o jsonpath="{.items[0].metadata.name}")`{{execute}}

`echo $POD`

Afficher les logs du conteneur :

`kubectl logs -f $POD`{{execute}}
