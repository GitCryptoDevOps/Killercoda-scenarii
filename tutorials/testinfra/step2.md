`mkdir tests`{{execute}}

`cat tests/test_remote.py`{{execute}}

`docker run -v $PWD/tests:/app testinfra -v --hosts='ssh://node1,ssh://node2' test_remote.py`{{execute}}

The `--hosts` flag accepts a list of hosts with a connection scheme (ssh would use `ssh://hostname` for example).

Testinfra can consume an SSH configuration file to determine what hosts to connect to.
