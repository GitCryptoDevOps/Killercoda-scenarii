# Resolve cherry pick conflict

Le cherry pick peut entraîner des conflits.

Pour abandonner et revenir en arrière, utiliser la commande `git cherry-pick --abort`.

Pour réaliser un cherry-pick sur la branche `mybranch2` :

`git cherry-pick mybranch2~1`{{execute}}

`git status`{{execute}}

`git diff`{{execute}}

`git checkout --theirs myfile1.txt`{{execute}}
