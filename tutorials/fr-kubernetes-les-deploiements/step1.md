Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Créer un fichier de ressource Deployment avec le contenu :

`cat nginx-deployment.yaml`{{execute}}.

Lancer le déploiement :

`kubectl create -f nginx-deployment.yaml`{{execute}}

Lister les déploiements :

`kubectl get deploy`{{execute}}

Un ReplicaSet est créé et associé au Deployment.

Lister les ReplicaSets :

`watch kubectl get rs`{{execute}}

Chaque replica a trois état :
- `DESIRED` : c'est le nombre souhaité de réplicas,
- `CURRENT` : c'est le nombre de réplicas en cours d'exécution,
- `READY` : c'est le nombre de réplicas prêts.

Attendre jusqu'à ce que la colonne `READY` affiche `3`. Puis, pour arrêter, appuyer sur `Ctrl-C`.

Confirmer que les trois pods de l'application sont actifs :

`kubectl get pod`{{execute}}

Supprimer le déploiement :

`kubectl delete deployment nginx`{{execute}}

Confirmer que tous les objets ont bien été supprimés :

`watch kubectl get deploy,rs,pod`{{execute}}
