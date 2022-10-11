Les noeuds sont des objets de l'API qui représentent une instance du cluster.

Le noeud master doit être sous Linux. Les noeuds worker peuvent être sous Linux ou Windows Server 2019.

Les noeuds devraient avoir un état "prêt".

Si le kubelet sur un noeud worker ne peut pas être atteint pendant 5 minutes par le `kube-apiserver`, il est programmé pour suppression et les Pods seront retirés du noeud.

Ajout des noeuds à un cluster :
- mettre en place le runtime de conteneur (`https://github.com/sandervanvugt/cka run setup/setup-docker.sh`)
- installer les binaires de Kubernetes : run `setup/setup-kubetools.sh`
- en root, rejoindre le cluster comme indiqué dans le noeud de contrôle après `kubectl init`
- vérifier que l'installation a réussi :

`kubectl get nodes`{{execute}}

Ajout des noeuds à un cluster plus tard :
- suivre la même procédure mais le token nécessire pour joindre le cluster doit être à nouveau généré
- créer un nouveau token :

`kubectl token create`{{execute}}

- générer un hash-cert :

`openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2> /dev/null | openssl dgst -sha256 -hex | sed 's/^.* //'`{{execute}}

- sur le nouveau noeud :

`kubeadm join --token $token 192.168.4.110:6443 --discovery-token-ca-cert-hash sha256:$hash`{{execute}}

`kubeadm token list`{{execute}}

`kubeadm token create`{{execute}}

`kubeadm token list 2> /dev/null`{{execute}}

`export TOKEN=XXXXXX`{{execute}}

`echo $TOKEN`{{execute}}

`openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2> /dev/null | openssl dgst -sha256 -hex | sed 's/^.* //'`{{execute}}

=> Cette commande retourne ZZZ

`export HASH=ZZZ`{{execute}}

`ssh 192.168.4.114 kubeadm join --token $TOKEN 192.168.4.110:6443 --discovery-token-ca-cert-hash sha256:$HASH`{{execute}}

`kubectl get nodes`{{execute}}

`sudo vim /etc/hosts`{{execute}}

=> Ajouter :

`192.168.4.114 worker4.example.com worker4`

`kubectl get nodes`{{execute}}
