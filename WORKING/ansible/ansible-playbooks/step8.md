## Les modules

Pour plus d'informations : http://docs.ansible.com/ansible/modules_by_category.html

### Gestion des packages avec yum

Installer la dernière version du package Apache :

```
- name: install the latest version of Apache
  yum:
    name: httpd
    state: latest
```

Supprimer le package Apache :

```
- name: remove the Apache package
  yum:
    name: httpd
    state: absent
```

Installer la dernière version du package Apache depuis le référentiel `testing` :

```
- name: install the latest version of Apache from the testing repo
  yum:
    name: httpd
    enablerepo: testing
    state: present
```

Installer une version spécifique d'Apache :

```
- name: install one specific version of Apache
  yum:
    name: httpd-2.2.29-1.4.amzn1
    state: present
```

Mettre à jour tous les packages :

```
- name: upgrade all packages
  yum:
    name: '*'
    state: latest
```

Installer le rpm nginx depuis un référentiel distant :

```
- name: install the nginx rpm from a remote repo
  yum:
    name: http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm
    state: present
```

Installer le rpm nginx depuis un fichier local :

```
- name: install nginx rpm from a local file
  yum:
    name: /usr/local/src/nginx-release-centos-6-0.el6.ngx.noarch.rpm
    state: present
```

Installer le groupe de package "Development tools" :

```
- name: install the 'Development tools' package group
  yum:
    name: "@Development tools"
    state: present- name: install the 'Gnome desktop' environment group
  yum:
    name: "@^gnome-desktop-environment"
    state: present
```

Lister les packages et enregistrer le résultat pour l'afficher plus tard :

```
- name: List Ansible packages and register result to print with debug later.
  yum:
    list: ansible
  register: result
```

### Gestion des packages avec apt-get et dpkg

`apt-get` repose sur `dpkg`. Ansible supporte les deux gestionnaires de package.

Mettre à jour le cache des référentiels et installer le package "foo" :

```
- name: Update repositories cache and install "foo" package
  apt:
    name: foo
    update_cache: yes
```

Supprimer le package "foo" :

```
- name: Remove "foo" package
  apt:
    name: foo
    state: absent
```

Installer le package "foo" :

```
- name: Install the package "foo"
  apt:
    name: foo
    state: present
```

Installer la version "1.00" du package "foo" :

```
- name: Install the version '1.00' of package "foo"
  apt:
    name: foo=1.00
    state: present
```

Mettre à jour le cache de référentiel et mettre à jour le package "nginx" en utilisant la release "squeeze-backport" :

```
- name: Update the repository cache and update package "nginx" to latest version using default release squeeze-backport
  apt:
    name: nginx
    state: latest
    default_release: squeeze-backports
    update_cache: yes
```

Installer la dernière version de "openjdk-6-jdk" en ignorant "install-recommands" :

```
- name: Install latest version of "openjdk-6-jdk" ignoring "install-recommends"
  apt:
    name: openjdk-6-jdk
    state: latest
    install_recommends: no
```

Mettre à jour tous les packages :

```
- name: Update all packages to the latest version
  apt:
    upgrade: dist
```

Exécuter l'équivalent de "apt-get update" dans une étape séparée :

```
- name: Run the equivalent of "apt-get update" as a separate step
  apt:
    update_cache: yes
```

N'exécuter l'action "update_cache=yes" que si la dernière date de plys de 3600 secondes :

```
- name: Only run "update_cache=yes" if the last one is more than 3600 seconds ago
  apt:
    update_cache: yes
    cache_valid_time: 3600
```

Passer les options à dpkg :

```
- name: Pass options to dpkg on run
  apt:
    upgrade: dist
    update_cache: yes
    dpkg_options: 'force-confold,force-confdef'
```

Installer un pacakge ".deb" :

```
- name: Install a .deb package
  apt:
    deb: /tmp/mypackage.deb
```

Installer les dépendences de build pour le package "foo" :

```
- name: Install the build dependencies for package "foo"
  apt:
    pkg: foo
    state: build-dep
```

Installer un package ".deb" depuis Internet :

```
- name: Install a .deb package from the internet.
  apt:
    deb: https://example.com/python-ppq_0.1-1_all.deb
```
