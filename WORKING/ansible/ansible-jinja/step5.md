Il est possible de réaliser des opérations arithmétiques dans Jinja :

```
var: 1
incremented_var: "{{ var + 1 }}"
```

Les opérations suivantes peuvent être réalisées :

- adition (`+`) : `{{ var + 1 }}`
- soustraction (`-`) : `{{ var - 1 }}`
- multiplication (`*`) : `{{ var * 2 }}`
- division (`/`) : `{{ var / 2 }}`
