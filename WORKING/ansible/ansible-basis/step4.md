Pour exécuter une tâche quand un opérateur n'est pas défini, utiliser `is undefined` :

```
tasks:
  - shell: echo "The operator has not been set"
    when: myvar is undefined
```
