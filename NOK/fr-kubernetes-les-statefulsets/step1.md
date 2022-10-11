Attendre que Kubernetes soit initialisé : `./wait-for-kubernetes.sh`{{execute T1}}

StatefulSet a les différences suivantes par rapport au déploiement :
- il garantit l'ordre de lancement des pods;
- chaque pod a un volume persistent.

Le StatefulSet permet de s'assurer qu'aucun pod n'est redondant durant la mise à jour.

`.spec.updateStrategy.type` permet de définir la stratégie de mise à jour :
- `OnDelete` : les pods ne sont mis à jour qu'après avoir été supprimés manuellement,
- `RollingUpdate` :
  - Les pods sont supprimés et recréés dans l'ordre inverse afin de respecter l'ordre.
  - `.spec.updateStrategy.rollingUpdate.partition` permet de spécifier la partition, utilisée pour sélectionner les pods qui seront mis à jour.
  - Avec une partition de 1, seuls deux pods sont mis à jour.
  - Cela est très intéerssant pour les tests canari.
