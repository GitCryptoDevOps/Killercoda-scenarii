Créer un secret de type `docker-registry` :

`kubectl create secret docker-registry registry-credentials --docker-server=REGISTRY_FQDN --docker-username=USERNAME --docker-password=PASSWORD --docker-email=EMAIL`{{execute}}

Récupérer le secret `registry-creds` :

`kubectl get secret registry-creds -o yaml`{{execute}}

Le fichier `.dockercfg` contient les credentials encodés en base64.

Créer un fichier de ressource Pod utilisant une image privée :

`cat pod-docker-registry.yaml`{{execute}}

Créer le pod :

`kubectl apply -f pod-docker-registry.yaml`{{execute}}

Le secret `registry-credentials` (`imagePullSecrets:` et `name: registry-credentials`) est utilisé pour le téléchargement d'une image du repository privé.

Quitter le pod :

`exit`{{execute}}

Supprimer le pod :

`kubectl delete pod with-secrets`{{execute}}
