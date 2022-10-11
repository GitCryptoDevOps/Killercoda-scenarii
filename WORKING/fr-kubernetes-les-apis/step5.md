Par défaut, pour accès à l'API avec curl, il faut utiliser les certificats :

`curl --cert myuser.pem --key myuser-key.pem --cacert /root/myca.pem https://controller:6443/api/v1`{{execute}}

Pour éviter cela, il est également possible d'utiliser `kubectl proxy` :

`kubectl proxy --port=8001 &`{{execute}}

`curl http://localhost:8001/version`{{execute}}

`curl http://localhost:8001/api/v1/namespaces/default/pods`{{execute}}

`curl http://localhost:8001/api/v1/namespaces/default/pods/busybox2/`{{execute}}

`curl http://localhost:8001/api/v1/namespaces/kube-system/pods`{{execute}}

`curl -XDELETE http://localhost:8001/api/v1/namespaces/default/pods/busybox2/`{{execute}}

`kubectl get pods`{{execute}}
