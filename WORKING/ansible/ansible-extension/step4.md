Les faits (`facts`) fournissent des informations sur les systèmes qui ont exécuté un playbook ou une tâche.

Exemple :

```
ansible_facts_dict = {
    "changed" : true,
    "rc" : 5,
    "ansible_facts" : {
        "foo" : "bar",
    }
}

module.exit_json(changed=False, result="success",ansible_facts)
```
