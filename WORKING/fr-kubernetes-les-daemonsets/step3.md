Cependant, Daemonset ne s'exécute que sur les noeuds qui n'ont pas de `taint`.

Par exemple, pour que les DaemonSet ne s'exécutent pas sur les noeuds masters, les noeuds masters ont le `taint` suivant :

```
taints:
  - effect: NoSchedule
    key: node-role.kubernetes.io/master
```

Pour pouvoir tourner sur un noeud qui a un `taint`, le pod doit spécifier des tolérances (`tolerations`).

```
    spec:
      tolerations: 
      - effect: NoSchedule
        operator: Exists      
```
