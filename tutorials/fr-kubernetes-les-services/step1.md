Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Créer un fichier de ressource Pod avec comme `label` `nginx-helloworld` avec le contenu :

`cat nginx-pod.yaml`{{execute}}

Lancer le pod :

`kubectl create -f nginx-pod.yaml`{{execute}}
