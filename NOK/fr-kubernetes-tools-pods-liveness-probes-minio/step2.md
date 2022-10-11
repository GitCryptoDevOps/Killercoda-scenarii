La section `livenessProbe` permet d'ajouter une sonde :
- `path` : C'est le chemin d'accès à la sonde (`/minio/health/live`),
- `periodSeconds` : C'est la périodicité de l'appel de la sonde (`20`),
- `initialDelaySeconds:` : C'est le délai avant lequel la sonde est activée (`120`),
- `port` : C'est le port d'écoute de la sonde (`9000`).

`cat statefulset.yaml`{{execute}}

`cat service-clusterip.yaml`{{execute}}

Déployer l'application :

`kubectl apply -f statefulset.yaml`{{execute}}

`kubectl apply -f service-clusterip.yaml`{{execute}}

Afficher les événements dans la description du pod :

`kubectl describe pod minio-0`{{execute}}
