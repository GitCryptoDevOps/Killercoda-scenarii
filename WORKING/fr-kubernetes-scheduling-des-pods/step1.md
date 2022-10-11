Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Le kube-scheduler permet de déterminer sur quels noeuds tourne un Pod. Pour cela, il utilise des fonctions de priorité.

Un utilisateur peut fixer une priorité plus élevée à des Pods.

Il existe plusieurs méthodes pour influencer le noeud sur lequel le Pod sera planifié :
- les labels,
- le `nodeName` du Pod,
- le `nodeSelector` dans les labels,
- les affinités (`affinity`, `antiAffinity` ou `taints`).
