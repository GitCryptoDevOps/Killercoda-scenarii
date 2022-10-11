Get a list of the available options:

`git config –help`{{execute}}

To check the configuration:

`git config –list`{{execute}}

Configure your username and email:

`git config --global user.name "Me"`{{execute}}

`git config --global user.email "me@gmail.com"`{{execute}}

Specify the editor to use:

`git config --global core.editor nano`{{execute}}

Add colors:

`git config --global color.ui "auto"`{{execute}}

Specify a message for the commit:

`git config --global commit.template ~/gitmsg.txt`{{execute}}
