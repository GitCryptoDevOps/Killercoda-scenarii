Le job planifié permet de lancer un job à un moment précis.

Le format est le même format que celui de la commande `cron` : `minutes heures jour mois annee` (`0 9 12 11 *`).

Pour spécifier une fréquence, utiliser `/`.

Créer un fichier de ressource CronJob lançant un pod toutes les cinq minutes :

`cat cronjob.yaml`{{execute}}

Créer le job :

`kubectl apply -f cronjob.yaml`{{execute}}

Voici quelques explications :
- `spec.concurrencyPolicy` : spécifie un comportement si le job précédent n'est pas terminé mais que le job suivant est planifié pour bientôt :
  - `Allow` : permet l'exécution du job suivant;
  - `Forbid` : passe à l'exécution du job suivant;
  - `Replace` : supprime le job courant puis exécute le job suivant.

Deux autres paramètres sont importants :
- `spec.successfulJobsHistoryLimit` : spécifie le nombre de jobs réussis à conserver (3 par défaut);
- `spec.failedJobsHistoryLimit` : spécifie le nombre de jobs échoués à conserver (1 par défaut).

Afficher la liste des jobs :

`kubectl get jobs`{{execute}}

Pour arrêter le `CronJob`, il faut le supprimer :

`kubectl delete cronjob cronjob`{{execute}}
