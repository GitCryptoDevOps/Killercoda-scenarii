`readinessProbe` permet de vérifier l'initilisation, le démarrage du conteneur d'un pod. Cela est particulièrement utile si lors du démarrage, un grand volume de données est chargé.

Créer une ressource de Pod avec un readinessProbe qui se déclenche après 10 secondes :

`cat readiness-probe-healthy-pod.yaml`{{execute}}

Créer le pod :

`kubectl apply -f readiness-probe-healthy-pod.yaml`{{execute}}

Confirmer que les événements du pod montrent `Ready True` au bout d'un moment :

`kubectl describe pod ready-pod`{{execute}}

La commande doit aussi retourner une ligne du type `Readiness: http-get http://:5000/healthy delay=10s timeout=1s period=10s #success=1 #failure=3`.

Supprimer le pod :

`kubectl delete pod/ready-pod`{{execute}}
