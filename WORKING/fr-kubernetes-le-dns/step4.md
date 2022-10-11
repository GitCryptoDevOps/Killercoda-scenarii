Pour pouvoir accéder à un pod, une application passe par un service.

L'entrée DNS utilise le nom du service.

Service peut avoir deux comportements différents pour DNS :
- normal : le service dispose de sa propre adresse IP;
- "sans tête" ("headless") : le service utilise l'adresse IP du pod.
