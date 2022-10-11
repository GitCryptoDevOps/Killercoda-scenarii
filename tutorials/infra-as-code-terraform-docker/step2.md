Ensure that the system is up to date:

`sudo apt-get update`{{execute}

Install the packages `gnupg`, `software-properties-common`, and `curl`:

`sudo apt-get install -y gnupg software-properties-common curl`{{execute}}

Add the HashiCorp GPG key:

`curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -`{{execute}}

Add the official HashiCorp Linux repository:

`sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"`{{execute}}

Update to add the repository:

`apt-get update`{{execute}}

Install the Terraform CLI:

`sudo apt-get install terraform`{{execute}}
