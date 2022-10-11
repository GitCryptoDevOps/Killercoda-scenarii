`sudo useradd -G wheel anna`{{execute}}

`sudo passwd anna`{{execute}}

`openssl genrsa -out anna.key 2048`{{execute}}

`openssl req -new -key anna.key -out anna.csr -subj "/CN=anna/O=staff"`{{execute}}

`sudo openssl x509 -req -in anna.csr -CA /etc/kubernetes/pki/ca.crt -CAkey /etc/kubernetes/pki/ca.key -CAcreateserial -out anna.crt -days 180`{{execute}}

`ls`{{execute}}
