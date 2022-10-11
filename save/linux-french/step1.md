## Débogage avec `iftop`

`iftop` permet d'afficher des statistiques de trafic réseau utiles pour le débogage. Il provient du repostiory EPEL (Extra Packages for Enterprise Linux).

Sur le premier hôte :

- Installer `iftop` :

`apt install iftop`{{execute HOST1}}

- Afficher la liste des interfaces réseau :

`ifconfig`{{execute HOST1}}

- Démarrer `iftop` sur l'interface `ens3` :

`iftop -i ens3`{{execute HOST1}}

Sur le second hôte :

- Se connecter au premier hôte.

`ssh host01`{{execute HOST2}}

- Générer un flux de traffic :

`top`{{execute HOST2}}

Sur le premier hôte, vous voyez le traffic pronvenant du second hôte (`==> host02`).

Le traffic global est affiché en bas de la fenêtre :
- `TX` : C'est le traffic transféré.
- `RX` : C'est le traffic reçu.
- `TOTAL` : C'est le traffic total.

Lorsque vous tapez au clavier sur la connexion, les valeurs `RX` augmentent.

Pour afficher une version texte seulement :

`iftop -i ens3 -t`{{execute HOST1}}
