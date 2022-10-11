Kubernetes standardise les interfaces :
- CNI (Container Network Interface)
- CRI (Container Runtime Interface)
- CSI (Container Storage Interface)

### CNI

Le plugin CNI (https://github.com/containernetworking/cni) est le plugin le plus répandu lors du démarrage de kubelet sur un noeud worker. Pour cela, utiliser l'argument `--network-plugin=cni`. Les paramètres de réseau peuvent aussi être passés avec d'autres options.

CNI ne gère pas le réseau Pod à Pod : cela est fait par le plugin réseau.

CNI garantit la nature "pluggable" du réseau.

Il simplifie la sélection des plugins réseaux (linux-bridge, weave, etc ...).

La configuration du plugin CNI se trouve dans `/etc/cni/net.d`.

Si elle est nécessaire, la configuration supplémentaire est souvent implémentée par des Pods.

`sudo -i`{{execute}}

`ls -l /etc/cni/net.d`{{execute}}

`cat 10-weave.conflist`{{execute}}

```
{
	"cniVersion": "0.3.0",
	"name": "weave",
	"plugins": [
		{
			"name": "weave",
			"type": "weave-net",
			"hairpinMode": true
		},
		{
			"type": "portmap",
			"capabilities": {"portMappings": true},
			"snat": true
		}
	]
}
```
