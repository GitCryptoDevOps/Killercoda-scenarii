Il est possible d'ajouter des conditions avec les registres :

- une comparaison `null` ou `empty` :

`when: <registername>.stdout == ""`

- tester sir une variable est enregistrée :

`with_items: varfoo.stdout.find("{{bar}}") > 0`

Pour itérer sur le contenu du registre :

`with_items: "{{ home_dirs.stdout_lines }}"`

ou :

`with_items: "{{ home_dirs.stdout.split() }}"`

Par exemple pour utiliser le contenu d'un registre comme liste :

`cat register_as_list.yml.md`{execute}
