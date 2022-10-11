Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

Sur le Cloud, les instances qui devraient tourner dans le même domaien broadcast peuvent tourner sur des réseaux physiques différents.

Pour s'assurer que la communication Pod à Pod puisse se faire, on utilise des overlays réseau.

Il est créé par un plugin réseau qui crée des interfaces tunnel et crée la table de routage. Exemple : flannel, weave, ...
