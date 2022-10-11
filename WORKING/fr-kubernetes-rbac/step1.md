L'API fournit l'accès à toute la configuration de Kubernetes.

Par défaut, elle tourne sur le port 6443.

L'API est souvent auto-signée : le certificat utilisé se trouve dans `~/.kube/config`.

Pour accéder à l'API, l'utilisateur doit utiliser son propre certificat.
