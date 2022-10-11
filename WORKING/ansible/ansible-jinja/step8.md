## Les conditions

Pour exprimer une condition "if-then-else" :

```
{% if condition %}
    execute_this
{% elif condition2 %}
    execute_this
{% else %}
    execute_this
{% endif %} 
```

Pour implémenter une condition dans un playbook Ansible :

`cat playbook_conditions.yml`{execute}

Exécuter ce playbook :

`ansible-playbook -i "localhost," -c local playbook_conditions.yml`{execute}

Pour implémenter une condition dans un template Jinja :

- créer le playbook :

`cat playbook_conditions_jinja.yml`{execute}

- créer le template :

`cat playbook_conditions_jinja.j2`{execute}
