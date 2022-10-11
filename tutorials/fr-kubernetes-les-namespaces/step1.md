Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Les namespaces de Kubernetes reposent sur la fonctionnalité de namespace de Linux.

Ils permettent d'implémentation une séparation des ressources avec des limitations de quota.

Les namespaces par défaut sont :
- `default` : il contient les ressources Kubernetes créées par défaut,
- `kube-node-lease` : c'est un namespace administratif,
- `kube-public` : c'est un namespace en lecture pour tout le monde,
- `kube-system` : il contient les pods de l'infrastructure.

Afficher les namespaces :

`kubectl get namespaces`{{execute}}

Créer le namespace `staging` en mode impératif :

`kubectl create namespace staging`{{execute}}

Confirmer que le namespace `staging` a bien été créé :

`kubectl get namespaces`{{execute}}

Créer le namespace `development` en mode déclaratif :
- créer un fichier de ressource Namespace :

`cat development-namespace.yaml`{{execute}}

- créer le namespace `development` :

`kubectl create -f development-namespace.yaml`{{execute}}

Confirmer que le namespace `development` a bien été créé :

`kubectl get namespaces`{{execute}}

Supprimer le namespace `development` :

`kubectl delete namespace/development`{{execute}}
