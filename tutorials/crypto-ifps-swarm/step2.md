# Demo Swarm

Running a Swarm node :

On MacOS, run `brew install go git`.

`mkdir ~/go`{{execute}}

`export GOPATH="$HOME/go"`{{execute}}

`mkdir –p $GOPATH/src/github.com/ethereum`{{execute}}

`cd $GOPATH/src/github.com/ethereum`{{execute}}

`git clone https://github.com/ethereum/go-ethereum`{{execute}}

`cd go-ethereum`{{execute}}

`go get github.com/ethereum.go-ethereum`{{execute}}

`go install -v ./cmd/geth`{{execute}}

`go install -v ./cmd/swarm`{{execute}}

`swarm version`{{execute}}

Create an account:

`geth account new`{{execute}}

Enter a passphrase.

Copy the swarm address.

`geth`{{execute}}

`swarm --bzzaccount <SWARM_ADDRESS>`{{execute}}

Enter the passphrase.

The node is running

Upload a file to a Swarm node :

`swarm up ~/explorer/index.html`{{execute}}

In a Web broswer, go to `https://[[HOST_SUBDOMAIN]]-[[KATACODA_HOST]].environments.katacoda.com:8500/bzz:/`.
