`kubectl drain <NOM_DU_NOEUD> --delete-local-data --force --ignore-daemonsets`{{execute}}

`kubectl delete node <NOM_DU_NOEUD>`{{execute}}

`kubeadm reset`{{execute}}

`rm ~/.kube/config`{{execute}}
