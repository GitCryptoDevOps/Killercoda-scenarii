variable "tag" {
  type = string
}

source "docker" "ubuntu" {
  commit = true
  image  = "ubuntu:16.04"
}

build {
  sources = ["source.docker.ubuntu"]

  provisioner "shell" {
    script = "install_python.sh"
  }
  provisioner "ansible" {
    playbook_file = "playbook.yaml"
  }
  post-processor "docker-tag" {
    repository = "my-image"
    tag        = [ var.tag ]
  }
}
