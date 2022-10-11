Le job répétable permet de lancer successivement un pod un certain nombre de fois.

Créer un fichier de ressource Job pour créer un job qui va être lancé trois fois (`completions: 3`) :

`cat repeatable-job.yaml`{{execute}}

Créer le job :

`kubectl apply -f -repetable-job.yaml`{{execute}}

Confirmer que l'état est terminé :

`kubectl get pods`{{execute}}

Le pod est lancé trois fois.

Supprimer le jod :

`kubectl delete job repeatable-job`{{execute}}
