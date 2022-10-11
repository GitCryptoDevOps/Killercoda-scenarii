### Les listes

Pour parcourir les éléments d'une liste, le format général est le suivant :

```
{% for <item_name> in <list_name> %}
  code ...
{% endfor %}
```

Par exemple :

`cat template_list.j2`{execute}

Voici un exemple complet :
- créer un fichier d'inventaire :

`cat playbook_list_hosts`{execute}

- créer un playbook :

`cat playbook_list.yml`{execute}

- créer un template :

`cat playbook_list.j2`{execute}
