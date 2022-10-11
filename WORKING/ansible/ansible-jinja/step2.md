# Jinja dans Ansible

Pour utiliser Jinja dans un playbook Ansible :

- créer un template Ninja :

`cat <<EOF> template_simple.j2`{execute}

- créer un playbook :

`cat playbook_template_simple.yml`{execute}

Après exécution du playbook, lLe fichier `my_result` est généré :

`cat my_result`{execute}

Pour utiliser des expressions, utiliser `{{ .. }}`.

Pour utiliser des structures de contrôle, utiliser `{% ... %}`.

Pour ajouter des commentaires, utiliser `{# ... #}}`.
