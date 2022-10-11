Les contrôleurs d'adminission implémentent par exemple le contrôleur `ResourceQuota`, qui s'assure qu'un objet ne viole pas de règles de quota.

Pour avoir la liste de ces contrôles et les configurer, éditer le fichier `/etc/kubernetes/manifests/kube-apiserver.yaml`, dans la section `spec.containers.command`, `--enable-admission-plugins=NodeRestriction`.
