Certaines tâches peuvent nécessiter de nombreux paramètres. Dans ce cas, ces paramètres peuvent être écrits sur plusieurs lignes en utilisant le caractère :
- `|` (`literal_block`) :
  - Les sauts de ligne sont conservés.
  - L'indentation est supprimée sauf pour les lignes qui ont un excès d'indentation.
- `>` (`folded_style`)  :
  - Les nouvelles lignes sont remplacées par un seul espace.
  - Les lignes vides sont converties en caractère de nouvelle ligne.
  - Les lignes avec une indentation supérieure conservent leurs nouvelles lignes : ce texte apparaît sur deux lignes.

Exemple avec `>` :

`cat playbook_folded_style.yml`{execute}

Ce playbook devient :

```
tasks:
  - name: Can we use Ansible to Install nginx web server
    apt: pkg=nginx state=installed update_cache=true
```
