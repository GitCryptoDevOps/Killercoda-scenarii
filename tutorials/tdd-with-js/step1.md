# Setup

`npm init`{{execute}}

A `package.json` file is created.

Edit this file and change the following section as below:

```
"scripts": {
     "test": "jest"
}
```{{copy}}

`npm install --save-dev jest`{{execute}}

`touch calculator.js`{{execute}}

`touch calculator.test.js`{{execute}}

## Setup watcher

`npm run test -- --watchAll`{{execute}}
