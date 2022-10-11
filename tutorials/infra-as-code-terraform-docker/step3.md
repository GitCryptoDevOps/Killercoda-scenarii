Let's create a Terraform provider.

First, open a `provider.tf` file:

`vi provider.tf`{{execute}}

Add this content:

```
terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
    }
  }
}

provider "docker" {
  host = "unix:///var/run/docker.sock"
}
```{{copy}}

As we changed the provider, we have to init Terraform:

`terraform init`{{execute}}
