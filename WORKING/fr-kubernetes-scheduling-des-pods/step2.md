Pour sélectionner un noeud, `kube-scheduler` utilise le filtrage puis le scoring.

### Le filtrage

Le filtrage consiste à filtrer les noeuds qui ont les ressources demandées par le Pod.

Les options possibles sont :
- `PodFitsHostPorts` : vérifie si des ports réseaux sont libres;
- `PodFitsResources` : vérifie sir le noeud a assez de ressources CPU et mémoire;
- `PodMatchNodeSelector` : vérifie sir le sélecteur de noeud du Pod correspond aux labels du noeud;
- `CheckNodeDiskPressure` : vérifie sur un noeud rapporte un système de fichier qui est presque plein, auquel cas le Pod ne sera pas planifié sur lui;
- `CheckVolumeBinding` : évalue si les volumes qui sont demandés peuvent être servis par le noeud en utilisant le "bound" et "unbound" de PVCs.

### Le scoring

Le scheduler classe tous les noeuds restants après le filtre pour choisir l'emplacement le mieux adapté.

Les options possibles sont :
- `SelectorSpreadPriority` : propage les pods sur les hôtes, en considérant les Pods qui appartiennent au même Service, StatefulSet ou ReplicaSet;
- `LeastRequestedPriority` : priorise les noeuds avec le moins de ressources demandées;
- `NodeAffinityPriority` : priorise les noeuds selon les préférences de planification de l'affinité de noeud.
