Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

RBAC (contrôle d’accès basé sur les rôles - Role-Based Access Control) permet de gérer des règles d'accès aux ressources `User`, `Group` et `ServiceAccount` d'un cluster grâce à des rôles.

RABC est intégré au client `kubectl`. Il dispose d'une interface web et une API REST. Il est stable depuis Kubernetes 1.8.

Il existe des libraries pour de nombreux langages (`https://kubernetes.io/docs/reference/client-libraries/`).

RBAC expose plusieurs endpoints (`https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.10`).

RBAC peut être utilisé :
- par l'utilisateur,
- dans un pod, en utilisant la ressource `ServiceAccount`.

Il y a plusieurs stratégies d'authentification :
- certificat client : utiliser l'option `--client-ca-file=FILE` au démarrage de l'API Server;
- bearer tokens (non dynamique) : utiliser l'option `--token-auth-file=FILE` au démarrage de l'API Server;
- HTTP basic auth (non dynamique- : utiliser l'option `--basic-auth-file=FILE` au démarrage de l'API Server;
- proxy d'authentification : il ajoute des entêtes HTTP à la requête.
