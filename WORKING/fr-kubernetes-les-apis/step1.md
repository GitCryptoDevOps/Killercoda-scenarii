Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Kubernetes a plusieurs API qui définissent les objets et les services de Kubernetes.

Les APIs ont des versions différentes, qui peuvent être dépréciées et retirées.

Les APIs sont RESTful.

L'accès est géré par RBAC.

Avec RBAC, les comptes utilisateur sont identifiés sous forme de certificats associés à un nom, définis dans ~/.kube/config.

Pour montrer les versions d'API courantes :

`kubectl api-versions`{{execute}}

Pour explorer les composants de l'API :

`kubectl explain pod`{{execute}}
