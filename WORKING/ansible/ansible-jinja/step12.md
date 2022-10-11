## Application de Jinja dans les playbooks

La structure clé/valeur de YAML n'utilise pas de guillemets pour spécifier des valeurs. Cependant, avec Jinja, vous devez en utiliser :

`cat playbook_jinja_avec_guillemets.yml`{execute}

Cependant, dans les templates Jinja, les guillemets ne sont pas nécessaires :

```
{% for host in servers_to_configure %}
  {{ host }}
{% endfor %}
```
