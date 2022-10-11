## La sous-commande login

La sous-commande `login` permet d'authentifier les clients locaux en ligne et de commande et `ansible-galaxy`:

`ansible-galaxy login [options]`

Les options disponibles sont :
- `-c`, `--ignore-certs` : ignore les erreurs de certificat TLS;
- `-s`, `--server` : remplace le serveur par défaut `https://galaxy.ansible.com`;
- `--github-token` : permet de s'authentifier par un token au lieu d'utiliser le mot de passe GitHub; à n'utiliser que si l'authentification à deux facteurs est activée sur le compte GitHub.
