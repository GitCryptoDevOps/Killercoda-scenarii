Les modules Authenticator sont utilisés pour inclure les certificats client, les mots de passe ou les tokens pour gérer l'authentification :
- des humains : ils utilisent typiquement des certificats client,
- des comptes service : ils utilisent typiquement des tokens.

Les échecs d'authentification donnent des requêtes HTTP avec un code 401.

Kubernetes n'a pas d'objet utilisateur.

L'authentification signifie présenter les bons certificats pour accéder au cluster.

Ces certificats sont liés à l'utilisateur, qui est juste un alias défini dans le fichier `.kube/config`, qui contient trois sections :
- `client-certificate-data` : contient le certificat de clé publique du client,
- `client-key-data` : contient la clé privée du client,
- `certificate-authority-data` : contient le certificat de clé publique CA.

La commande `curl` doit utiliser ces certificats lors des requêtes.

Pour afficher des détails sur les commandes kubectl :

`kubectl get pods -v=10`{{execute}}

`kubectl-proxy` peut aussi faire tourner un proxy qui s'occupe d'ajouter les informations d'authentification au `kube-apiserver`.

`export client=$(grep client-cert ~/.kube/config |cut -d " " -f 6)`{{execute}}

`echo $client`{{execute}}

`export key=$(grep client-key-data ~/.kube/config |cut -d " " -f 6)`{{execute}}

`echo $key`{{execute}}

`export auth=$(grep certificate-authority-data ~/.kube/config |cut -d " " -f 6)`{{execute}}

`echo $key`{{execute}}

`echo $client |base64 -d - > client.pem`{{execute}}

`echo $key |base64 -d - > client-key.pem`{{execute}}

`echo $auth |base64 -d - > ca.pem`{{execute}}

`kubectl config view |grep server`{{execute}}

`curl --cert ./client.pem --key ./client-key.pem --cacert ./ca.pem https://XX.XX.XX.XX:6443/api/v1/pods`{{execute}}
