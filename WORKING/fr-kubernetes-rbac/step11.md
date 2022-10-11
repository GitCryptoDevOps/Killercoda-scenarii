L'authentification par RBAC repose sur quatre types de ressources :
- `Role`,
- `ClusterRole`,
- `RoleBinding`,
- `ClusterRoleBinding`.

La ressource `Role` permet de gérer les droits d'accès aux ressources dans un namespace défini.

Créer un fichier de ressource Role permettant de lire les pods du namespace `development` :

`cat role.yaml`{{execute}}

Créer le rôle :

`kubectl apply -f role.yaml`{{execute}}

Voici quelques explications :
- `namespace: development` : c'est le namespace auquel la ressource `Role` s'applique;
- `rules:` : ce sont les règles qui permettent de lister les pods du namespace `development`.

La ressource `ClusterRole` permet de gérer les droits d'accès aux ressources du cluster : il n'est donc pas restreint à un namespace.

Créer un fichier de ressource Cluster Role qui permet de lire les secrets d'un cluster :

`cat clusterrole.yaml`{{execute}}

Créer le rôle :

`kubectl apply -f clusterrole.yaml`{{execute}}

`rules:` permet de spécifier les règles permettant de lister les secrets dans l'ensemble des namespaces d'un cluster.

La ressource `RoleBinding` permet d'associer les permissions définies dans une ressource `Role` à un utilisateur (`User`, `Group` ou `ServiceAccount`). Elle peut référencer un `ClusterRole` mais est limité au namespace spécifié.

Confirmer que l'utilisateur `myuser` n'a pas les droits pour lire les pods dans le contexte `myuser-ctx` :

`kubectl get Pods --context myuser-ctx`{{execute}}

La commande retourne le message d'erreur `User myuser cannot list pods in the namespace development`.

Créer un fichier de ressource `RoleBinding` :

`cat rolebinding.yaml`{{execute}}

Créer l'objet `RoleBinding` :

`kubectl apply -f rolebinding.yaml`{{execute}}

Voici quelques explications :
- `namespace: development` : c'est le namespace dans lequel est réalisée l'association entre la ressource `Role` et la ressource `User`;
- `roleRef:` : association donnant le droit à l'utilisateur de lire les pods du namespace `development`.

Lister les pods dans le même contexte :

`kubectl get Pods --context lumyuserc-ctx`{{execute}}

Créer un fichier de ressource `ClusterRoleBinding` permettant d'associer les permissions définies dans un `ClusterRole` à un utilisateur (`User`, `Group` ou `ServiceAccount`) :

`cat clusterrolebinding.yaml`{{execute}}

Créer l'objet `RoleBinding` :

`kubectl apply -f clusterrolebinding.yaml`{{execute}}
