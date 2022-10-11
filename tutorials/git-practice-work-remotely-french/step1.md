## Git Remote

Les référentiels distants permettent de partager les modifications sur le référentiel.
Ils se trouvent en général sur un serveur de build ou sur un site Web du type Github.com.

Leur adresse est sous la forme :
- https://github.com/XXX/YYY.git pour l'accès par une URL HTTPS,
- git@github.com:/XXX/YYY.git pour l'accès par connexion SSH.

Pour ajouter cet emplacement distant avec le nom origin, utiliser :
`git remote add origin /s/remote-project/1`{{execute}}

La commande `git clone` effectue également automatiquement cet ajout.
