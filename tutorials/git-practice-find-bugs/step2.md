## git log

To view the commit messages:
`git log`{{execute}}

To use a short format, use the `--oneline` argument:
`git log --oneline`{{execute}}

To display changes, use the `-p` argument:
git log -p`{{execute}}

To display only the 5 commits from `HEAD`, use the `-n` argument:
`git log -n 5`{{execute}}

To filter over a time period, use the `--until` argument:
`git log --until="1 day ago"`{{execute}}

To filter for commits containing a keyword in the commit message, use the `--grep` argument:
`git log --grep="Bug"`{{execute}}

To exclude merge commits, use the `-m` argument:
`git log -m`{{execute}}
