# Truffle UI

`mkdir src`{{execute}}

`cp ~/index.html src/`{{execute}}

`cat src/index.html`{{execute}}

`mkdir js`{{execute}}

## jQuery

Install jQuery:

`npm i jquery`{{execute}}

Add to the `js/` directory the `jquery.min.js` file:

`cp node_modules/jquery/dist/jquery.min.js js/`{{execute}}

## web3

Visit the website https://github.com/ethereum/web3.js.

`web3.js` allows to communicate with Ethereum nodes. It includes the main following packages:
- `web3.eth`: to interact with the Ethereum smart contracts and Ethereum blockchain,
- `web3.bzz`: to interact with Swarm, a decentralized file store,
- `web3.shh`: to interact with the Whisper protocol, for broadcasting,
- `web3.*.net`: to interact with the network properties of an Ethereum node,
- `web3.utils`: to get utilities like converting strings to hex literals and Ether values to Wei.

Install web3:

`npm i web3 --save`{{execute}}

Add to the `js/` directory the `web3.min.js` file:

`cp node_modules/web3/dist/web3.min.js js/`{{execute}}

## Lite Server

Install the web server Lite Server:

`npm install -g lite-server`{{execute}}

Start the server in background:

`lite-server &`{{execute}}

By default, it starts on the port 3000.

In a web browser, go to https://[[HOST_SUBDOMAIN]]-[[KATACODA_HOST]].environments.katacoda.com:3000/.

Let's check the webserver is started correctly:

`curl 127.0.0.1:3000`{{execute}}

Create the `app.js` file:

`cp ~/app.js js/`{{execute}}

`cat js/app.js`{{execute}}

- Unlock Metamask.
- Go to the Custom RPC page
- Enter in the network URL the Ganache URL: https://[[HOST_SUBDOMAIN]]-[[KATACODA_HOST]].environments.katacoda.com:7545/
- Click on Save
- In Ganache, import the private key:
  - click on the Accounts tab,
  - click on the key icon,
  - copy the private key,
- In Metamask, import the account by entering the private key

In remix:
- paste the contract source code,
- in the Run tab, select Injected Web3,
- select the account,
- enter the contract address at the left of the button At Address,
- click on the button.

- An UI is displayed.
- By clicking on the objects, the value is displayed.
- In `authorize` address, enter the accound address.
- In the UI, click on `vote`. Metamask is opened.
- Submit the transaction.
- A `tx_hash` is displayed in the Chrome console. The vote has been submited and displayed in the Web page.
- The same transaction is visible in Ganache.
