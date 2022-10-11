Créer un couple de clés public / privée :

`openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out cert.pem`{{execute}}

Créer un Secret à partir de ces clés :

`kubectl create secret tls mykey --cert cert.pem --key key.pem`{{execute}}

Les clés `tls.crt` et `tls.key` sont maintenant encodées en base64.

Récupérer ces clés :

`kubectl get secret mykey -o yaml`{{execute}}
