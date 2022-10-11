Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Créer un fichier de ressource Pod avec le contenu :

`cat nginx-pod.yaml`{{execute}}.

Lancer le pod :

`kubectl create -f nginx-pod.yaml`{{execute}}

Lister les pods présents :

`watch kubectl get pod`{{execute}}

Une fois le pod créé en état `Running`, appuyer sur `Ctrl-C`.

Afficher la description du pod affiché dans la liste précédente :

`kubectl describe pod nginx-helloworld`{{execute}}
