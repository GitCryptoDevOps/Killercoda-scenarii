Pour vérifier ce que l'utilisateur peut faire :

`kubectl auth can-i create deployments`{{execute}}

`kubectl auth can-i create pods --as paul --namespace apps`{{execute}}

Pour afficher les groupes d'API et les ressources de l'API :

`kubectl api-resources`{{execute}}

Une fois `kubectl proxy` exécuté, pour explorer les informations des groupes, utiliser :

`curl http://localhost:8001/apis`
