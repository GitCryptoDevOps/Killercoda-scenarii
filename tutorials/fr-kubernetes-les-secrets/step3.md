### Méthode 1

Créer un fichier de ressource Pod utilisant un secret :

`cat pod-methode1.yaml`{{execute}}

Créer le pod :

`kubectl apply -f pod-methode1.yaml`{{execute}}

Voici quelques explications :
- `volumeMounts:` : montage du volume `creds` en lecture seule (`readOnly: true`) dans le conteneur sur le point de montage spécifié `/etc/creds`,
- `volumes:` : définition du volume `creds` basé sur le secret `mongo-creds` (`secretName: mongo-creds`).

Vérifier que le pod tourne :

`kubectl get pods`{{execute}}
  
Confirmer que le secret `mongoURL` est accessible dans le conteneur depuis le volume `/etc/creds` :

`kubectl exec -it with-secrets -- sh`{{execute}}

`ls -l /etc/mysecrets`{{execute}}

Quitter le pod :

`exit`{{execute}}

Supprimer le pod :

`kubectl delete pod with-secrets`{{execute}}

### Méthode 2

Créer un fichier de ressource Pod :

`cat pod-methode2.yaml`{{execute}}

Créer le pod :

`kubectl apply -f pod-methode2.yaml`{{execute}}

Voici quelques explications :
- `volumeMounts:` : montage du volume `/etc/creds` dans le container sur le point de montage `creds` en lecture seule (`readOnly: true`),
- `volumes:` : définition du volume `creds` basé sur le secret `service-creds` (`secretName: service-creds`) sur les répertoires où sont stockées les données (`path: service/auth` et `path: service/pass`)

Vérifier que le pod tourne :

`kubectl get pods`{{execute}}

Confirmer que les valeurs `username.txt` et `password.txt` sont accessibles sous le point de montage `/etc/creds` depuis l'intérieur du conteneur :

`kubectl exec -it with-secrets -- sh`{{execute}}

`cat /etc/mysecrets/service/username`{{execute}}

`cat /etc/mysecrets/service/password`{{execute}}

Quitter le pod :

`exit`{{execute}}

Supprimer le pod :

`kubectl delete pod with-secrets`{{execute}}

### Méthode des variables d'environnement

Créer un fichier de ressource Pod :

`cat pod-env-var.yaml`{{execute}}

Créer le pod :

`kubectl apply -f pod-env-var.yaml`{{execute}}

Voici des explications :
- `env:` : définition de la variable d'environnement `MONGO_URL` (`name: MONGO_URL`),
- `secretKeyRef:` : lecture de la valeur depuis la key `mongoURL` (`key: mongoURL`) définie dans le secret `mongo-creds` (`name: mongo-creds`).

Vérifier que le pod tourne :

`kubectl get pods`{{execute}}
          
Confirmer que la clé `mongoURL` est accessible depuis l'intérêt du conteneur :

`kubectl exec -it with-secrets -- sh`{{execute}}

Afficher la valeur de la variable d'environnement `MY_SECRET` :

`env |grep MY_SECRET`{{execute}}

Quitter le pod :

`exit`{{execute}}

Supprimer le pod :

`kubectl delete pod with-secrets`{{execute}}
