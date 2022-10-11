These are all the connection types that Testinfra supports:
- local
- paramiko (an SSH implementation in Python)
- docker
- ssh
- salt
- ansible
- Kubernetes (via kubectl)
- winrm
- LXC

`docker run -v $PWD/tests:/app testinfra pytest --help`{{execute}}
