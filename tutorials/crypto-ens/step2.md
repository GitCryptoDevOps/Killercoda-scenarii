# Demo ENS

`ipfs daemon`{{execute}}

`cd explorer`{{execute}}

`ipfs add index.html`{{execute}}

`ipfs name publish <HASH>`{{execute}}

It ouputs the peer ID hash after Published to:

`ipfs name resolve <HASH>`{{execute}}

`ipfs.io/ipns/<PEER_ID_HASH>`{{execute}}

Update the index.html file:

`ipfs add index.html`{{execute}}

You get a new hash => if the hash has been communicated to users, if they use the old one, they will use the old version.
