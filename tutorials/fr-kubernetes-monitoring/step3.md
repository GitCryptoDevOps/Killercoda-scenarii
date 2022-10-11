Les états des Pods sont :
- `Pending` : le Pod a été créé dans `etcd` mais est encore en cours de démarrage,
- `Running` : le Pod est en état de bonne santé,
- `Succeeded` : le Pod a terminé son travail et n'a pas besoin de le redémarrer,
- `Failed` : un ou plusieurs conteneurs dans le Pod ont terminé avec un code d'erreur et ne redémarreront pas,
- `Unknown` : l'état pourrait ne pas être obtenu, souvent à cause de problèmes réseau,
- `Completed` : le Pod a tourné jusqu'à sa fin,
- `CrashLookBackOff` : un ou plusieurs conteneurs dans le Pod ont généré une erreur, mais le scheduler essaie encore de les exécuter.

`kubectl get pods`{{execute}}

`kubectl create deployment busybox --image=busybox`{{execute}}

`kubectl get pods`{{execute}}

Récupérer le nom du Pod créé :

`POD=$(kubectl get pods |grep busybox |awk '{ print $1}')`{{execute}}

`echo $POD`{{execute}}

`kubectl describe pods $POD`{{execute}}
