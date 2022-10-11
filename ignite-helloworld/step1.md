Install Ignite:

`curl https://get.ignite.com/cli | bash`{{execute}}

Create a blockchain:

`ignite scaffold chain hello`{{execute}}

Display help:

`ignite scaffold --help`{{execute}}

`cd hello`{{execute}}

`ls -l`{{execute}}

- `app/`: Files that wire together the blockchain. The most important file is app.go that contains type definition of the blockchain and functions to create and initialize it.
- `cmd/`: The main package responsible for the CLI of compiled binary.
- `docs/`: Directory for project documentation. By default, an OpenAPI spec is generated.
- `proto/`: Protocol buffer files describing the data structure.
- `testutil/`: Helper functions for testing.
- `vue/`: A Vue 3 web app template.
- `x/`: Cosmos SDK modules and custom modules.
- `config.yml`: A configuration file for customizing a chain in development.
- `readme.md`: A readme file for your sovereign application-specific blockchain project.

Start the blockchain:

`ignite chain serve`{{execute}}

Verify that:
- the (low-level) Tendermint API is online:

`curl http://localhost:26657`{{execute}}

- the (high-level) blockchain API is online:

`curl http://localhost:1317`{{execute}}

To stop the blockchain, press `Ctrl-C`.
