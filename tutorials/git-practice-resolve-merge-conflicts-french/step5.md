# git rebase

Pour éviter de générer une multitude de messages de commit de fusion, vous pouvez utiliser `git rebase` au lieu de `git merge`.

`git rebase` déroule les changements réalisés et rejoue les changements dans la branche en appliquant les changements comme s'ils étaient tous sur la même branche. L'avantage est de rendre l'historique plus clair. L'inconvénient est que les hash ids sont modifiés. Les commits qui ont été rendus publiques devraient donc pas être rebasés.
