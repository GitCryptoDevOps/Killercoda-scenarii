## Les différents types de plugin

### Le plugin Action

`action_plugins` permet d'ajouter une nouvelle fonctionnalité à un module existant. Ils tournent sur le master au lieu du target.

`cat plugin_action.py`{execute}

Le nom de la classe doit être `ActionModule`.

Le plugin doit inclure les méthodes `__init__` et `run`.

Pour utiliser ce plugin :

`cat plugin_action_call.yml`{execute}
