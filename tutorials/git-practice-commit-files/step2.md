# git status

Once a directory is in the repository, it is called a working directory. This contains the latest downloaded version of the repository as well as the changes to be validated. When you modify files, the changes are made in this directory.

To see a list of files that have changed between your working directory and what is in the repository, use the command:

`git status`{{execute}}

This command displays what is called the status of the working tree.

By default, files are said to be "untracked".

`echo "Hello" > myfile.txt`{{execute}}

`git status`{{execute}}
