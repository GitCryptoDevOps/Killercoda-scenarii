Créer un fichier de ressource Pod qui a un conteneur qui retourne parfois un code HTTP différent de `403` sur la route `/nothealthy` :

`cat liveness-probe-nothealthy-pod.yaml`{{execute}}

La section `livenessProbe:` demande à Kubernetes de démarrer la vérification de healthcheck à l'endpoint `/nothealthy` (`path: /nothealthy`) avec la méthode GET (`httpGet:`) sur le port 5000 (`port:`), après un délai d'attente de 2 secondes (`initialDelaySeconds:`) et toutes les 5 secondes (`periodSeconds:`).

Créer le pod :

`kubectl apply -f liveness-probe-nothealthy-pod.yaml`{{execute}}

Regarder les événements et confirmer qu'un des événements rapporte `Liveness probe failed` :

`kubectl describe pod nothealthy-pod`{{execute}}

Vérifier que la colonne `RESTARTS` montre que plusieurs redémarrages ont été faits :

`kubectl get pods`{{execute}}

Supprimer le pod :

`kubectl delete pod/nothealthy-pod`{{execute}}
