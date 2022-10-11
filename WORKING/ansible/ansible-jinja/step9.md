## Les boucles

Pour créer une boucle "for", il y a deux syntaxes possibles :
- la première :

`cat playbook_while.yml`{execute}

- la seconde :

```
{% for id in range(201,221) %}  
192.168.0.{{ id }} client{{ "%02d"|format(id-200) }}.vpn  
{% endfor %}
```
