## Créer le fichier de configuration de Packer

`cat ubuntu.json`{{execute}}

Créer le script install_python.sh pour installer Python :

`cat install_python.sh`{{execute}}

Créer le playbook Ansible :

`cat playbook.yaml`{{execute}}

`packer build ubuntu.json`{{execute}}

Vérifions que l'image d'origine ubuntu:16.04 n'intègre pas la commande git :

`docker run -it ubuntu:16.04 sh -c "git"`{{execite}}

Vérifions que la nouvelle image intègre la commande git :

`docker run -it my-image:1.0 -c "git --version"`{{execute}}
