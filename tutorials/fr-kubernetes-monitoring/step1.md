Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

La surveillance de Kubernetes est fournie par le Metrics Server intégré.

Il expose une API standard et peut être utilisé pour exposer des métriques personnalisées.

La commande `kubectl top` permet de disposer d'une interface du type `top` pour montrer l'usage des ressources.

Mise en place du Metrics Server :

`git clone https://github.com/kubernetes-incubator/metrics-server.git`{{execute}}

`kubectl create -f metrics-server/deploy/kubernetes/`{{execute}}

`kubectl -n kube-system get pods`{{execute}}

`kubectl -n kube-system edit deployments.apps metrics-server`{{execute}}

=> spec.template.spec.containers.args : ajouter `- --kubelet-insecure-tls` et `- --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname`

Attendre que le nouveau pod ait été créé :

`watch kubectl get pods`{{execute}}

Récupérer le nom du pod Metrics Server :

`POD=$(kubectl -n kube-system get pods |grep metrics-server- |awk {' print $1}')`{{execute}}

`echo $POD`

Confirmer que la log du Pod les messages `Generating self-signed cert` et `Serving securely on [::]443` :

`kubectl -n kube-system logs $POD`{{execute}}

Pour afficher la liste des pods les plus actifs :
- de tous les namespaces :

`kubectl top pods --all-namespaces`{{execute}}

- des pods :

`kubectl top pods`{{execute}}

- des noeuds :

`kubectl top node`{{execute}}
