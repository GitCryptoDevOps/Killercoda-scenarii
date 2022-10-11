# Lab

Après avoir travaillé sur un cluster, l'`api-server` créée des problèmes.

Où collecter des informations sur la configuration de l'api-server et les problèmes ?

`kubectl get pods -n kube-system -o wide`{{execute}}

`kubectl describe -n kube-system pod kube-apis-server-XXXXXX`{{execute}}

`sudo -i`{{execute}}

`docker ps |grep api`{{execute}}

`ps aux |grep apiser`{{execute}}

`cd /etc/kubernetes/manifests`{{execute}}

`vi kube-apiserver.yaml`{{execute}}

`cd /var/log/containers`{{execute}}

`less kube-apiserver-control-example.com****`{{execute}}
