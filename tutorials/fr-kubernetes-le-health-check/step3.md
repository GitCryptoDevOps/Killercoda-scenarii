Créer un fichier de ressource Pod qui a un conteneur qui retourne toujours un code HTTP `200` sur la route `/healthy` :

`cat liveness-probe-healthy-pod.yaml`{{execute}}

Créer le pod :

`kubectl apply -f liveness-probe-healthy-pod.yaml`{{execute}}

Confirmer que le pod contient une ligne du type `Liveness: http-get http://:5000/healthy delay=2s timeout=1s period=5s #success=1 #failure=3` :

`kubectl describe pod healthy-pod`{{execute}}

Vérifier que la colonne `RESTARTS` ne montre aucun redémarrages :

`kubectl get pods`{{execute}}

Supprimer le pod :

`kubectl delete pod/healthy-pod`{{execute}}
