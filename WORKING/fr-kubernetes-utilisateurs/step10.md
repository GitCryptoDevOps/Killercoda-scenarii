`kubectl config set-context annastudents-context --cluster=kubernetes --namespace=students --user=anna`{{execute}}

`kubectl --context=annastudents-context get pods`{{execute}}

`kubectl -n students describe role students`{{execute}}

`kubectl create deployment studentsnginx --image=nginx`{{execute}}

=> Réussi

`kubectl --context=annastudents-context create deployment studentsnginx --image=nginx`{{execute}}

=> Echoué : `User "anna" cannot create resource "deployments" in API group "apps"in the namespace "students"
