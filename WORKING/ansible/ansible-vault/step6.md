## Décryptage du Vault lors de l'exécution d'un playbook

C'est une bonne pratique de crypter les fichiers de variables sensibles avec une clé stockée dans un fichier texte.

Pour décrypter des données cryptées en utilisant un fichier de mot de passe :

`ansible-playbook -i inventory/qa.hosts playbooks/example.yml --vault-password-file ~/.vault_pass.txt`{execute}

Pour décrypter les données Vault en demandant de saisir le mot de passe à l'utilisateur :

`ansible-playbook -i inventory/qa.hosts playbooks/example.yml --ask-vault-pass`{execute}
