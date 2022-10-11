CodeDNS est le service DNS par défaut.

Son adresse IP est exposée par un service `kube-dns` qui se trouve dans le namespace `kube-system`.

Cette adresse doit correspondre au contenu du fichier `/etc/resolv.conf` sur les noeuds de Pod.

Lors du démarrage d'un conteneur, kubelet lui passe DNS (`--cluster-dns=<IP_SERVICE_DNS>`).

kubelet est configuré avec son domaine DNS local avec `--cluster-domain=<DOMAINE_LOCAL_PAR_DEFAULT>`).

### Analyse du DNS - 1

Vérifier le résolveur de DNS de Pod :

`kubectl exec podname cat /etc/resolv.conf`{{execute}}

Le `nameserver` doit correspondre à l'adresse IP du service `core-DNS`.

Il peut y avoir un chemin de recherche contenant `search default.svc.cluster.local svc.cluster.local cluster.local ...`.

Pour vérifier que le Pod CoreDNS est opérationnel :

`kubectl get pods --namespace=kube-system -l k8s-app=kube-dns`{{execute}}

S'il n'est pas opérationnel :

`kubectl -n kube-system describe pods core-dns-XXX`{{execute}}

Vérifier les logs dans les Pods CoreDNS :

`for p in $(kubectl get pods --namespace=kubesystem -l k8s-app=kube-dns -o name); do kubectl logs --namespace=kube-system $p; done`{{execute}}

### Analyse du DNS - 2

Vérifier que le service DNS est up :

`kubectl get svc -n kube-system`{{execute}}

Vérifier que les endpoints sont exposés :

`kubectl get ep kube-dns -n kube-system`{{execute}}

`kubectl create -f busybox.yaml`{{execute}}

`kubectl get svc`{{execute}}

`kubectl exec -it busybox22 -- nslookup kubernetes`{{execute}}

=> Erreur `Connection refused`, `connection timed out; no servers could be reached`
kubectl get pods

`kubectl exec -it busybox22 -- nslookup kubernetes`{{execute}}

=> Erreur `Connection refused`, `connection timed out; no servers could be reached`

`kubectl exec -it busybox22 -- nslookup nginx`{{execute}}

=> Erreur `Connection refused`, `connection timed out; no servers could be reached`

### Troubleshooting DNS

Désactiver le firewall sur tous les noeuds :

`iptables -F`{{execute}}

`iptables -t nat-F`{{execute}}

`iptables -t mangle -F`{{execute}}

`iptables -X`{{execute}}

Redémarrer `dockerd` :

`systemctl restart docker`{{execute}}

Supprimer les Pods `core-dns` :

`kubectl delete pod -n kube-system -l k8s-app=kube-dns`{{execute}}

Ils sont automatiquement recréés.

Supprimer le pod de plugin réseau et le réinstaller.

Remplacer le plugin réseau : Calico est meilleur que Weave.

`kubectl get svc -n kube-system`{{execute}}

`sudo systemctrl status firewalld`{{execute}}

`ssh root@worker1 systemctrl status firewalld`{{execute}}

`ssh root@worker2 systemctrl status firewalld`{{execute}}

`ssh root@worker3 systemctrl status firewalld`{{execute}}

`kubectl get pods -n kube-system`{{execute}}

`kubectl delete pod -n kube-system coredns-XXXX`{{execute}}

`kubectl delete pod -n kube-system coredns-YYY`{{execute}}

`kubectl get pods -n kube-system`{{execute}}

`kubectl exec -it busybox22 -- nslookup nginx`{{execute}}

=> Erreur `Connection refused`, `connection timed out; no servers could be reached`

`kubectl exec -it busybox22 -- cat /etc/resolv.conf`{{execute}}
