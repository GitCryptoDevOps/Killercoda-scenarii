`sudo useradd bob`{{execute}}

`sudo passwd bob`{{execute}}

=> Entrer un nouveau mot de passe

`sudo ls /etc/kubernetes`{{execute}}

`sudo usermod -aG wheel bob`{{execute}}

`su - bob`{{execute}}

`mkdir .kube`{{execute}}

`sudo cp /etc/kubernetes/admin.conf .kube/config`{{execute}}

`ls -l .kube/config`{{execute}}

`sudo chown bob:bob .kube/config`{{execute}}

`ls -l .kube/config`{{execute}}
