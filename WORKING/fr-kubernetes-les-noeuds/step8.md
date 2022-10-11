Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Lister les noeuds disponibles dans le cluster :

`kubectl get nodes`{{execute}}

Pour planifier un pod sur un noeud, donner un label au noeud :

`kubectl label nodes crc-rk2fc-master-0 shouldrun=here`{{execute}}

Créer un pod qui est planifié sur le noeud avec le label `shouldrun=here` :

`cat pod.yaml`{{execute}}

Créer le pod :

`kubectl apply -f pod.yaml`{{execute}}

Afficher la liste des pods :

`kubectl get pods --output=wide`{{execute}}

Afficher des détails sur le noeud :

`kubectl describe node crc-rk2fc-master-0`{{execute}}
