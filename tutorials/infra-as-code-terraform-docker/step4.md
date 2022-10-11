We want to create a container based on the Docker image `devopstestlab/nginx-helloworld` publishing the port 80.

The Docker command would be: `docker run -p 80:80 devopstestlab/nginx-helloworld`.

In the `docker.tf` file, let's add a source of data for the Docker image.

Create the `docker.tf` file:

`vi docker.tf`{{execute}}

The data source simplify using images later:

```
data "docker_registry_image" "helloworld" {
  name = "devopstestlab/nginx-helloworld"
}
```{{copy}}

To use Docker images, let's use the `docker_image` resource. Let's add:

```
resource "docker_image" "helloworld" {
  name          = data.docker_registry_image.helloworld.name
  pull_triggers = [ data.docker_registry_image.helloworld.sha256_digest ]
}
```{{copy}}

Let's declare the `helloworld` container with the `docker_container` resource:

```
resource "docker_container" "helloworld" {
  name  = "helloworld"
  image = docker_image.helloworld.latest

  ports {
    internal = 80
    external = 80
    protocol = "tcp"
  }

  volumes {
    host_path      = "/var/run/docker.sock"
    container_path = "/tmp/docker.sock"
    read_only      = true
  }
}
```{{copy}}

The `devopstestlab/nginx-helloworld` Docker image allows to run a helloworld page on the port 80. So, we publish the port 80.

To access to the running containers, this container needs the share the Docker socket `/var/run/docker.sock` in read-only mode.
