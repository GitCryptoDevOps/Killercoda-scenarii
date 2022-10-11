`cat pod-networking.yaml`{{execute}}

`kubectl apply -f pod-networking.yaml`{{execute}}

`kubectl get pods`{{execute}}

`kubectl exec net-demo -c busy1 ip a s`{{execute}}

`kubectl exec net-demo -c busy2 ip a s`{{execute}}

`kubectl get pods -o wide |grep net`{{execute}}

`ssh root@worker3 "docker ps | grep pause | grep net"`{{execute}}

`ssh root@worker3 "docker ps | grep pause"`{{execute}}
