Il y a trois modes d'autorisation :
- ABAC,
- RBAC,
- Webhook : utilise HTTP POST quand quelque arrive.

Il y a deux configurations Deny/Allow globales :
- AlwaysDeny
- AlwaysAllow.

Il existe plusieurs modes d'autorisation des utilisateurs (RBAC, ABAC, ...). Ils sont listés au démarrage de `kube-apiserver`.

Pour modifier la configuration, modifier le fichier `/etc/kubernetes/manifests/kube-apiserver.yaml`.

Chaque mode implémente des politiques d'accès.

`vi /etc/kubernetes/manifests/kube-apiserver.yaml`

=> spec.containers.command => `--authorization-mode=Node,RBAC`

Exemple de stratégie pour l'utilisateur anna :

```
{
	"apiVersion": "abac.authorization.kubernetes.io/v1beta1",
	"kind": "Policy",
	"spec": {
		"user": "anna",
		"namespace": "production",
		"resource": "pods",
		"readonly": true
	}
}
```

Autorisation nécessaires dans le namespace :

```
{
	"apiVersion": "authorization.k8s.io/v1beta1",
	"kind": "SubjectAccessReview",
	"spec": {
		"resourceAttributes": {
			"namespace": "production",
			"verb": "get",
			"group": "example.com",
			"resource": "pods"
		}
	}
}
```
