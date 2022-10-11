# Deploying to production

To create a new pipeline, go to the pipelines pages.

In the Executions tab:
- Click on Clone existing pipeline.
- Select the pipeline to clone.
- Click on Clone actions.
- Enter in the pipeline.
- NAME : change the name.
- TRIGGER MODE: select Manual
- BRANCH TAG THA TTRIGGERS THE PIPELINE: Single branch, master
- Visibility, Decide who can see this pipeline: select Administrator, click on Apply
- Click on Save settings

In the Actions tab:
- After tests, add the action Wait for approval
- Question: Do you wnt to push to production?
- Permissions: select Administrators
- Click on Add this action
- Add a step: Blockchain, Truffle
- In the Run tab:

`mv truffle-prod.js truffle.js`{{execute}}

- In the Environment tab:

`npm -g i truffle`{{execute}}

`npm install truffle-hdwallet-provider`{{execute}}

- In the Services tab: no service
- In the Variables tab, add a variable PRIV_SEED for the mnemonic
- Click on Add this action

Edit the migration step:
- In the Run tab, edit the code:

`mv truffle-prod.js truffle.js`{{execute}}

`truffle migration --network rinkby`{{execute}}

On the pipelines pages, click on Run to run the pipeline. Enter a comment. Click on Run now

Click on Approve

You see on rinkby.etherscan.io the transactions.
