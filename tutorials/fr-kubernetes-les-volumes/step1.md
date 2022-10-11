Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Les volumes permettent aux conteneurs d'un même pod de partager des données.

L'avantage est qu'il permet de découpler les données du cycle de vie d'un conteneur.

Les volumes sont définis dans la spécification d'un Pod.

Il existe de nombreux types de volumes (`https`://kubernetes.io/docs/concepts/storage/volumes/#types-of-volumes`) :
- `emptyDir`,
- `configMap`,
- `Secret`,
- `nfs`,
- `awsElasticBlockStore`,
- `azureDisk`, ...
