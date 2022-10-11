Créer le namespace `development` :

`kubectl create namespace development`{{execute}}

Définir le contexte du namespace `development` :

`kubectl config set-context $(kubectl config current-context) --namespace=development`{{execute}}

Confirmer que le contexte courant a comme namespace `development` :

`kubectl config get-contexts`{{execute}}

Confirmer que le namespace courant est `development` :

`kubectl config view`{{execute}}

La section `context:` doit spécifier `development` comme namespace.

Créer un déploiement dans le contexte par défaut :

`kubectl create -f nginx-deployment.yaml`{{execute}}

Confirmer que le déploiement `nginx` a été créé dns le namespace `developement` :

`kubectl get deploy --namespace development`{{execute}}

Confirmer qu'il ne se trouve pas dans le namespace par défaut :

`kubectl get deploy --namespace default`{{execute}}
