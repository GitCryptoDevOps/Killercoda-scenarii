Créer une clé privée :

`openssl genrsa -out myuser.key 2048`{{execute}}

Créer une demande de signature de certificat (CSR) :

`openssl req -new key myuser.key -out myuser.csr -subj "/CN=myuser/O=development"`{{execute}}

Saisir les valeurs de :
- `Common Name` : le nom de l'utilisateur (`myuser`);
- `Organisation` : le nom du groupe (`development`).

Signer la CSR avec l'autorité de certification du cluster Kubernetes :

`openssl x509 -req \
  -in myuser.csr \
  -CA $HOME/.minikube/ca.crt \
  -CAkey $HOME/.minikube/ca.key \
  -CAcreateserial \
  -out myuser.crt \
  -days 500`{{execute}}

Ajouter l'utilisateur `myuser` à la configuration :

`kubectl config set-credentials myuser --client-certificate=myuser.crt --client-key=myuser.key`{{execute}}

Créer un nouveau contexte :

`kubectl config set-context myuser-ctx --cluster=minikube --namespace=development --user=myuser`{{execute}}

Lister les contextes :

`kubectl config get-contexts`{{execute}}

Pour démarrer `minikube` avec le plugin d'authorisation :

`minikube start --extra-config=apiserver.Authorization.Mode=RBAC`{{execute}}

Confirmer qu'il n'est pas possible de lister les pods dans le contexte `myuser-ctx` :

`kubectl get pods --context myuser-ctx`{{execute}}

Le message d'erreur `User myuser cannot list pods in the namespace development` est affiché.

Pour résoudre ce problème, il faut associer un rôle RBAC à l'utilisateur `myuser`.
