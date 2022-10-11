## Developing Hello World Ansible Module

`cat ./library/helloworld.py`{execute}

Mettre en place l'environnement de test des modules Ansible :

`git clone git://github.com/ansible/ansible.git`{execute}

`source ansible/hacking/env-setup`{execute}

Tester le module localement :

`ansible/hacking/test-module -m ./library/mymodule.py`{execute}

Maintenant, ajoutons le code pour lire des paramètres depuis un playbook Ansible :

`cat ./library/mymodule_with_read.py`{execute

Pour utiliser ce module depuis un playbook :

`cat my_playbook.yml`{execute}

Exécuter ce playbook :

`ansible-playbook myplaybook.yml -i localhost -v`{execute}
