# git revert

Pour inverser (donc annuler) plusieurs commits à la fois, vous pouvez utiliser `~`. Par exemple, `HEAD~2` faire référence à deux commits depuis la tête (HEAD). `...` permet de désigner un intervalle entre deux commits.

Pour inverser les commits entre HEAD et HEAD~2 :

`git revert HEAD...HEAD~2`{{execute}}

Pour avoir un aperçu rapide de l'historique des commits :

`git log --oneline`{{execute}}

Pour ne pas ouvrir l'éditeur :

git revert HEAD...HEAD~2 --no-edit
