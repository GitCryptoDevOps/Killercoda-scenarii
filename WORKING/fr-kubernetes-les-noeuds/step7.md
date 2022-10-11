`etcd` est le moyen de stockage des clés-valeurs utilisé dans le cluster pour stocker toutes les données du cluster.

Il doit être sauvegardé régulièrement.

`sudo ETCDCTL_API=3 etcdctl snapshot save -h`{{execute}}

`sudo ETCDCTL_API=3 etcdctl snapshot save snaspshot.db \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  --cert=/etc/kubernetes/pki/etcd/server.crt`{{execute}}

- `cacert` : certificat CA,
- `cert` : certificat du service etcd,
- `key` : clé du service etcd.

`sudo yum provides */etcdctl`{{execute}}

Pour vérifier la sauvegarde de etcd :

`ETCDCTL_API=3 etcdctl --write-out=table snapshot status snapshot.db`{{execute}}

`sudo -i`{{execute}}

`cd /etc/kubernetes/pki/etcd`{{execute}}

`ls -l`{{execute}}

`ETCDCTL_API=3 etcdctl snapshot save newcopy.db \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --endpoints=127.0.0.1:2379`{{execute}}

`ps aux |grep etcd`{{execute}}
