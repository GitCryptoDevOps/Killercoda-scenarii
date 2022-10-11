# Truffle Javascript testing

`ls -l test/`{{execute}}

Run tests:

`truffle test`{{execute}}

As there is no test, you get the message `0 passing (0ms)`.

To run a specific test, run `truffle test <FILE_PATH>`.

`vi test/TestHelloWorld.js`{{execute}}

Add this content:

```
const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld contract", function(accounts) {
    it("Is the contract deployed?", async () => {
        const helloworld = await HelloWorld.new();
        assert(helloworld, "contract was not deployed");
    })
})
```{{copy}}

This test checks the HelloWorld contract is deployed.

Run test:

`truffle test`{{execute}}

If the smart contract is well deployed, you get the message `1 passing (99ms)`.
