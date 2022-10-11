Créer un fichier de ressource Pod avec le contenu :

Créer le namespace `development` :

`kubectl create namespace development`{{execute}}

Créer un fichier de ressource Namespace avec le contenu :

`cat nginx-pod.yaml`{{execute}}

Créer un pod dans le namespace `development` :

`kubectl create --namespace=development -f nginx-pod.yaml`{{execute}}

Confirmer que le pod `development` n'est pas visible dans le namespace par défaut `default` :

`kubectl get pods`{{execute}}

Confirmer qu'il est visible dans le namespace `development` :

`kubectl get pods --namespace=development`{{execute}}

Confirmer qu'il est visible dans la liste des pods de l'ensemble des namespaces :

`kubectl get pods --all-namespaces`{{execute}}
