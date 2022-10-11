# Gestion des requêtes CORS

CORS (Cross-Origin Resource Sharing) utilise des en-têtes HTTP pour demander au navigateur Web de permettre au serveur web tournant à un endroit (on parle d'origine) d'accéder à des ressources se trouvant sur un autre serveur Web (la différence peut être sur le domaine, le protocole ou le port). Pour cela, une requête HTTP "cross-origin" est exécutée.

Une requête CORS est une requête `XMLHttpRequest` ou un appel d'API entre deux sites. Par exemple :
- les fonts Web,
- les textures WebGL,
- les images et les vidéos,
- les feuilles de style HTML,
- les scripts.

La requête "pre-flight" (requêtes préliminaires) consistent à envoyer d'abord une requête HTTP avec la méthode OPTIONS afin de déterminer quelle requête peut être envoyée de façon sécurisée. Cela peut être fait pour les méthodes suivantes :
- `CONNECT`,
- `DELETE`,
- `OPTIONS`,
- `PATCH`,
- `PUT`,
- `TRACE`.

CORS utilise les en-têtes suivantes :
- `Access-Control-Allow-Credentials`
- `Access-Control-Allow-Headers`
- `Access-Control-Allow-Methods`
- `Access-Control-Allow-Origin`
- `Access-Control-Expose-Headers`
- `Access-Control-Max-Age`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`
- `Origin`


## Compléments

La politique de même origine du navigateur empêche la requête d'API de s'exécuter à partir de n'importe où sauf de votre propre application Web.

CORS offre un moyen de contourner cette restriction en laissant votre serveur spécifier les types de demandes autorisés.

CORS permet de contrôler qui peut accéder à quelles parties de votre API.

Soit une application se composant d'un serveur qui expose deux fonctionnalités :
- Un endpoint d'API (`/api/posts`) qui renvoie tous les articles de blog au format JSON
- Une page HTML (`/client.html`) qui interroge l'API pour les articles, puis les affiche sur la page

## L’API

Créer un serveur Web (`app.js`) :
- des articles sont stockés en dur,
- le serveur Web tourne sur le port 9999,
- le point de terminaison `/api/posts` retourne la liste des articles sous format JSON,

```
cat <<-'EOF' > apps.js
var express = require('express');

var POSTS = {
	'1': {'post': 'This is the first blog post.'},
	'2': {'post': 'This is the second blog post.'},
	'3': {'post': 'This is the third blog post.'}
};

var SERVER_PORT = 9999;
var serverapp = express();
serverapp.use(express.static(__dirname));
serverapp.get('/api/posts', function(req, res) {
	res.json(POSTS);
});
serverapp.listen(SERVER_PORT, function() {
	console.log('Started');
});
EOF
```

Lancer le serveur :

```
node app.js
```

Vérifier que le serveur tourne en se rendant à l’adresse `http://127.0.0.1:9999/api/posts` dans un navigateur web.

Créer un fichier `client.html` avec le contenu :

```
cat <<-'EOF' > client.html
<!DOCTYPE html>
<html><body onload="getBlogPosts();">
<style>
.post { margin-bottom: 20px; }
</style>
<div id="output"></div>
<script>
var createXhr = function(method, url) {
	var xhr = new XMLHttpRequest();
	xhr.onerror = function() {
		document.getElementById('output').innerHTML = 'ERROR';
	};
	xhr.open(method, url, true);
	retunr xhr;
}

var getBlogPosts = function {
	var xhr = createXhr('GET', 'http://127.0.0.1:9999/api/posts');
	xhr.onload = function() {
		var data = JSON.parse(xhr.responseText);
		var elem = document.getElementById('output');
		for (var postId in data) {
			var postText = data [postId]['post'];
			var div = document.createElement('div');
			div.className = 'post';
			div.appendChild(document.createTextNode(postText));
			elem.appendChild(div);
		}
	};
	xhr.send();
};
</script>
</body>
</html>
EOF
```

La page `client.html` envoie une requête HTTP à `/api/posts`.

Pour créer une requête CORS (requête cross-origin), nous devons modifier l’origine de l’appel. Pour cela, créer un second serveur sur le port 1111 qui envoie des requêtes à l'API sur `127.0.0.1:9999`.

Ajouter à la fin au fichier `app.js` :

```
var CLIENT_PORT = 1111;
var clientapp = express();
clientapp.use(express.static(__dirname));
clientapp.listen(CLIENT_PORT, function() {
	console.log('Started on port ' + CLIENT_PORT);
});
```

Redémarrer le serveur.

Visiter la page `http://127.0.0.1:1111/client.html`

Dans la console Javascript, une erreur `XMLHttpRequest cannot load http://127.0.0.1:9999/api/posts. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:1111' is therefore not allowed access.` En effet, l’appel à l’API REST se fait maintenant depuis une autre origine, un autre serveur Web.

Afin de mettre en oeuvre la protection introduite par la politique de même origine du navigateur dans le cadre des requêtes CORS, le navigateur :
- ajoute des informations supplémentaires à la requête afin que le serveur puisse identifier le client;
- interprète la réponse du serveur et décide d’envoyer la requête au client ou de renvoyer une erreur.

Le flux de requêtes CORS complet est décrit ci-dessous :
- Le client initie la requête au navigateur.
- Le navigateur ajoute des informations supplémentaires via des entêtes HTTP à la requête et les transmet au serveur.

```
GET /api/posts HTTP/1.1
User-Agent: Chrome
Host: 127.0.0.1:9999
Accept: */*
Origin: http://localhost:1111
```

- Le serveur décide de la manière de répondre à la requête et envoie la réponse au navigateur avec des entêtes HTTP supplémentaires.

```
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
```

- Le navigateur décide si le client doit avoir accès à la réponse et transmet la réponse au client ou renvoie une erreur.

CORS utilise les entêtes HTTP suivantes :
- l'entête de la requête `Origin`,
- l'entête de réponse `Access-Control-Allow-Origin`.

Si l’une de ces entêtes manque, la requête CORS échoue.

Quelques informations sur la console :
- La console n'affiche que les entêtes de requête et aucun entête de réponse.
- Si la requête CORS échoue, le navigateur masque les informations de réponse de la console.

L'entête `Origin` permet au client de s'identifier auprès du serveur.

C’est le navigateur lui-même qui ajoute l’entête `Origin`.

L'origine définit où se trouve la ressource client : dans notre cas, `http://localhost:1111`.

L'origine `null` est acceptée : cela signifie que l'origine du client ne peut pas être déterminée. Cela arrive par exemple lors de l'ouverture d'un fichier dans un navigateur.

Un serveur utilise l'origine pour déterminer d'où provient une requête :
- Lorsqu'une origine fait référence au client qui fait la demande, on parle d’origine du client.
- Lorsqu'une origine fait référence à l'URL recevant la requête, on parle d’origine du serveur.

Un navigateur utilise l'origine pour définir si une demande est de même origine ou d'origine croisée et présente un comportement différent selon le cas.

Une requête est une requête de même origine lorsque l'origine du client et l'origine du serveur sont les mêmes. Sinon, la requête est une requête d'origine croisée.

Si la demande est d'origine croisée, le navigateur utilise CORS pour déterminer comment gérer la demande.

Le navigateur est seul responsable de la configuration de l'entête `Origin`.

- client au navigateur : `HTTP GET /api/posts`
- navigateur au serveur : `HTTP GET /api/posts - Origin : http://localhost:1111`

Les requêtes de même origine peuvent parfois également avoir un entête `Origin` : Chrome et Safari incluent un entête `Origin` sur les requêtes non `GET` de même origine. Dans ces cas, l’entête `Origin` a la même valeur que la valeur d’origine du serveur.

Lors de l’identification des requêtes CORS, il ne suffit donc pas de vérifier que l’entête `Origin` existe. Il faut aussi vérifier que la valeur d'origine est différente de la valeur d'origine du serveur.

Lorsque le serveur répond au navigateur, il ajoute l'entête `Access-Control-Allow-Origin` à la réponse pour approuver la demande. Si cet entête n’est pas présent, la requête CORS échoue.

```
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
```

La valeur de l'entête `Access-Control-Allow-Origin` peut être :
- une valeur d'origine : indique que la valeur d'origine ne donne accès qu'à un client spécifique,

```
Access-Control-Allow-Origin: http://localhost:1111
```

- ou le caractère `*` : indique que n'importe quel client peut accéder à cette ressource,

```
Access-Control-Allow-Origin: *
```

Le moyen le plus simple d'ajouter le support CORS à un serveur est d'ajouter `Access-Control-Allow-Origin: *` à chaque réponse.

```
cat <<-'EOF' > apps.js
var express = require('express');

var POSTS = {
	'1': {'post': 'This is the first blog post.'},
	'2': {'post': 'This is the second blog post.'},
	'3': {'post': 'This is the third blog post.'}
};

// Ajout de l’en-tête de réponse Access-Control-Allow-Origin
var handlebars = function(req, res, next) {
  res.set(‘Access-Control-Allow-Origin', ‘*’);
  next();
};

var SERVER_PORT = 9999;
var serverapp = express();
serverapp.use(express.static(__dirname));
serverapp.use(handleCors);
serverapp.get('/api/posts', function(req, res) {
	res.json(POSTS);
});
serverapp.listen(SERVER_PORT, function() {
	console.log('Started');
});
EOF
```

La fonction `handleCors` ajoute un en-tête `Access-Control-Allow-Origin` à la réponse puis appelle `next()` pour continuer le traitement de la demande.

Redémarrer le serveur.

Dans un navigateur, aller à l’adresse `http://localhost:1111/client.html`

Les articles de blog devraient être affichés.

Vérifier avec la console que les deux entêtes sont bien présentes.

`Access-Control-Allow-Origin` ne peut accorder des autorisations qu'à une seule origine à la fois. Si `Access-Control-Allow-Origin` n'est pas `*` ou ne correspond pas exactement à l'en-tête `Origin`, le navigateur rejette la demande.

D’autres entêtes peuvent être utilisées :
- `Access-Control-Allow-Origin` (obligatoire) : indique si la réponse peut être partagée avec un autre hôte
   - Utiliser `*` pour autoriser les demandes de toutes les origines
   - Utiliser une liste blanche pour n'autoriser que certaines origines
- `Access-Control-Allow-Credentials` (facultatif) : indique que les cookies doivent être inclus dans la requête CORS.
  - `true` pour autoriser les cookies sur les requêtes
  - N’activer les cookies que s’ils sont nécessaires; dans ce cas, s’assurer de valider l'origine et mettre en œuvre la protection CSRF.
- `Access-Control-Allow-Methods` (obligatoire) :
    - liste les méthodes HTTP autorisées prises en charge par le serveur (HEAD, OPTIONS, GET, POST, PUT, PATCH ou DELETE)
    - présent sur les réponses de contrôle en amont
- `Access-Control-Allow-Headers` (obligatoire) :
    - indique les entêtes HTTP autorisés (acceptés par le serveur) sur une URL (liste séparée par des virgules)
    - présent sur les réponses de contrôle en amont
    - Pour prendre en charge complètement les entêtes, faire écho à la valeur `Access-Control-Request-Headers`
- `Access-Control-Max-Age` (facultatif) : mise en cache la réponse pour la valeur spécifiée par celui-ci
    - indique le nombre de secondes de mise en cache des requêtes de contrôle en amont
    - présent sur les réponses de contrôle en amont
    - les navigateurs peuvent avoir leurs propres plafonds `maxAge`
- `Access-Control-Expose-Headers` (facultatif) :
    - indique les entêtes de réponse à exposer aux clients (liste d'en-têtes séparés par des virgules)
    - pas requis pour une requête CORS réussie
