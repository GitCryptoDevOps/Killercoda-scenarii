Pour conditionner l'exécution d'une tâche en fonction de si une variable est définie ou existe, utiliser `when`.

Par exemple, pour afficher `Hello World` si `is_enabled` est défini ou existe :

```
vars:
  is_enabled: true
tasks:
    - name: "Hello world"
      shell: echo "Hello world"
      when: is_enabled
```
