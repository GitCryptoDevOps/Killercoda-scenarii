## Ansible

`cat hosts`{{execute}}

`pytest --connection=ansible --ansible-inventory=hosts test_remote.py`{{execute}}

To use a group nginx :

`pytest --hosts='ansible://nginx' --connection=ansible --ansible-inventory=hosts test_remote.py`{{execute}}

The host fixture:

```
import testinfra

host = testinfra.get_host('local://')
node_file = host.file('/tmp')
node_file.is_directory
node_file.user
```

These are a couple dozen of attributes available, these are some of the most used ones:
- `host.ansible`: Full access to any of the Ansible properties at runtime, like hosts, inventory, and vars.
- `host.addr`: Network utilities, like checks for IPV4 and IPV6, is host reachable, is host resolvable.
- `host.docker`: Proxy to the Docker API, allows interacting with containers, check if they are running.
- `host.interface`: Helpers for inspecting addresses from a given interface
- `host.iptables`: Helpers for verifying firewall rules as seen by host.iptables
- `host.mount_point`: Check mounts, filesystem types as they exist in paths, and mount options.
- `host.package`: Very useful to query if a package is installed and at what version
- `host.process`: Check for running processes
- `host.sudo`: Allows to execute commands with host.sudo or as a different user
- `host.system_info`: All kinds of system metadata, like distribution version, release, and codename.
- `host.check_output`: Run a system command and check its output if runs successfully, can be used in combination with host.sudo
- `host.run`: Run a command, allowing to check the return code, host.stderr, and host.stdout
- `host.run_expect`: Verify that the return code is as expected
