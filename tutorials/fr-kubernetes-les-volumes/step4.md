## Le type de PV EmptyDir

Le volume `EmptyDir` est un volume qui suit le cycle de vie d'un pod. Il peut être utilisé sur un disque RAM, du type `tmpfs`. Le point de montage peut donc être différent dans chaque container d'un pod.

A la création, il est vide.

En cas de crash du conteneur, le volume n'est pas supprimé.

Créer un fichier de ressource Pod basé sur Mongo utilisant un volume de type `emptyDir` :

`cat emptydir-pod.yaml`{{execute}}

Créer le Pod :

`kubectl apply -f emptydir-pod.yaml`{{execute}}

Voici quelques explications :
- `volumeMounts:` : le volume `data` (`name: data`) est monté dans le conteneur sur `/data/db` (`mountPath: /data/db`);
- `volumes:` : définition un volume `data` (`name: data`) de type `emptyDir` (`emptyDir: {}`).

Confirmer que le pod tourne :

`kubectl get pods`{{execute}}

### Ajout de données à la base de données

Lancer un shell interactif dans le conteneur `mongo` :

`kubectl exec -it mongo -- bash`{{execute}}

Entrer dans la base de données Mongo :

`mongo`{{execute}}

Insérer des données :

`use test`{{execute}}

`db.k8s.insert({ok: 1})`{{execute}}

`exit`{{execute}}

Terminer le process `mongod` :

`kill 1`{{execute}}

Le conteneur se termine. `kubectl` détecte l'arrêt de ce conteneur et en lance un nouveau.

### Confirmation que les données sont toujours présentes

Lancer un shell interactif dans le conteneur `mongo` :

`kubectl exec -it mongo -- bash`{{execute}}

Entrez dans Mongo :

`mongo`{{execute}}

Afficher le contenu de la base de données :

`use test`{{execute}}

`db.k8s.find()`{{execute}}

Le nouveau conteneur affiche bien les données.

Quitter Mong :

`exit`{{execute}}

Quitter le pod :

`exit`{{execute}}

### Suppression du pod

Supprimer le pod `mongo` :

`kubectl delete pod mongo`{{execute}}
