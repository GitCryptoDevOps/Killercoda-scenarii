RBAC (Role Based Access Control) définit quels objets ont accès à quelles ressources.

Il y a quatre types :
- `Role` : donne l'accès aux ressources dans un seul namespace,
- `ClusterRole` : donne l'accès aux ressources au niveau d'un cluster, dans tous les namespaces,
- `RoleBinding` : donne des permissions définies dans un rôle à un ou plusieurs utilisateurs; `RoleBindings` peut faire référence à un `Role` ou à un `ClusterRole`,
- `ClusterRoleBinding` : donne des permissions au niveau du cluster, dans tous les namespaces.

Le process :
- déterminer ou créer un namespace,
- définir les credentials de certificat pour créer le compte utilisateur
- utiliser un contexte pour fixer les credentials à l'utilisateur pour ce namespace,
- créer un rôle pour les tâches que l'utilisateur a besoin de réaliser,
- associer (bind) l'utilisateur au rôle,
- vérifier que l'utilisateur a l'accès.
