Pour terminer tous les pods proprement sur un moeud et marquer le noeud comme non programmable :

`kubeclt drain`{{execute}}

Pour marquer un noeud comme non programmable mais laisser les Pods tourner dessus :

`kubectl cordon`{{execute}}

Pour annuler tous les drains et cordons :

`undordon`{{execute}}

`kubectl get nodes -o wide`{{execute}}

`kubectl drain worder3.example.com`{{execute}}

`kubectl get nodes -o wide |grep worker3`{{execute}}

`kubectl drain worder3.example.com --force`{{execute}}

`kubectl get nodes -o wide |grep worker3`{{execute}}

`kubectl uncordon worker3.example.com`{{execute}}
