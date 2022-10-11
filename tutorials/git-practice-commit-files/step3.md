# git add

Git has three areas:
- a working directory,
- a staging area,
- the repository itself.

Before you can add files to a Git repository, you have to add them to the staging area.

To add some files from the working directory to the staging area: `git add <FILENAME|DIRECTORY_NAME>`.

It is recommended that you make targeted, small and frequent commits.

If a file that is already in the staging area is changed, you must add the file back to the staging area to reflect the changes.

Add the file `index.html` to the staging area:

`git add myfile.txt`{{execute}}

Display the status of the working directory and staging area:

`git status`{{execute}}
