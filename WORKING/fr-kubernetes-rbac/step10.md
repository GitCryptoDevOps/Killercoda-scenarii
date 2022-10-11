Les pods utilisent l'authentification par ServiceAccount.

Chaque namespace dispose d'un ServiceAccount `default` par défaut.

Lister les ServiceAccounts (`sa`) :

`kubecetl get sa --all-namespaces`{{execute}}

Pour récupérer le secret `development` utilisé pour l'authentification à l'API Server :

`kubectl get sa/default -n development -o yaml`{{execute}}

Le secret est affiché dans la section `secrets:` au format YAML.

Pour récupérer un token d'authentification à l'API Server :

`kubectl describe secrets/default-token-jfp6k -n development`{{execute}}
