Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Un DaemonSet est un contrôleur qui s'assure que le pod tourne sur tous les noeuds du cluster. Si un noeud est ajouté ou retiré d'un cluster, DaemonSet ajoute ou supprime automatiquement le pod.

Les DaemonSets sont très utiles pour les exporters pour le monitoring par exemple.

La mise à jour d'un DaemonSet consiste à arrêter le pod puis à en démarrer un nouveau. Cela peut prendre la forme de deux stratégies :
- `OnDelete` : le pod n'est mis à jour qu'après avoir été supprimé manuellement,
- `RollingUpdate` : le pod n'est mis à jour qu'après avoir été supprimé automatiquement par Kubernetes.

`.spec.updateStrategy.type` définit le type de stratégie mise en oeuvre.

`.spec.updateStrategy.rollingUpdate.maxUnavailable` spécifie le nombre de pods remplacés à la fois, noeud par noeud. Sa valeur par défaut est 1.
