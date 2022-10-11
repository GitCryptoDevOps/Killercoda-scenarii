Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Voici le fichier configuration correspondant :

`cat nginx.conf`{{execute}}

Il y a trois méthodes pour créer une ConfigMap.

### Création d'une ConfigMap en utilisant --from-file

Stocker le fichier `nginx.conf` sous la clé `data` :

`kubectl create configmap nginx-config --from-file=./nginx.conf`{{execute}}

Confirmer que le contenu du fichier `nginx.conf` se trouve dans la section `data:` de la ConfigMap :

`kubectl get cm nginx-config -o yaml`{{execute}}

### Création d'une ConfigMap en utilisant --from-env-file

Stocker le fichier d'environnement `app.env` sous forme de clés sous la forme `log_level: WARN` :

`cat app.env`{{execute}}

`kubectl create configmap app-config-env --from-env-file=./app.env`{{execute}}

Confirmer que les variables d'environnement définies dans le fichier `app.env` se trouvent dans la section `data:` de la ConfigMap :

`kubectl get cm app-config-env -o yaml`{{execute}}

### Création d'une ConfigMap en utilisant --from-literal-file

Stocker les valeurs :

`kubectl create configmap app-config \
  --from-literal=log_level=WARM \
  --from-literal=env=production \
  --from-literal=cache=redis`{{execute}}

Confirmer que les variables d'environnement spécifiées dans la ligne de commandese trouvent dans la section `data:` de la ConfigMap :

`kubectl get cm app-config -o yaml`{{execute}}
