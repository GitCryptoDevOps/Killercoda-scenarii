## Gestion des restrictions de ressources

`cat frontend-resources.yaml`{{execute}}

`kubectl create -f frontend-resources.yaml`{{execute}}

`kubectl descrube pod frontend`{{execute}}

=> Dans la section `Events:`, il y a le message `Insufficient memory`.
