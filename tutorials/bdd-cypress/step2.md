Get the tests from the `docker-cypress-bdd-runner-test` repository.

`git clone https://github.com/BrunoDelb/docker-cypress-bdd-runner-test.git`{{execute}}

Enter in the directory:

`cd docker-cypress-bdd-runner-test`{{execute}}

Tests are in the 

`ls cypress/integration/socialNetworks/`{{execute}}

The Facebook feature is:

`cat cypress/integration/socialNetworks/Facebook.feature`{{execute}}

The Facebook implementation is:

`cat cypress/integration/socialNetworks/Facebook/openingFacebook.js`{{execute}}

The Twitter feature is:

`cat cypress/integration/socialNetworks/Twitter.feature`{{execute}}

The Twitter implementation is:

`cat cypress/integration/socialNetworks/Twitter/openingTwitter.js`{{execute}}

An implementation is shared:

`cat cypress/integration/common/I_see_STRING_in_the_title.js.js`{{execute}}
