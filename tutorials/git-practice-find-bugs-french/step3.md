## git bisect

Pour rechercher un commit qui a introduit une regression, vous pouvez faire une recherche binaire avec la commande `git bisect`.

Pour démarrer le mode bisect :
`git bisect start`{{execute}}

Pour spécifier le premier commit qui a le problème :
`git bisect bad HEAD~1`{{execute}}

Pour spécifier le dernier commit qui n'a pas le problème :
`git bisect good HEAD~5`{{execute}}

Git réalise alors un checkout d'un commit inclus entre les deux commits spécifiés :

Si le commit n'a pas le problème, taper :
`git bisect good`{{execute}}

Git réalise alors un checkout du commit se trouve au milieu des deux commits spécifiés.

Si le commit a toujours le problème, taper :
`git bisect bad`

Git affiche le hash du commit.
