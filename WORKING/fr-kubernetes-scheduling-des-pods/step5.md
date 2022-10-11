Dans l'affinité de Pod, `topologyKey` est utilisé pour créer des groupes logiques (des zones).

Cette clé permet d'identifier les noeuds et les pods.

`cat pod-with-pod-affinity.yaml`{{execute}}

`kubectl create -f pod-with-pod-affinity.yaml`{{execute}}

`kubectl describe pod with-pod-affinity.yaml`{{execute}}

=> Dans la section `Events:` figure un message `1 node(s) had taints that the pod didn't tolerate, 3 node(s) didn't match pod affinity rules`.

### Application de l'anti-affinité de Pod

Les règles antiAffinity de Pod sont typiquement appliquées à des Deployments ou ReplicaSets pour s'assurer que les charges de travail sont co-localisées dans la même topologie.

Cela est pratique pour s'assurer que dans un cluster de trois noeuds, une application tourne toujours dans un cache in-memory comme redis.

`cat redis-with-pod-affinity.yaml`{{execute}}

`kubectl get deployments`{{execute}}

`kubectl drain worker2.example.com --force`{{execute}}

`kubectl get pods`{{execute}}

`kubectl get pods -o wide`{{execute}}

`kubectl describe pods redis-cache-XXXX`{{execute}}

=> Dans la section `Events:` figure un message `1 node(s) had taints that the pod didn't tolerate, 3 node(s) were un schedulable, 2 node(s) didn't match pod affinity/anti-affinity`.

`cat webserver-with-pod-affinity.yaml`{{execute}}
