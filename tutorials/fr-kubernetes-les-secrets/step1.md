Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Les secrets permettent de protéger les données sensibles (mot de pase, chaîne de connexion à un service, ...). Ces informations sensibles ne sont donc stockées ni dans les images ni dans les spécifications.

L'utilisation des secrets dans un pod peut se faire en utilisant :
- un volume monté dans les conteneurs,
- `kubelet` au moment de récupérer l'image,
- `etcd`.

Les secrets peuvent être de différents types :
- `generic` : créé à partir d'un fichier, d'un répertoire ou d'une valeur;
- `docker-registry` : utilisé pour s'authentifier auprès d'un Docker Registry afin de pouvoir récupérer des images privées;
- `TLS` : créé à partir d'un couple clé publique / clé privée, il est utilisé pour la gestion des clés (PKI).
