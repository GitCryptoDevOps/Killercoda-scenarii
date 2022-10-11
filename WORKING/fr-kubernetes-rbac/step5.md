ABAC (Attribute Based Access Control) était le mode d'autorisation par défaut avant RBAC.

Il utilise des politiques définies dans un fichier JSON et référencées par l'option `--authorization-policy-file=my_policy.json` dans le fichier de `kube-apiserver` :

```
{
	"apiVersion": "abac.authorization.kubernetes.io/v1beta1",
	"kind": "Policy",
	"spec": {
		"user": "anna",
		"namespace": "*",
		"resource": "*",
		"apiGroup": "*"
	}
}
```
