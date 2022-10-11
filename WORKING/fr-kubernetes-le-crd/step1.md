Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Le CRD (Custom Resource Definitions) permet d'ajouter des objects de manière simple.

Les objets sont stockés dans la base de données etcd.

`kube-apiserver` permet d'accéder à cette base de données.

Créer une fichier de ressource `CustomResourceDefinition` :

`cat crd.yaml`{{execute}}

Créer l'objet :

`kubectl create -f crd.yaml`{{execute}}

Confirmer que le CRD `BackUp` a bien été créé :

`kubectl get crd`{{execute}}

Créer une fichier de ressource `BackUp` :

`cat crd-usage.yaml`{{execute}}

Créer l'objet :

`kubectl create -f crd-usage.yaml`{{execute}}

Afficher la liste des objets créés :

`kubectl get backups.stable.linux.com`{{execute}}

`kubectl get backups.stable.linux.com mybackup -o yaml`{{execute}}
