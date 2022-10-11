## Le plugin lookup

Le plugin `lookup` permet de récupérer des informations et des jeus de données à partir de sources de données externes. Il est à la base du concept d'itération d'Ansible.

`cat plugin_lookup.py`{execute}

Le plugin doit se trouver dans la classe `LookupModule`.

La méthode `run` doit être définie.

Pour appeler ce plugin :

`cat plugin_lookup_call.yml`{execute}
