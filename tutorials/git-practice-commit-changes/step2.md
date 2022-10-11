# git diff

To compare the differences between the working directory and a previously committed version (by default the `HEAD` commit), use `git diff`.

To compare with another version, provide the hash of the commit: `git diff <COMMIT>`.

To compare a single file with another version, specify the file name: `git diff myfile.txt`.

To use an external tool, use the `git difftool` command.

`git add myfile.txt`{{execute}}

`git diff`{{execute}}
