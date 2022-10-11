# Build the contract

Compile the smart contract:

`truffle compile`{{execute}}

`truffle compile` builds only the modified contract while `truffle compile --all` builds all the contracts.

Let's check the contract has been built:

`ls -l build/contracts/`{{execute}}

Let's see the content of built files:

`cat build/contracts/HelloWorld.json`{{execute}}

Create a new migration file:

`cd migrations`{{execute}}

`cp 1_initial_migration.js 2_deploy_helloworld.js`{{execute}}

In the new migration file, rename `Migrations` into `Helloworld`:

`vi 2_deploy_helloworld.js`{{execute}}

The new content of the file is:

```
const HelloWorld = artifacts.require("HelloWorld");

module.exports = function (deployer) {
  deployer.deploy(HelloWorld);
};
```

`cd ..`{{execute}}
