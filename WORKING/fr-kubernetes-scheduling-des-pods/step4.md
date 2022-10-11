`nodeSelector` permet de contraindre les noeuds

Les affinités améliorent les options :
- le langage est plus expressif,
- il permet d'utiliser des règles souples,
- il peut fonctionner avec des labels qui sont sur d'autres pods, pour s'assurer que des pods spécifiques ne puissent pas se trouver au même endroit.

Il y a deux types d'affinité :
- les affinités de noeud fixent des règles d'affinity sur les noeuds,
- les affinités inter-pod spécifient les règles entre les pods.

L'affinité de noeud est comme `nodeSelector` mais permet de fixer des contraintes pour indiquer des noeuds éligibles :
- `requiredDuringSchedulingIgnoredDuringExecution` : spécifie que les règles doivent respecter un Pod pour pouvoir être planifié sur un noeud,
- `preferredDuringSchedulingIgnoredDuringExecution` : préfère qu'un Pod soit planifié sur un node, mais sans obligation; un poids est utilisé pour indiquer à quel point appliquer cette règle.

`cat pod-with-node-affinity.yaml`{{execute}}

`kubectl apply -f pod-with-node-affinity.yaml`{{execute}}

`kubectl get pods`{{execute}}

`kubectl describe pod with-node-afifnity`{{execute}}

=> Dans la section `Events:` figure un message `didn't match node selector`.
kubectl delete pod with-node-afifnity

`cat pod-with-node-affinity2.yaml`{{execute}}

`kubectl apply -f pod-with-node-affinity.yaml`{{execute}}

`kubectl get pods`{{execute}}

`kubectl describe pod with-node-afifnity`{{execute}}

=> Dans la section `Events:` figure un message `Successfully`.

`kubectl delete pod with-node-afifnity`{{execute}}
