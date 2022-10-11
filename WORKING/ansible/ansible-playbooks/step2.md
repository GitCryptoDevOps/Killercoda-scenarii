# Les bases

## Le playbook

YAML est un langage de base utilisé pour créer les playbooks.

Jinja, tout à fait adapté à YAML, permet au développeur d'utiliser des conditions, des boucles et des variables.

La syntaxe de base est : `{{my_var}}`.

Voici un exemple :

`cat playbook_with_jinja.yml`{execute}

Au début des fichier, vous pouvez ajouter `---` pour indiquer le début du fichier YAML :

`cat playbook_simple.yml`{execute}

Il est aussi possible d'ajouter `...` pour terminer le fichier YAML.

La section `hosts` liste les groupes de l'inventaire à cibler.

L'inventaire représente les hôtes auxquels Ansible peut se connecter et exécuter le playbook.

Les sections `vars` et `vars_file` des playbooks contiennent des valeurs de variable pouvant être utilisées dans un playbook. Ces données apparaissent sous forme de faits (`facts`).
