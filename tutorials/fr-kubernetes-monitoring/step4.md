Pour la résolution des problèmes, aller de l'évident à des informations tracées plus spécialisées.

Démarrer en analysant la sortie du CLI.

Puis explorer les logs du Pod.

Ouvrir un shell dans le Pod / conteneur pour surveiller ce qui se passe.

Vérifier les logs de noeud.

Eliminer SELinux / AppArmor.

Surveiller les appels d'API faits à et depuis l'`api-server`.

### Résolution des problèmes de Cluster

`systemd` démarre le service `kubelet.service`.

Afficher les paramètres de démarrage (dont `kubelet.conf` et `config.yaml`) :

`ps aux |grep kubelet`{{execute}}

Kubelet démarre les Pods depuis `/etc/kubernetes/manifests` :
- `kube-apiserver`,
- `etcd`,
- `kube-controller-manager`,
- `kube-scheduler`.

`kube-controller-manager` démarre tout le reste.

Afficher l'état du service `kubelet` :

`systemctl status kubelet`{{execute}}

Afficher la liste des conteneurs Docker en cours d'exécution :

`sudo docker ps`{{execute}}

Afficher les informations de lancement du processus de l'API Server :

`ps aux |grep api`{{execute}}

Afficher les informations de lancement du processus de Kubelet :

`ps aux |grep kubelet`{{execute}}
