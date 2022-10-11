# CI/CD pipeline

Buddy allows to create environments and deployment pipelines.

- https://buddy.works
- Create an account
- Click on Create new project
- Connect a repo
- Click on Add a new pipeline
- Name : name of the pipeline
- Trigger mode : select On push
- Select Blockchain
- Select Truffle

Example : https://github.com/jackwzp/BuddyCI
- https://raw.githubusercontent.com/jackwzp/BuddyCI/master/truffle-local.js
- https://raw.githubusercontent.com/jackwzp/BuddyCI/master/truffle-prod.js

The actions:
- Run:

`mv truffle-local.js truffle.js`{{execute}}

`truffle test --network buddy`{{execute}}

- Environment:

`npm -g i truffle`{{execute}}

- Services:
  - Attach service: select Ethereum Ganache
  - Price of gas in wei: 9000
  - Click on Add new account
  - Click on Add this action
  - Click on the + icon under "Execute: # truffle migrate"
  - Click on Email
  - Email body: Unit test finished on develop branch
  - Recipients: <EMAIL>
  - Click on Add this action

You can move the actions for different contexts (fail, ...).

Make a change in github.

The build is done.

The tabs:
- Executions: the build and test execution results,
- Actions: the list of the actions of the pipeline,
- Filesystem: you see the files.
- Variables : to create environment variables and SSH keys
- Settings: the settings
