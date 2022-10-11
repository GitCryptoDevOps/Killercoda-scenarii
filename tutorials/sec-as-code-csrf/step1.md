CSRF (Cross-Site Request Forgery) est une attaque d'application Web côté client consistant à exécuter une requête Web malicieuse afin de changer un mot de passe ou de procéder à un virement d'argent à votre banque.

Elle crée de la confusion sur l'identité de l'utilisateur envoyant la requête.

Tandis que l'attaque XSS consiste à insérer un script de code, l'attaque CSRF consiste à falsifier la requête.

Le token CSRF ressemble à l'en-tête Origin, mais il y a plusieurs différences :

| En-tête Origin | Token CSRF |
|-|-|
| Déterminé par le navigateur | Déterminé par le serveur |
| Valeur non cryptée | Valeur encryptée |
| Peut être deviné et spoofé | Ne peut pas être deviné ni spoofé |
| Présent seulement sur les requêtes cross-origin, bien que certaines navigateurs comme Chrome et Safari les ajoutent dans les requêtes de même origine | Présent dans les requêtes cross-origin et de même origine |

Cette attaque peut principalement prendre deux formes :
- un lien hypertexte :

```
<a src="http://mywebsite.com/attack.php?to=123456789&amount=1234">Click here</a>
```

- une lien vers une image :

```
<img src="http://mywebsite.com/attack.php?to=123456789&amount=1234" height="0px" width="0px" />
```

Pour empêcher ce type d'attaque, on utilise un token anti-CSRF. L'idée est de générer deux tokens qui doivent être envoyés à chaque requête provenant de cette même origine. Par exemple, ce token est appellé token d’authenticité (authenticity_token) sur Twitter. Ce token est crypté.

Le processus est le suivant :
- le serveur reçoit une requête,

```
HTTP Request 
GET /attack.php HTTP/1.1
Host: mywebsite.com
...
```

- le serveur génère deux tokens aléatoires cryptographiquement liés, qu'il renvoie à l'utilisateur qui a fait la requête,
- les requêtes suivantes de l'utilisateur doivent comprendre les deux tokens :
  - un token dans un champ caché dans le formulaire (on parle de protection "active") :

```
<form>
  <input type="text" name="account" value=”123456789" />
  <input type="text" name="amount" value="1234" />
  <input type="hidden" name="token" value="XXXXX" />
</form>
```

- un autre token dans l'en-tête Set-Cookie (on parle de protection "passive") :

```
HTTP/1.1 200 OK 
Set-Cookie: YYYYY; csrftoken=XXXZZZZZXX; path=/ 
...
```

- le serveur vérifie ensuite que les deux tokens sont pas été falsifiés : si les tokens ne correspondent pas, le serveur renvoie une erreur.

## Exemple complet

Les jetons CSRF peuvent être mis en oeuvre de manière différente. Par exemple, avec Express, il a le format sel + crypto(sel + secret) :
- secret : c’est une valeur spécifique au serveur, qui peut être soit générée automatiquement soit définie par l'utilisateur;
- sel : c’est une valeur aléatoire d’une longueur fixe;
- crypto() : c'est une fonction qui hache la valeur spécifiée en utilisant SHA1 puis encode le résultat en base64.

Pour valider le jeton, le serveur :
- extrait le sel du token reçu;
- régénère le token à partir de sel et de secret;
- si les deux tokens sont égaux, la requête est validée.

Voici un exemple de serveur Web implémentant un token CSRF avec le package csurf. On suppose que express a déjà été installé.

Installer le module csurf et ses dépendances :

`npm install body-parser cookie-parser express-session csurf`{{execute}}

Si l'option cookie est à false, alors le module cookie-parser est nécessaire; sinon, le module de middleware de session express-session est nécessaire.

Les dépendences utilisées sont donc :
- body-parser permet d'accéder aux bodies des requêtes avant les handlers (https://www.npmjs.com/package/cookie-parser),
- cookie-parser permet d'accéder aux cookies dans les entêtes d'une requête ou d'une réponse (https://www.npmjs.com/package/body-parser),
- express-session permet d'accéder aux sessions (https://www.npmjs.com/package/express-session),
- csurf (https://www.npmjs.com/package/csurf)

Créer une application NodeJS ayant deux routes :
- /form-csrf pour générer un formulaire intégrant le token CSRF qui sera envoyé au serveur; le token doit se trouver dans un champ nommé _csrf,
- /validate-csrf pour valider le token intégré dans la requête.

En cas de réussite, le message CSRF token received est afiché; en cas d'échec, le message Bad token CSRF received est affiché et le code d'état HTTP 403 est retourné.

`cat app-csrf.js`{{execute}}

Lancer le serveur :

`node app-csrf.js`{{execute}}

Vérifier que tout fonctionne correctement en allant à l’adresse http://localhost:5555/form-csrf depuis un navigateur Web puis en soumettant le formulaire.

La requête POST envoie alors au serveur le jeton CSRF (il peut être envoyé sous forme GET, POST ou via une en-tête HTTP) et le cycle se déroule.

Valider le token. Vous obtenez alors le message :

```
CSRF token received
```

Modifier la valeur du token provoque alors une erreur HTTP 403 et le message :

```
Bad token CSRF received
```
