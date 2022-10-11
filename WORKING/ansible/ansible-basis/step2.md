Pour créer une condition, utiliser `when`.

Par exemple, pour rebooter si la distribution est Debian :

```
  - name: "Reboot if Debian"
    command: /sbin/reboot -t now
    when: Ansible_os_family == "Debian"
```
