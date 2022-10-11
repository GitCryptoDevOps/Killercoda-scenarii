`pod.spec.nodeSelector` spécifie une pair de clé-valeur qui doit correspondre au label qui est spécifié sur les noeuds éligibles.

`nodeSelector: disktype: ssd` dans `pod.spec` permet de faire correspondre de Pod à un noeud spécifique.

`pod.spec.nodeName` permet de sélectionner un noeud à partir de son nom. Cette méthode n'est pas recommandée.

Pour ajouter un label :

`kubectl label nodes worder1.example.com disktype=ssd`{{execute}}

Pour afficher la liste des labels :

`kubectl get nodes --show-labels`{{execute}}

`cat selector-pod.yaml`{{execute}}

`kubectl apply -f selector-pod.yaml`{{execute}}

`kubectl get pods -o wide`{{execute}}

`kubectl describe pod node-nginx`{{execute}}
