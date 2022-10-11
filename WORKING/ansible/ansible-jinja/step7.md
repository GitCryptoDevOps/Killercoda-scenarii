Ansible propose de nombreux filtres :

| Filtre | Description | Exemple |
|-|-|-|
| `to_json` | Convertit les données en format JSON | `{{ some_variable | to_json }}` |
| `to_yaml` | Convertit les données en format YAML | `{{ some_variable | to_yaml }}` |
| `mandatory` | Rend la déclaration de variable et son initialisation obligatoires | `{{ variable | mandatory }}` |
| `default value` | Spécifie une valeur par défaut à la variable | `{{ some_variable | default(5) }}` |
| `min|max` | Retourne la valeur minimale ou maximale d'un tableau | `{{ [3, 4, 2] | max }}`<br>`{{ [3, 4, 2] | min }}` |
| `random` | Retourne un élément aléatoire d'une liste | `"{{ ['a','b','c']|random }}"` |
| `random` | Retourne un nombre aléatoire | `"{{ 59 |random}} * * * * root /script/from/cron"` |
| `random` | Retourne un nombre aléatoire en spécifiant une valeur de départ | `"{{ 59 |random(seed=inventory_hostname) }} * * * * root /script/from/cron"` |
| `shuffle` | Génère une nouveau liste aléatoire à partir d'une liste déjà existante | `{{ ['a','b','c']|shuffle }}` |
| `log` | Application la fonction de mathématique `log` | `{{ myvar | log }}`<br>`{{ myvar | log(10) }}` |
| `root` | Retourne la racine carrée d'un nombre | `{{ myvar | root }}`<br>`{{ myvar | root(5) }}` |
| `ipv4`, `ipv6` | Teste si une chaîne de caractères est une version spécifique d'IP | `{{ myvar | ipv4 }}`<br>`{{ myvar | ipv6 }}` |
| `quote` | Entoure l'expression évalue de quillemets ("quotes") | `- shell: echo {{ string_value | quote }}` |
| `join` | Joint les éléments d'une liste en une seule chaîne | `{{ list | join(" ") }}` |
| `basename` | Retourne le nom du fichier à partir d'un chemin complet | `{{ path | basename }}` |
| `win_basename` | Comme `basename` mais pour Windows | `{{ path | win_basename }}` |

Pour plus d'informations : http://docs.ansible.com/ansible/playbooks_filters.html#filters-for-formatting-data
