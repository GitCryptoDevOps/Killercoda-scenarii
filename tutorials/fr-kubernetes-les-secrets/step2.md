### Création d'un secret

Créer un secret à l'aide d'une des méthodes suivantes :
- à partir d'un fichier :

`echo -n "myusername" > ./username.txt`{{execute}}

`echo -n "mypassword" > ./password.txt`{{execute}}

`kubectl create secret generic mysecrets-file --from-file=./username.txt --from-file=./password.txt`{{execute}}

- à partir d'une valeur :

`kubectl create secret generic mysecrets-literal --from-literal=username=myusername --from-literal=password=mypassword`{{execute}}

- à partir d'un fichier manifest :

`cat secret.yaml`{{execute}}

`kubectl apply -f secret.yaml`{{execute}}

### Vérification que le secret a bien été créé

Confirmer que le secret `secrets-value` est bien listé :

`kubectl get secrets`{{execute}}

Le secret qui commence par `default-token-` est un secret généré par kubernetes pour permettre aux services internes d'accéder à l'API server.

Afficher la description du secret :

`kubectl describe secrets/mycredentials-file`{{execute}}

Confirmer que les valeurs `username.txt` et `password.txt` (ou `username` et `password`) sont bien stockées en base 64 dans le secret :

`kubectl get secrets service-creds -o yaml`{{execute}}

Pour encoder `Helloworld` en base 64 :

`echo -n "Helloworld" | base64`{{execute}}

Pour décoder `SGVsbG93b3JsZA==` encodée en base 64 :

`echo "SGVsbG93b3JsZA==" | base64 --decode`{{execute}}
