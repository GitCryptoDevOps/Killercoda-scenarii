`kubectl config view`{{execute}}

=> `users.name.` : il n'y a que `kubernetes-admin`

`kubectl config set-credentials anna --client-certificate=./anna.crt --client-key=./anna.key`{{execute}}

`kubectl config view`{{execute}}

=> `users.name.` : il y a aussi `anna`
