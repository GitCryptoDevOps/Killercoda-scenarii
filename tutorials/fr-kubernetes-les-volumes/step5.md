`hostPath` permet de monter une ressource de la machine hôte à un pod. Ce type de volume est utilisé pour :
- surveiller la machine hôte,
- communiquer par socket avec le daemon de Docker.

Il y a plusieurs types de `hostPath` :
- `Directory`,
- `File`,
- `Socket`,
- `CharDevice`,
- `BlockDevice`.

Créer un fichier de ressource Pod utilisant un PV de type `hostPath` :

`cat hostpath-pod.yaml`{{execute}}

Créer le Pod utilisant le PV :

`kubectl apply -f hostpath-pod.yaml`{{execute}}

Voici quelques explications :
- `volumeMounts:` : le volume `data` (`name: data`) est basés sur le répertoire `/data-db` (`mountPath: /data/db`) de l'hôte, monté dans le répertoire `/data/db` du conteneur `mongo`;
- `volumes:` : définition du volume `data` (`name: data`) de type `hostPath` (`hostPath:`).

Confirmer que les volumes sont visibles sur l'hôte :

`ls -l /volumes/db/`{{execute}}
