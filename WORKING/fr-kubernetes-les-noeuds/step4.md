`su -`{{execute}}

`systemctl status kubelet`{{execute}}

`ps aux |grep kubelet |grep yaml`{{execute}}

`vi /etc/kubernetes/manifests/kube-controller-manager.yaml`{{execute}}

=> spec.containers.command. `--authentication`

`kubeadm token -h`{{execute}}

`kubeadm config -h`{{execute}}

`kubeadm config view`{{execute}}

`exit`{{execute}}

`kubectl get secrets -n kube-system`{{execute}}

`kubectl -n kube-system get secrets certificate-controller-token-XXXX -o yaml`{{execute}}
