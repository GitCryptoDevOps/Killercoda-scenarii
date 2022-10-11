Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

La log de Kubernetes permet d'accéder à la sortie des conteneurs d'un pod. Certains services permettent de centraliser tous les pods de tous les noeufs.

Créer un fichier de ressource Pod faisant tourner un conteneur afficher une log :

`cat log-pod.yaml`{{execute}}

Créer le pod :

`kubectl apply -f log-pod.yaml`{{execute}}

Afficher les cinq lignes de log les plus récentes du conteneur `mycontainer` du pod `mylog` :

`kubectl logs --tail=5 mylog -c mycontainer`{{execute}}

Afficher en flux continu les logs du conteneur `mycontainer` du pod `mylog` à partir des 10 dernières secondes (`--since=10s`)) :

`kubectl logs -f --since=10s mylog -c mycontainer`{{execute}}

Pour afficher les logs de l'instance précédente du conteneur `mycontainer` du pod `previous-log-pod` :

`kubectl logs -p previous-mylog -c mycontainer`

Supprimer le pod :

`kubectl delete pod/mylog`{{execute}}
