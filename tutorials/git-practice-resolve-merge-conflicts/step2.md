# View conflict

In a conflict, the differences between the local and remote versions are displayed in the format of the `git diff` command, which corresponds to the format of the Linux command "diff".

Local changes are between `<<<<<<< HEAD` and `=======`.

Remote changes are between `=======` and `>>>>>>>`.

To resolve the conflict, you need to change the files to the desired end state.

To use an external tool, use the command `git mergetool`.
