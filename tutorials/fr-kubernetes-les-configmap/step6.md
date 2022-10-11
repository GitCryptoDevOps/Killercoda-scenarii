Pour mettre à jour le déploiement suite à un changement de la ConfigMap, il y a deux méthodes :
- récupérer le sha256 des modifications :

`export CONFIG_HASH=$(kubectl get cm -oyaml | sha256sum | cut -d' ' -f1)`{{execute}}

- modifier la variable d'environnement `CONFIG_HASH` du conteneur `nginx` puis mettre à jour le déploiement :

`envsubst '${CONFIG_HASH}' < deploy.yaml | kubectl apply -f - deployment.apps/www configured`{{execute}}

La commande `envsubst` permet d'effectuer des substitutions de variable d'environnement dans des fichiers.
