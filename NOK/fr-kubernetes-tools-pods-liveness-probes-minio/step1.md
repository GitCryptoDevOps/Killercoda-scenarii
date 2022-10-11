Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Pour savoir quand un conteneur doit redémarrer, Kubernetes utilise des sondes (`liveness probes`). Cela peut être fait de deux manières :
- en utilisant TCP, en appelant une commande dans le conteneur qui doit retourner 0,
- en utilisant HTTP, en appelant une URL.

Nous allons mettre en place une sonde de type HTTP. Pour cela, nous devons exposer des endpoints de health check sans authentification.

MinIO fournit déjà un tel endpoint (`/minio/health/live`) qui écoute sur le port 9000.
