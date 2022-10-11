`cat pv-nfs.yaml`{{execute}}

`kubectl create -f pv-nfs.yaml`{{execute}}

`cat pvc-nfs.yaml`{{execute}}

`kubectl create -f pvc-nfs.yaml`{{execute}}

`kubectl get pvc`{{execute}}

`kubectl get pv`{{execute}}

`cat pv-pod.yaml`{{execute}}

`kubectl create -f pv-pod.yaml`{{execute}}

`kubectl describe pod pv-pod`{{execute}}
