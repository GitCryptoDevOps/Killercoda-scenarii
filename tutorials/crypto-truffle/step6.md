# Deploying

Run the migrations :

`truffle migrate`{{execute}}

If there is no migration, you get the message `> Everything is up to date, there is nothing to compile.`. It will happen if you run again this command:

`truffle migrate`{{execute}}

In Ganache, in the Contracts tab, you see the smart contracts Migrations and HelloWorld.

In the Transactions tab, the gas is displayed. It's the cost to send transaction. You can see 4 transactions:
- contact creation for Migrations,
- contract call for Migrations,
- contact creation for HelloWorld,
- contract call for HelloWorld.

In the Accounts tab, you can see the balance for each account. Especially, on the first account, you see you have 0.01 ETH less (`99.99 ETH` in the `BALANCE` column) and there are 4 transactions (in the `TX COUNT` column).

In the Blocks tab, you can see the blocks. Each transaction is mined in its own block. If you click on the button `1 TRANSACTION` on the line `BLOCK 2`, then on the `CONTRACT CALL` button, the data transaction are displayed in the `TX DATA` field. We can see the migration ID at the end of the data.
You can see 4 blocks (exception the block 0):
- block 1: the first migration : to deploy the contract,
- block 2: set the migration number,
- block 3: deploy the contract,
- block 4: Update the migration number.

## Interaction with Remix

To interact with the contracts :
https://remix.ethereum.org
- Copy/paste the contract code,
- In the Run tab, select `Web3 Provider` as provider
- Web3 Provider Endpoint: enter https://[[HOST_SUBDOMAIN]]-[[KATACODA_HOST]].environments.katacoda.com:7545/ (Ganache)
- copy the contract address from Ganache (in the block 3)
- paste in remix, at the left of the At Address button.

The transactions generated will appear in remix and ganache.

Let's modify the contract, for example rename `"Hello World!"` to `"Hello world!"`:

```
    string public message = "Hello World!";
```{{copy}}

Compile the new contract:

`truffle compile`{{execute}}

Contract are immutable. So after modified a contract, we have to create a new instance of the contract.

Change the migrations files doesn't help because the code wouldn't change.

The solution is :

`truffle migrate --reset`{{execute}}

It executes all the migrations scripts. A new contract address is created.
