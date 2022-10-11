## Ansible et Docker

Ansible fournit plusieurs modules pour Docker :
- `docker_service` : utilise les fichiers Docker Compose sur un démon Docker ou sur Swarm;
- `docker_container` : gère le cycle de vie des conteneurs (création, démarrage, mise à jour, arrêt, suppression);
- `docker_image` : gère les images;
- `docker_image_facts` : retourne des informations sur les images sur un hôte sous forme de fait (`facts`);
- `docker_login` : s'authentifie auprès de Docker Hub ou d'un autre Docker Registry et met à jour le fichier de configuration de Docker Engine;
- `docker` : crée dynamiquement un inventaire des conteneurs disponibles à partir d'hôtes Docker.

Pour faire une build d'une image Docker :

`cat module_docker_build_image.yml`{execute}

Cela peut aussi être fait en utilisant une ligne de commande :

`cat module_docker_build_image_with_command_line.yml`{execute}

Pour faire un build d'un conteneur et l'exécuter :

`cat module_docker_build_and_run.yml`{execute}
