Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Kubernetes n'a pas d'objet pour les utilisateurs.

Les comptes utilisateurs consiste en certificats autorisés complétés d'autorisations définies dans RBAC.

Pour céer un compte utilisateur :
- créer une paire de clé publique/privée,
- créer un CSR (Certificate Signing Request),
- signer le certificat,
- créer un fichier de configuration qui utilise ces clés pour accéder au cluster,
- créer run `Role` RBAC,
- créer un Role Binding RBAC.
