Pour itérer sur les hôtes d'un invzntaire, utiliser `play_hosts`.

`cat hosts`{execute}

Par exemple, afficher les hôtes du groupe `webserver` :

`cat play_hosts.yml`{execute}

Pour afficher l'inventaire en utilisant le groupe `webserver` :

```
- debug:
    msg: "{{ item }}"
  with_items:
    - "{{ groups['webserver'] }}"
```

Pour cibler seulement le groupe `dbserver` :

```
with_items:
  - "{{ groups['dbserver'] }}"
```
