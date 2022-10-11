Les taints sont appliqués à un noeud pour marquer que ce noeud ne devrait pas accepter de Pod qui ne tolère pas le taint.

Les tolerations sont appliqués aux Pods et permet (mais ne nécessite pas) aux Pods de planifier sur les noeuds avec des taints correspondants - ainsi ce sont une exception aux taints qui sont appliqués.

Les affinités sont utilisées sur les Pods pour les attirer vers des noeuds spécifiques. Les taints permet à un noeud de repousser un ensemble de Pods.

Les taints et tolerations sont utilisés pour s'assurer que les Pods ne sont pas planifié sur des noeuds non appropriétés, s'assurant ainsi que des noeuds dédiés puissent être configurés pour des tâches dédiées.

Les taints et les tolerations n'ont pas d'effet sur les DaemonSets.

Les types de taint :
- `NoSchedule` : ne planifie pas de nouveaux pods,
- `PreferNoSchedule` : ne planifie pas de nouveaux pods, à moins qu'il n'y ait pas d'autre option,
- `NoExecute` : migre tous les pods loin de ce noeud.

`kubectl taint nodes worker1.example.com example-key=value:NoSchedule`{{execute}}

`kubectl describe nodes worker1.example.com`{{execute}}

=> Dans la sortie, il y a `Taints: example-key=value:NoSchedule`.

`kubectl create deployment nginx-taint --image=nginx`{{execute}}

`kubectl scale deployment nginx-taint --replicas=3`{{execute}}

`kubectl get pods -o wide --selector app=nginx-taint`{{execute}}

`cat taint-toleration.yaml`{{execute}}

`kubectl create -f taint-toleration.yaml`{{execute}}

`kubectl get pods nginx-tolerations -o wide`{{execute}}

`kubectl taint nodes worker1.example.com example-key:NoSchedule-`{{execute}}

`kubectl get pods -o wide --selector app=nginx-taint`{{execute}}

`kubectl delete pod nginx-taint-XXXXX`{{execute}}
