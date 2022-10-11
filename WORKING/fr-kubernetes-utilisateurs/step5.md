`kubectl config set-context anna-context --cluster=kubernetes --namespace=staff --user=anna`{{execute}}

`kubectl --context=anna-context get pods`{{execute}}

=> RBAC n'a pas encore été configuré. Cette commande échoue donc (`User "anna" cannot list resource "pods" in API group "" in the namesapce "staff"`)

`kubectl config get-contexts`{{execute}}
