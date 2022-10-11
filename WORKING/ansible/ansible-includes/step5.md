### Dynamic includes

Pour créer des `include` dynamiques, utilisez des variables dans les instructions `include` :

```
- include: "{{dbserver}}.yml"
```

Il est également possible d'utiliser ces `include` dynamiques pour passer des variables au playbook :

```
- include: myplaybook.yml param={{item}}
  with_items:
  - apples
  - oranges
  - {{favorite_fruit}}
```
