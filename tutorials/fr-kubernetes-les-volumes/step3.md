### Création d'un PVC

`PersistentVolumeClaim` (PVC) constitue une demande de stockage. Une fois acceptée, cette demande consomme un `PersistentVolume` : un lien (binding) entre le PVC et le PV est alors créé.

Créer un fichier de ressource PersistentVolumeClaim :

`cat pvc.yaml`{{execute}}

Créer le PVC :

`kubectl apply -f pvc.yaml`{{execute}}

Un PVC spécifie des contraintes : la taille (`storage: 1Gi`), le type (`storageClassName: manual`), le mode d'accès (`accessModes:`, `ReadWriteOnce`).

Confirmer que le PVC est associé à un PV :

`kubectl get pvc`{{execute}}

Le statut du PVC est `Bound`.

### Utilisation du PVC

Créer un fichier de ressource Pod utilisant un PersistentVolumeClaim :

`cat pvc-pod.yaml`{{execute}}

Créer un pod utilisant un volume via un PVC :

`kubectl apply -f pvc-pod.yaml`{{execute}}

Confirmer que le contenu du répertoire `/data/pv` affiche le contenu du PersistentVolume `pv` :

`ls -l /data/pv`{{execute}}
