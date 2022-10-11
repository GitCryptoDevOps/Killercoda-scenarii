# Truffle deployment

Infura is a hosted Ethereum node cluster. It allows to run an application without requiring to setup their own Ethereum node or wallet.

Infura is a provider of MetaMask.

`npm install truffle-hdwallet-provider`{{execute}}

https://truffleframework.com/tutorials/using-infura-custom-provider

https://infura.io/dashboard

- Click on CREATE NEW PROJECT
- ENDPOINT : select the endpoint RINKEBY
- Copy the endpoint

- Go to https://iancoleman.io/bip39/
- Coin = ETH - Ethereum
- Generate 12 words
- Copy the content of the BIP39 Mnemonic field
- Copy the first address in the Derived Addresses section

- Visit www.rinkeby.io

Modify the `truffle.js`:

```
let HDWalletProvider = require("truffle-hdwallet-provider");
let mnemonic = "<MNEMONIC_FIELD_VALUE>"

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 7545,
            network_id: "*"
        },
        rinkby: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "<ENDPOINT>")
            },
            network_id: '4',
        }
    }
};
```{{copy}}

`truffle migrate --network rinkby`{{execute}}
