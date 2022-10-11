Créer un fichier de ressource Pod :

`cat pod-tls.yaml`{{execute}}

Créer le pod :

`kubectl apply -f pod-tls.yaml`{{execute}}

Voici quelques explications :
- `volumeMounts:` : définit le montage du volume `tls` dans le conteneur sur le point de montage `/etc/ssl/certs`;
- `volume:` : définit le volume `tls` sur le secret `domain-pki` (`secretName: domain-pki`).
  
Confirmer l'accès au secret depuis le conteneur :

`kubectl exec -it with-secrets -- sh`{{execute}}

`ls -l /etc/ssl/certs`{{execute}}

Quitter le pod :

`exit`{{execute}}

Supprimer le pod :

`kubectl delete pod with-secrets`{{execute}}
