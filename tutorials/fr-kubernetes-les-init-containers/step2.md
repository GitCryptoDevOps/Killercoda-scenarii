Créer un fichier de ressource Service créant deux services :

`cat services.yaml`{{execute}}

Créer les services :

`kubectl apply -f services.yaml`{{execute}}

Créer un fichier de ressource Pod utilisant des init containers pour attendre le démarrage des deux services :

`cat pod.yaml`{{execute}}

Créer le pod :

`kubectl apply -f pod.yaml`{{execute}}

Confirmer que le pod a bien été créé une fois les services créés :

`kubectl get all --selector a===initapp`{{execute}}
