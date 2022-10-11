# CSRF

CSRF (Cross-Site Request Forgery) est une attaque d'application Web côté client consistant à exécuter une requête Web malicieuse dans ce style :

```
<img src="http://example.com/transfermoney.php?to=attackeraccnt&amount=10000" height="0px" width="0px" /> 
```

ou :

```
<a src="http://example.com/transfermoney.php?to=attackeraccnt&amount=10000">Click Me I'm Harmless!</a> 
```

Pour empêcher ce type d'attaque, on utilise un token anti-CSRF. L'idée est de générer deux tokens qui doivent être envoyés à chaque requête par la victime.

Le processus est le suivant :
- le serveur reçoit une requête,

```
HTTP Request 
GET /transfermoney.php HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5 Accept-Encoding: gzip, deflate 
```

- il génère deux tokens aléatoires cryptographiquement liés,
- il les renvoie à l'utilisateur dans la réponse,
- les requête suivantes comprennent les deux tokens :
  - un token dans un champ caché dans le formulaire,

```
<form> <input type="text" name="accnt" value=”123456789" /> <input type="text" name="amount" value="10000" /> <input type="hidden" name="anticsrf_token" value="f10dd7316b65649e" /></form> </form> 
```

  - un autre token dans l'en-tête `Set-Cookie`.

```
- le serveur vérifie que les deux tokens sont pas été falsifiés : si les tokens ne correspondent pas, le serveur renvoie une erreur.
HTTP/1.1 200 OK 
Date: Fri, 21 Feb 2014 07:45:52 GMT 
Server: Apache/2.2.14 (Ubuntu) 
X-Powered-By: PHP/5.3.2–1ubuntu4.5 
Set-Cookie: 8c66e888676201a444e9697182be4bad=vuf1g409ef4gaqh74hi3rrcht1; csrftoken=e358efa489f58062; path=/ 
```

- le serveur vérifie que les deux tokens sont pas été falsifiés : si les tokens ne correspondent pas, le serveur renvoie une erreur.

## Exemple complet

Une attaque CSRF tire parti de l'identité de l'utilisateur en créant de la confusion. Il trompe généralement l'utilisateur avec une activité de transaction dans laquelle l'état est modifié - par exemple, changer le mot de passe d'un site Web d'achat ou demander un transfert d'argent à votre banque.

C'est légèrement différent d'une attaque XSS car, avec CSRF, l'attaquant tente de falsifier la requête plutôt que d'insérer un script de code. Par exemple, l'attaquant peut forger une demande de transfert d'une certaine somme d'argent de la banque de l'utilisateur et envoyer ce lien dans un e-mail à l'utilisateur. Dès que les utilisateurs cliquent sur ce lien, la banque reçoit une demande et transfère l'argent sur le compte de l'attaquant. CSRF a un impact minimal sur le compte utilisateur individuel, mais il peut être très dangereux si les attaquants peuvent accéder au compte administrateur.

Les cookies sont toujours inclus dans les requêtes de même origine, quelle que soit la manière dont la requête a été initiée.

Si un navigateur comporte des cookies associés à un site, ils sont toujours inclus dans la requête.

Cela signifie qu’un pirate peut envoyer un tweet lorsqu’un utilisateur visite une page Web qu’il crée pour cela.
- Lorsqu’un utilisateur visite le site Web de Twitter :

```
POST /i/tweet/create HTTP/1.1
Host: twitter.com
Cookie: pid=12345

Status=A new tweet
```

- Lorsqu’il visite la page Web du pirate :

```
POST /i/tweet/create HTTP/1.1
Host: twitter.com
Cookie: pid=12345

Status=Another tweet
```

CSRF concerne ce processus : un site non autorisé fait une requête en votre nom en utilisant vos cookies. Il s’agit d’un type d’attaque qui consiste à faire des actions sans lire vos données.

Pour contrer cette attaque, Twitter utilise un token CSRF, qu’ils appellent token d’authenticité (`authenticity_token`). Ce token crypté est utilisé pour vérifier que la requête provient des propres serveurs de Twitter, et non d’un autre. Les requêtes sans ce token échouent donc.

`authenticity_token` est généré et crypté par un serveur puis inclus dans les requêtes.

Le cycle de vie devient :
- Lors d’une première requête à Twitter, le serveur de Twitter génère un `authenticity_token unique`.
- Le client l’inclut dans un champ de formulaire caché dans la réponse HTML : on parle de protection "active".

```
<html><body>
<form>
  <input type="hidden" name="authenticity_token" value="abcde" />
  <input type="text" name="status" />
</form>
</body></html>
```

- Lors des requêtes futures à Twitter, le texte du nouveau tweet et le token sont envoyés au serveur de Twitter : on parle de protection "passive"

```
POST /i/tweet/create HTTP/1.1
Host: twitter.com
Origin: http://twitter.com
status=It's a tweet
authenticity_token=abcde
```

- Si la valeur du token correspond à la valeur attendue, le nouveau tweet est créé; sinon, la requête est rejetée.

Le navigateur ne connaît donc pas la valeur du token CSRF.

Les jetons CSRF sont mis en oeuvre de manière différente. Par exemple, avec Express, le jeton (https://github.com/expressjs/csurf) a le format suivant : sel + crypto(sel + secret)
- secret : C’est une valeur secrète par serveur, qui peut être soit générée automatiquement soit définie par l'utilisateur au cours de la session.
- sel : C’est une valeur aléatoire d’une longueur fixe.
- crypto : La fonction crypto() hache la valeur spécifiée en utilisant SHA1 puis encode le résultat en base64.

Pour valider le jeton, le serveur régénère de son côté le token à partir du "sel", extrait du token reçu, et de "secret ». Si les deux tokens sont égaux, la requête est validée.

Bien que le jeton CSRF ressemble à l'en-tête Origin, il y a plusieurs différences :

| En-tête Origin | Token CSRF |
|-|-|
| Déterminé par le navigateur | Déterminé par le serveur |
| Valeur non cryptée | Valeur encryptée |
| Peut être deviné et spoofé | Ne peut pas être deviné ni spoofé |
| Présent seulement sur les requêtes cross-origin, bien que certaines navigateurs comme Chrome et Safari les ajoutent dans les requêtes de même origine | Présent dans les requêtes cross-origin et de même origine |

Voici un exemple de serveur Web implémentant un token CSRF :

```
npm install express body-parser cookie-parser express-session csurf
```

```
vi app.js
```

```
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var csrf = require('csurf');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
	secret: 'MYSECRET',
	saveUnitialized: true,
	resave: true
}));
app.use(csrf());
app.get('/csrftest', function(req, res) {
	var = form = '<html><body><form action="/csrftest" method="post">\r\n';
	form += '<input type="text" name="_csrf" value="' + req.csrfToken() + '" />\r\n';
	form += '<input type="submit" value="Submit" />\r\n';
	form += '</form></body></html>';
	res.send(form);
});
app.post('/csrftest', function(req, res) {
	res.send('CSRF token received');
});
app.use(function(err, req, res, next) {
	res.status(403).send('Bad token CSRF');
})
app.listen(5555);
```

Vérifier que tout fonctionne correctement en allant à l’adresse http://localhost:5555/csrftest depuis un navigateur Web puis en soumettant le formulaire. La requête POST envoie alors au serveur le jeton CSRF (il peut être envoyé sous forme GET, POST ou via une en-tête HTTP) et le cycle se déroule.

Modifier la valeur du token provoque alors une erreur HTTP 403.
