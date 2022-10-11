# git ignore

First, let's create a log file that we want to ignore:

`touch myfile.log`{{execute}}

`git status`{{execute}}

To ignore certain files, you need to create a `.gitignore` file in the repository root containing the list of files to be ignored. You can use wildcards (`*`). These files will be ignored by the `git add` command.

To add a `.gitignore` file to the repository:

`echo '*.tmp' > .gitignore`{{execute}}

`echo '*.log' >> .gitignore`{{execute}}

`git add .gitignore`{{execute}}

`git commit -m "Add .gitignore file"`{{execute}}

`git status`{{execute}}
