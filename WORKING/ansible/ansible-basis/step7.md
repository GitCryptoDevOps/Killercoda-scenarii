Pour utiliser une condition dans un rôle :

```
- hosts: all
  roles:
     - { role: centos_config, when: Ansible_os_family == 'CentOS' }
```
