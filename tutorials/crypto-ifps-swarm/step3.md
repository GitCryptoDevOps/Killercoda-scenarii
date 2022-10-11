# Demo IPFS

On https://dist.ipfs.io/#go-ipfs, download IPFS for your platform.

`tar –zxvf go-ipfs_v0.4.13_darwin-amd64.tar.gz`{{execute}}

`cd go-ipfs`{{execute}}

`sudo install.sh`{{execute}}

Enter the passphrase.

`ipfs version`{{execute}}

Initialize a local repo:

`ipfs init`{{execute}}

Run the displayed URL :

`ipfs cat /ipfs/<DIRECTORY_HASH>/readme`{{execute}}

To display objects list :

`ipfs ls <DIRECTORY_HASH>`{{execute}}

Upload the current directory :

`ipfs add –r .`{{execute}}

In a web browser, go to http://ipfs.io/ipfs/<HASH>

La première fois, il y a un délai d’attente.

Let’s change the address of the node in the daemon :

`ipfs config Addresses.Gateway /ip4/127.0.0.1/tcp/8081`{{execute}}

`ipfs daemon`{{execute}}

In a web browser, go to https://[[HOST_SUBDOMAIN]]-[[KATACODA_HOST]].environments.katacoda.com/ipfs/<HASH>
