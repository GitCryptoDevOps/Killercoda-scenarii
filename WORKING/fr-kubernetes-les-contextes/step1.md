Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Afficher les détails de la configuration courante :

`kubectl config view`{{execute}}

Afficher le contenu du fichier de configuration :

`cat ${HOME}/.kube/config`{{execute}}
