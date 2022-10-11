`kubectl get pods -n kube-system`{{execute}}

`kubectl get pods -n kube-system --show-labels`{{execute}}

`kubectl -n kube-system get all --selector name=weave-net`{{execute}}

`kubectl delete daemonsets.apps -n kube-system weave-net`{{execute}}

`wget https://docs.projectcalico.org/v3.8/manifests/calico.yaml`{{execute}}

`ssh root@workder1.example.com reboot`{{execute}}

`ssh root@workder2.example.com reboot`{{execute}}

`ssh root@workder3.example.com reboot`{{execute}}

`sudo reboot`{{execute}}

`kubectl get nodes -o wide`{{execute}}

`kubectl get nodes -n kube-system -o wide`{{execute}}

`kubectl get pods -n kube-system -o wide |grep calico`{{execute}}
