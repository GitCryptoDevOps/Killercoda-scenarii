Les adresses IP des Pods sont volatiles.

Les services fournissent un accès aux endpoints des Pods en utilisant les labels.

- `ClusterIP` : le service est exposé en interne est est atteignable seuleemnt depuis l'intérieur du cluster.
- `NodePort` : le service est exposé à l'adresse IP de chaque noeud via une adresse IP statique. Le service peut être atteint depuis l'extérieur du cluster à `nodeip:nodeport`
- `LoadBalancer` : le fournisseur de cloud offre un Load Balancer qui route le traffic les services basés soit sur NodePort soit sur ClusterIP
- `ExternalName` : le service est associé à un nom externe qui est implémenté via un enregistrement CNAME DNS

Pour créer un service qui expose un Pod ou un Deployment :
- en ligne de commande : `kubectl expose`,
- via un fichier YAML, utiliser `spec.selector` pour faire référence au label utilisé dans l'objet à exposer.
