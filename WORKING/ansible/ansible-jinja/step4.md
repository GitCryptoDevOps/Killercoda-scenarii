### La manipulation des chaînes de caractères

Pour utiliser une expression régulièrement dans une variable Jinja :

- convertir "ansible" en "able" :

`{{ 'ansible' | regex_replace('^a.*i(.*)$', 'a\\1') }}`

- convertir "foobar" en "bar" :

`{{ 'foobar' | regex_replace('^f.*o(.*)$', '\\1') }}`

- convertir "localhost:80" en "localhost, 80" en utilisant des groupes nommés :

`{{ 'localhost:80' | regex_replace('^(?P<host>.+):(?P<port>\\d+)$', '\\g<host>, \\g<port>') }}`

- convertir '^f.*o(.*)$' en '\^f\.\*o\(\.\*\)\$' :

`{{ '^f.*o(.*)$' | regex_escape() }}`

Pour convertir des variables Jinja :
- en majuscules : `{{ var|upper }}`
- en minuscules : `{{ var|lower }}`
