Afficher les informations de lancement du processus de `etcd` :

`journalctl |grep etcd`{{execute}}

Aller dans le répertoire des logs des conteneurs Docker :

`cd /var/log/containers`{{execute}}

Afficher la liste des logs :

`ls`{{execute}}

Récupérer le nom du fichier de log du conteneur contenant le texte `busybox` :

`LOGFILE=$(ls |grep busybox)`{{execute}}

`echo $LOGFILE`{{execute}}

`less $LOGFILE`{{execute}}
