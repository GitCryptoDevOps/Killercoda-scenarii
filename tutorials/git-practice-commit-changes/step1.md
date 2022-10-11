# git status

Let's initialize the git repository:

`git init`{{execute}}
`echo "ok1" > myfile.txt`{{execute}}
`git add myfile.txt`{{execute}}
`git commit myfile.txt -m "Creation myfile.txt"`{{execute}}
`echo "ok2" > myfile.txt`{{execute}}

The situation is that we are modifying the `myfile.txt` file while the previous version has been integrated into the staging area.

To view the changes in the working directory and staging area against the repository, use :

`git status`{{execute}}
