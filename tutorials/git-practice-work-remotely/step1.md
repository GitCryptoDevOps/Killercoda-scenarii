## Git Remote

Remote repositories allow changes to the repository to be shared. They are usually located on a build server or on a website such as Github.com. Their address is in the form :
- https://github.com/XXX/YYY.git for access via an HTTPS URL,
- git@github.com:/XXX/YYY.git for access via an SSH connection.

To add this remote location with the name origin, use :
`git remote add origin /s/remote-project/1`{{execute}}

The `git clone` command also does this automatically.
