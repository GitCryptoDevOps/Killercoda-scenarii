To get help:

`docker run --rm devopstestlab/git-big-picture git-big-picture -h`{{execute}}

Let's run git-big-picture:

`docker run --rm -v $PWD/ansible:/data devopstestlab/git-big-picture git-big-picture -o graph.png`{{execute}}
