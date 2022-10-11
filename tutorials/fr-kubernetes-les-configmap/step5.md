La modification d'une ConfigMap peut se faire de deux manières :
- en modifiant le fichier de configuration `nginx.conf`,
- en modifiant ConfigMap en utilisant un éditeur.

Pour la première méthode, une fois le fichier de configuration `nginx.conf` modifié, appliquer les changements :

`kubectl create configmap www-config --from-file=./nginx.conf --dry-run -o yaml | kubectl apply -f -`{{execute}}

Pour la seconde méthode, éditer la ConfigMap :

`kubectl edit cm/www-config`{{execute}}

Pour sauvegarder, taper `:W`; pour quitter, taper `:Q`; pour faire les deux en une fois : `:WD`.

Vérifier la version du client Kubectl :

`kubectl version`{{execute}}

Avec le client Kubectl 1.15 et plus, pour forcer la mise à jour d'un déploiement suite à ce changement :

`kubectl rollout restart deployment/www`{{execute}}

Avec un client de version antérieure suivre une des deux méthodes suivantes :
- modifier le fichier de ressource YAML par exemple en modifiant une annotation d'un fichier de déploiement :

`kubectl patch deployment www -p "{\"spec\":{\"template\":{\"metadata\":{\"annotations\":{\"counter\":\"$(date +'%s')\"}}}}}"`{{execute}}

- redémarrer le déploiement en descendant à 0 puis en remontant le nombre de replicas :

`kubectl scale deployment www --replicas=0`{{execute}}

`kubectl scale deployment www --replicas=2`{{execute}}

Supprimer le déploiement `www` :

`kubectl delete deployment www`{{execute}}
