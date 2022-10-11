# Install autocomplete

`curl https://raw.githubusercontent.com/git/git/master/ contrib/completion/git-completion.bash -o ~/.git-completion.bash`{{execute}}

Add to the ~/.bash_profile file:

```
if [ -f ~/.git-completion.bash ]; then
  . ~/.git-completion.bash
fi
```{{copy}}
