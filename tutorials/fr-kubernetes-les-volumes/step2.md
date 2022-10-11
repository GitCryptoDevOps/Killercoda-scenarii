`PersistentVolume` (PV) est un stockage provisionné, statiquement ou dynamiquement via une StorageClass. Il fournit une abstraction de la gestion des volumes.

Il existe de nombreux types de PV (`https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes`) :
- NFS / iSCSI / ...,
- GCEPersistentDisk,
- AWSElasticBLockStore,
- AzureFile / AzureDisk,
- CepthFS / Ceph Block Device, ...

Créer un fichier de ressource PersistentVolume de type `hostPath` :

`cat hostpath-pv.yaml`{{execute}}

Créer le PV :

`kubectl apply -f hostpath-pv.yaml`{{execute}}

Lister les `PersistentVolume` :

`kubectl get pv`{{execute}}
