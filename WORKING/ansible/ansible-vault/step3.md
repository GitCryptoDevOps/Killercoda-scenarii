## Décryptage

Pour décrypter un fichier :

`ansible-vault decrypt my_vault.yml`{execute}

Afficher les données décryptées :

`cat my_vault.yml`{execute}

Pour éviter de saisir le mot de passe, utiliser l'option `--vault-password-file` pour spécifier un fichier de clé :

`ansible-vault decrypt my_vault.yml --vault-password-file vault_pass.txt`{execute}
