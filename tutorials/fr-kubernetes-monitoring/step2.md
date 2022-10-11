Les Pods n'ont pas de `stdout`.

Au lieu de cela, la log des Pods est stockée dans l'API à l'adresse `/api/v1/namespaces/default/pods/mypod/log`.

Créer un fichier de ressource Pod :

`cat pod-logs.yaml`{{execute}}

Créer le pod :

`kubectl apply -f pod-logs.yaml`{{execute}}

Attendre que le nouveau pod ait été créé :

`watch kubectl get pods`{{execute}}

Pour afficher les logs des Pods :

`kubectl logs pod-logs`{{execute}}
