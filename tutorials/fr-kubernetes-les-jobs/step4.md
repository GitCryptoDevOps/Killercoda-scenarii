Créer un fichier de ressource Job lançant un job un certain nombre de fois en parallèle :

`cat parallel-job.yaml`{{execute}}

Créer le job :

`kubectl apply -f parallel-job.yaml`{{execute}}

Voici quelques explications :
- `parallelism: 3` : c'est le nombre d'exécutions en parallèle.

Confirmer que l'état est terminé :

`kubectl get pods`{{execute}}

Supprimer le jod :

`kubectl delete job parallel-job`{{execute}}
