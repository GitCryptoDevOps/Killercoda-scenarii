# Les modules de package

Ansible supporrte les gestionnaires de package du système d'exploitation et des langages

## Le module apt

Le module apt permet de gérer les packages sur Debian et Ubuntu :
- installation d'un package,
- suppression d'un package,
- mise à jour d'un package,
- mise à jour de l'index.

`aptitude`, `python-apt` et `python3-apt` doivent être installés sur l'hôte distant.

Installons les packages aha et htop :

```
- name: install some packages on a Debian OS
      apt:
          name: "{{ pkg }}"
          state: latest
          update_cache: yes
      vars:
          pkg:
          - aha
          - htop
```

Exemples :

```
- name: Update repositories cache and install "foo" package
  apt:
    name: foo
    update_cache: yes

- name: Remove "foo" package
  apt:
    name: foo
    state: absent

- name: Install the package "foo"
  apt:
    name: foo
    state: present

- name: Install the version '1.00' of package "foo"
  apt:
    name: foo=1.00
    state: present

- name: Update the repository cache and update package "nginx" to latest version using default release squeeze-backport
  apt:
    name: nginx
    state: latest
    default_release: squeeze-backports
    update_cache: yes

- name: Install latest version of "openjdk-6-jdk" ignoring "install-recommends"
  apt:
    name: openjdk-6-jdk
    state: latest
    install_recommends: no

- name: Update all packages to the latest version
  apt:
    upgrade: dist

- name: Run the equivalent of "apt-get update" as a separate step
  apt:
    update_cache: yes

- name: Only run "update_cache=yes" if the last one is more than 3600 seconds ago
  apt:
    update_cache: yes
    cache_valid_time: 3600

- name: Pass options to dpkg on run
  apt:
    upgrade: dist
    update_cache: yes
    dpkg_options: 'force-confold,force-confdef'

- name: Install a .deb package
  apt:
    deb: /tmp/mypackage.deb

- name: Install the build dependencies for package "foo"
  apt:
    pkg: foo
    state: build-dep

- name: Install a .deb package from the internet.
  apt:
    deb: https://example.com/python-ppq_0.1-1_all.deb
```

## Le module dnf

Le module dnf contrôle le gestionnaire de package DNF de la famille Red Hat (Red Hat, Fedora, CentOS) :
- installation,
- mise à jour,
- suppression,
- recherche.

`python`, `python-dnf` et `dnf` doivent être installés.

Installons le package htop :

```
- name: install a package using dnf
      dnf:
          name: htop
          state: latest
```

## Le module yum

Le module yum permet de gérere rle gestionnaire de package d'origine de Red Had.

Activons un repository et installlons un outil depuis ce repository :

```
- name: add epel repo using yum
      yum:
           name: https://dl.fedoraproject.org/pub/epel
           /epel-release-latest-7.noarch.rpm
          state: present  
        - name: install ansible using yum
          yum:
           name: ansible
           state: present
```

Exemples :

```
- name: install the latest version of Apache
  yum:
    name: httpd
    state: latest
- name: remove the Apache package
  yum:
    name: httpd
    state: absent
- name: install the latest version of Apache from the testing repo
  yum:
    name: httpd
    enablerepo: testing
    state: present
- name: install one specific version of Apache
  yum:
    name: httpd-2.2.29-1.4.amzn1
    state: present
- name: upgrade all packages
  yum:
    name: '*'
    state: latest
- name: install the nginx rpm from a remote repo
  yum:
    name: http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm
    state: present
- name: install nginx rpm from a local file
  yum:
    name: /usr/local/src/nginx-release-centos-6-0.el6.ngx.noarch.rpm
    state: present
- name: install the 'Development tools' package group
  yum:
    name: "@Development tools"
    state: present- name: install the 'Gnome desktop' environment group
  yum:
    name: "@^gnome-desktop-environment"
    state: present
- name: List Ansible packages and register result to print with debug later.
  yum:
    list: ansible
  register: result
```

## Le module homebrew

Le module homebrew permet d'utiliser le gestionnaire de package Homebrew pour macOS X.

Retirons le package htop sur un macOS X :

```
- name: remove a package using homebrew
      homebrew:
         name: htop
         state: absent
         update_homebrew: yes
```

## Le module pip

Le module pip (PypI Python) permet d'utiliser le gestionnaire de package Python PIP.

PyPI doit être installé sur les hôtes distants.

Installons les libraries Python numpy et httpie :

```
- name: install a python library from the default 
   repo
      pip:
         name: numpy
         version: 0.3
    - name: install a python library from a github
      pip:
         name: https://github.com/jakubroztocil/httpie
         /archive/master.tar.gz
```

## Le module cpanm

Le module cpanm (CPAN - Comprehensive Perl Archive Network) permet d'utiliser le gestionnaire de package de Perl.

`cpanminus` doit être installé sur l'hôte distant.

Exemple :

```
- name: install a Perl library on a Linux host
      cpanm:
         name: IO
```
