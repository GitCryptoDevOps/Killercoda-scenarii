To get help:

`docker run --rm -e REPORT=size.json -v $PWD/ansible:/app devopstestlab/git-sizer -h`{{execute}}

Get the Ansible repository source code:

`git clone https://github.com/ansible/ansible.git`{{execute}}

`ls -l`{{execute}}

To run git-sizer:

`docker run --rm -e REPORT=size.json -v $PWD/ansible:/app devopstestlab/git-sizer --verbose --json > my-size.json`{{execute}}

`cat my-size.json`{{execute}}
