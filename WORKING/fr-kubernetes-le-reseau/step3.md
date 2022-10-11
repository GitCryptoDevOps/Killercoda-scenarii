Kubernetes Networking est pluggable. Il y a plusieurs plugins disponibles.

La configuration se fait souvent avec le CNI, à partir duquel les Pods de réseau sont démarrés par le kubeleter sur tous les noeuds workers.

`kubectl get pods --all-namespaces -o wide |grep weave`{{execute}}

`kubectl get pods -n kube-system weave-net-XXXXX -o yaml`{{execute}}

`kubectl -n kube-system exec weave-net-XXXX ip route show`{{execute}}

`kubectl -n kube-system exec weave-net-XXXX ip a s`{{execute}}
