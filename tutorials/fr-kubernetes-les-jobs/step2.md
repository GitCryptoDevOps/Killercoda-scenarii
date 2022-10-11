Un job simple est une application qui a une durée de vie courte. Si le job échoue, Kubernetes crée un nouveau pod pour réessayer.

Créer un fichier de ressource Pod faisant tourner un conteneur afficher une log :

`cat simple-job.yaml`{{execute}}

Créer le pod :

`kubectl apply -f simple-job.yaml`{{execute}}

Voici quelques explications :
- `activeDeadlineSeconds` : définit la durée maximale d'exécution du pod. En cas de dépassement, le pod est terminé.
- `restartPolicy` : définit le comportement en cas d'échec :
  - `Never` : quand le pod échoue, il ne redémarre pas;
  - `OnFailure` : quand il échoue, il tente de soumettre à nouveau le Job jusqu'à ce qu'il soit terminé avec succès.
- `command: ["dpkg-query", "-l"]` : installe le package `dpkg`.

Confirmer que l'état est terminé :

`kubectl get pods`{{execute}}

Récupérer le nom du pod créé :

`POD=$(kubectl get pod -o jsonpath="{.items[0].metadata.name}")`{{execute}}

`echo $POD`

Afficher la log :

`kubectl logs $POD`{{execute}}

Supprimer le job :

`kubectl delete job simple-job`{{execute}}
