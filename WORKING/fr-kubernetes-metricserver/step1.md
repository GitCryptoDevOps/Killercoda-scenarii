Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Télécharger le Metric Server :

`git clone https://github.com/kubernetes-incubator/metrics-server.git`{{execute}}

Le déployer :

`kubectl create -f metrics-server/deploy/kubernetes/`{{execute}}

Confirmer qu'il est bien lancer :

`kubectl -n kube-system get pods`{{execute}}

Editer le déploiement `metrics-server` et ajouter dans la section `spec.template.spec.containers.args` les arguments :
- `- --kubelet-insecure-tls`,
- `- --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname`.

`kubectl -n kube-system edit deployments metrics-server`{{execute}}

Récupérer le nom du pod commençant par `metrics-server` :

POD=`kubectl -n kube-system get pods |grep metrics-server |awk '{ print $1}'`

Confirmer que le Pod de Metrics Server a bien démarré :

`kubectl -n kube-system logs $POD`{{execute}}

Afficher la liste des Pods les plus chargés :

`kubectl top pods --all-namespaces`{{execute}}
