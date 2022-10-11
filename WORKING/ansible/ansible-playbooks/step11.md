### Ga gestion des services

Pour démarrer le service `httpd` s'il n'est pas déjà démarré :

```
- service:
    name: httpd
    state: started
```

Pour arrêter le service `httpd` s'il est déjà démarré :

```
- service:
    name: httpd
    state: stopped
```

Pour redémarrer le service `httpd` :

```
- service:
    name: httpd
    state: restarted
```

Pour rechercher le service `httpd` :

```
- service:
    name: httpd
    state: reloaded
```

Pour activer le service `httpd` sans toucher au statut `running` :

```
- service:
    name: httpd
    enabled: yes
```

Pour démarrer le service `foo` basé sur le process `/usr/bin/foo` déjà démarré :

```
- service:
    name: foo
    pattern: /usr/bin/foo
    state: started
```

Pour redémarrer le service `network` pour l'interface `eth0` :

```
- service:
    name: network
    state: restarted
    args: eth0
```
