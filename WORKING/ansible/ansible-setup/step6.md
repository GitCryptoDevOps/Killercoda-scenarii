## Automatisation via Vagrant

`mkdir -p ~/helloVagrantAnsible`{execute}

`cd ~/helloVagrantAnsible`{execute}

`vagrant init ubuntu/trusty64`{execute}

`cat Vagrantfile`{execute}

Créer le playbook utilisé par Vagrant :

`cat playbook_vagrant.yml`{execute}

Démarrer la VM :

`vagrant up`{execute}
