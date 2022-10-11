`kubectl --context=anna-context get pods`{{execute}}

=> `No resources found in staff namespace`

`kubectl create deployment nginx --image=nginx`{{execute}}

`kubectl -n staff describe role staff`{{execute}}

`kubectl get all`{{execute}}

`kubectl -n staff describe role staff`{{execute}}
