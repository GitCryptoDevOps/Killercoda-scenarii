Pour créer un itérateur s'arrêtant à un nombre spécifié, utiliser `when` et `with_items` :

```
tasks:
  - command: echo {{ item }}
    with_items: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    when: item > 7
```
