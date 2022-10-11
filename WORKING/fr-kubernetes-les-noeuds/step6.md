Un Pod statique est un Pod qui est toujours démarré avec et sur un noeud spécifique.

Par défaut, les fichiers manifest des Pods statiques se trouve dans `/etc/kubernetes/manifests`.

Pour spécifier cet emplacement, utiliser `staticPodPath` dans `/var/lib/kubelet/config.yaml`.

`ssh root@worker4`{{execute}}

`vi /etc/kubernetes/manifests/worker4-apache.yaml`{{execute}}

`ps aux |grep yaml`{{execute}}

`vi /var/lib/kubelet/config.yaml`{{execute}}

`systemctl restart kubelet`{{execute}}

`exit`{{execute}}

`kubectl get nodes -o wide |grep worker4`{{execute}}
