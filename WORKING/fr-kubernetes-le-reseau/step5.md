Par défaut, il n'y a aucune restriction sur le traffic réseau dans Kubernetes.

Les Pods peuvent toujours communiquer, même s'ils sont dans d'autres namespaces.

Pour limiter cette communication, utiliser des Network Policies. Celles-ci doivent être supportées par le plugin réseau. Par exemple, le plugin `flannel` ne les supporte pas.

Si dans une straétgie il n'y a pas de correspondance, le traffic est refusé.

`cat network-policy.yaml`{{execute}}
