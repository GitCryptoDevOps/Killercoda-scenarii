## Cryptage avec un fichier YAML Vault

Créer les données à crypter :

`car my_vault.yml`{execute}

Crypter le fichier :

`ansible-vault encrypt my_vault.yml`{execute}

Afficher les données décryptées :

`cat vault.yml`{execute}

Crypter les fichiers :

`ansible-vault encrypt my_vault.yml --vault-password-file vault_pass.txt`{execute}
